vacio = {}
ticket = {"id": "TKT-Q01", "casos": 450, "agente": "Soporte-Quitumbe"}
config_sistema = dict(servidor="192.168.1.10", puerto=8080, activo=True)


print(ticket["id"])
print(ticket.get("tecnico"))
print(ticket.get("tecnico", "No asignado"))


ticket["tecnico"] = "Dae Muñoz"
ticket["casos"] = 480
del ticket["agente"]
valor_eliminado = ticket.pop("tecnico")
print(ticket)


print("id" in ticket)
print("agente" in ticket)


print(ticket.keys())
print(ticket.values())
print(ticket.items())


for clave, valor in ticket.items():
    print(f"  {clave}: {valor}")


ticket.update({"agente": "Recreo", "nivel_prioridad": "85%"})
print(ticket)


datos_extra = {"tipo": "Prioritario", "en_proceso": True}
registro_completo = ticket | datos_extra
print(registro_completo)


sistema_soporte = {
    "departamento": "Soporte Técnico",
    "cola": {
        101: {"modelo": "Ticket-S1", "estado": "operativo"},
        102: {"modelo": "Ticket-S1", "estado": "mantenimiento"},
    },
    "niveles": ["Nivel 1", "Nivel 2"]
}

print(sistema_soporte["cola"][101]["modelo"])
sistema_soporte["cola"][103] = {"modelo": "Ticket-S2", "estado": "operativo"}


ticket.setdefault("pais", "Ecuador")
ticket.setdefault("id", "TKT-999")