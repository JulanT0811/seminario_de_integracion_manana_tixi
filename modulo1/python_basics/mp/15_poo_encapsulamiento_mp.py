class ValidadorTickets:
    def __init__(self, ticket_id, saldo_inicial=0):
        self.ticket_id = ticket_id
        self.__recaudacion = saldo_inicial
        self.__historial_validaciones = []
        self.__estado_activo = True
        self.__registrar_evento(f"Validador activado en {ticket_id} con base de ${saldo_inicial}")

    @property
    def recaudacion(self):
        return self.__recaudacion

    @property
    def estado_activo(self):
        return self.__estado_activo

    @property
    def historial(self):
        return list(self.__historial_validaciones)

    def validar_entrada(self, tarifa):
        if tarifa <= 0:
            raise ValueError("La tarifa no puede ser nula o negativa")
        self.__recaudacion += tarifa
        self.__registrar_evento(f"Validación exitosa: +${tarifa}")
        return self

    def anular_ticket(self, tarifa):
        if tarifa <= 0:
            raise ValueError("La cantidad a anular debe ser positiva")
        if tarifa > self.__recaudacion:
            raise ValueError(f"No se puede anular: excede recaudación actual (${self.__recaudacion})")
        self.__recaudacion -= tarifa
        self.__registrar_evento(f"Anulación: -${tarifa}")
        return self

    def transferir_recaudacion(self, caja_central, monto):
        self.anular_ticket(monto)
        caja_central.validar_entrada(monto)
        self.__registrar_evento(f"Transferencia a {caja_central.ticket_id}: -${monto}")
        return self

    def __registrar_evento(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial_validaciones.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Validador({self.ticket_id}: ${self.__recaudacion:.2f})"

v1 = ValidadorTickets("TKT-Q01", 50.0)
v2 = ValidadorTickets("Servidor-Central", 1000.0)

v1.validar_entrada(0.45).validar_entrada(0.35)
v1.transferir_recaudacion(v2, 25.0)

print(v1)
print(v2)
print(f"Recaudación neta V1: ${v1.recaudacion:.2f}")

for registro in v1.historial:
    print(f"  {registro}")