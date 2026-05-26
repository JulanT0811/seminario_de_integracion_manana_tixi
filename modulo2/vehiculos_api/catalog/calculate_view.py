from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view

def calcular_area_triangulo(request):
    try:
        base = float(request.GET.get("base", 0))
        altura = float(request.GET.get("altura", 0))
        area = (base * altura) / 2
        return JsonResponse({"area": area, 
                            "base": base, 
                            "altura": altura
                            })

    except ValueError:
        return JsonResponse({
            "error": "Debe enviar base y altura validos."
        }, status=400)
    


@api_view(["POST"])
def promedio_ventas(request):
    try: 
        productos = request.data.get('productos')
        if not productos: # or not isInstance(productoos, list):
            return JsonResponse(
                {
                    "error": "Debe enviar un arreglo de productos con sus ventas."
                }
            )
        total_ventas = 0
        for producto in productos:
            ventas = float(producto.get("ventas", 0))
            total_ventas += ventas
            cantidad_productos = len(productos)
            promedio = total_ventas / cantidad_productos

        return JsonResponse({
            'cantidad_productos': cantidad_productos,
            'total_ventas': total_ventas,
            'promedio_ventas': promedio
        })

    except ValueError as e:
        return JsonResponse({
            "error": str(e)
        }, status = status.HTTP_400_BAD_REQUEST)