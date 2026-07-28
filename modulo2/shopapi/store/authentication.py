from urllib.parse import unquote

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import AuthenticationFailed


class QueryStringJWTAuthentication(JWTAuthentication):
    def get_header(self, request):
        header = super().get_header(request)
        if header:
            if isinstance(header, bytes):
                header = header.decode('utf-8')
            header = unquote(header.strip())
            return header.encode('utf-8')

        return self._get_query_auth_header(request)

    def _get_query_auth_header(self, request):
        query = None
        if hasattr(request, 'query_params'):
            query = request.query_params.get('Authorization') or request.query_params.get('authorization')
        if not query:
            query = request.GET.get('Authorization') or request.GET.get('authorization')

        if not query:
            return None

        query = unquote(query.strip())
        if not query.lower().startswith('bearer '):
            query = f'Bearer {query}'
        return query.encode('utf-8')

    def authenticate(self, request):
        header = self.get_header(request)
        if header is None:
            return None

        try:
            raw_token = self.get_raw_token(header)
        except AuthenticationFailed:
            query_header = self._get_query_auth_header(request)
            if query_header is None or query_header == header:
                raise
            raw_token = self.get_raw_token(query_header)

        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token
