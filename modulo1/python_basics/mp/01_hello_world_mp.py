print("Sistema de Gestión de Tickets de Soporte")

capacidad = 50
unidad = "Cola de Soporte Nivel 2"

print(f"Departamento: {unidad} | Tickets Pendientes: {capacidad}.")
print("Área:", unidad, "Límite de Tickets:", capacidad)
id_ticket = 998210
print("El {} tiene una capacidad de {} casos.".format(unidad, capacidad))
print(unidad, capacidad, id_ticket, sep=" - ")
print(unidad, end= " | ")
print(capacidad, end= " | ")
print(id_ticket, end= " | ")

print(f"\nPrioridad: {0.350:.2f}")
print(f"Tickets resueltos este año: {12550800:,}")