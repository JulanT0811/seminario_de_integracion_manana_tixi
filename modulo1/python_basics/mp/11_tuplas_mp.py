vacia = ()
unitaria = ("Ticket-01",)
coordenada = (-0.21, -78.50)
prioridad_info = (0.35, "Nivel", "Soporte")
registro_ticket = ("TKT-998", 15.75, "2026-05-08")


posicion = 10.5, 30.2
print(type(posicion))


print(registro_ticket[0])
print(registro_ticket[-1])
print(registro_ticket[1:])


id_ticket, monto, fecha = registro_ticket
print(id_ticket, monto, fecha)


ticket_principal, *tickets_secundarios = ("T-01", "T-02", "T-03", "T-04")
print(ticket_principal)
print(tickets_secundarios)

*proceso_previo, cierre_final = ("Cola S", "Paso 1", "Paso 2", "Cola N")
print(proceso_previo)
print(cierre_final)


def verificar_prioridad(nivel, limite):
    if nivel < limite:
        return False, "Prioridad insuficiente"
    return True, "Prioridad OK"

estado, msg = verificar_prioridad(0.10, 0.35)
print(f"Estado: {estado}, Mensaje: {msg}")


red_soporte = {(-0.21, -78.50): "Agente Sur", (0.00, -78.45): "Agente Central"}
print(red_soporte[(-0.21, -78.50)])