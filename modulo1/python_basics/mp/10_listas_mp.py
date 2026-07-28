print("Listas")
print("Crear Listas de Gestión de Tickets")
vacia = []
print(vacia)
tickets = [101, 102, 103, 104, 105, 106, 107]
print(tickets)
servidores = ["Srv-Quitumbe", "Srv-Recreo", "Srv-Magdalena", "Srv-Ejido", "Srv-Carolina", "Srv-Labrador"]
print(servidores)
registro_ticket = [42, "Nivel-2", "Falla-C1", True, None, 35.5]
print(registro_ticket)
incidencias_complejas = [1, [10, 20, [30, 40, 50]], 5, 7]
print(incidencias_complejas)

print("Acceso a los elementos de la lista de servidores")
print(servidores[0])
print(servidores[-1])
print(servidores[1:4])
print(servidores[::-1])

print("CRUD de una lista de tickets")

tickets_activos = ['TKT-01', 'TKT-05', 'TKT-22', 'TKT-10']
tickets_activos.append('TKT-02')
print(tickets_activos)
tickets_activos.insert(1, 'TKT-01')
print(tickets_activos)
tickets_activos.extend(['TKT-50', 'TKT-51'])
print(tickets_activos)

tickets_activos[0] = "TKT-Q01"
print(tickets_activos)

tickets_activos.remove('TKT-05')
print(tickets_activos)
ticket_fuera = tickets_activos.pop()
print(tickets_activos)
ticket_fuera = tickets_activos.pop(0)
print(tickets_activos)
del tickets_activos[0]
print(tickets_activos)

print("Buscar valores en la lista de Tickets ")
print("TKT-50" in tickets_activos)
print(tickets_activos.index('TKT-50'))
print(tickets_activos.count('TKT-50'))

print("Ordenar registros de Tickets")
ids_tickets = [302, 105, 600, 34, 9, 100, 15, 22]
print(ids_tickets)
ids_tickets.sort()
print(ids_tickets)
ids_tickets.sort(reverse=True)
print(ids_tickets)
lista_ordenada = sorted(ids_tickets)
print(ids_tickets)
print(lista_ordenada)