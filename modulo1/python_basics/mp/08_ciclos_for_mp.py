print("ciclo for")
tickets = ["TKT-01", "TKT-02", "SOP-01", "TKT-05"]
for ticket in tickets:
    print(ticket)

print("Recorrer palabras")
for letra in "SOPORTE":
    print(letra)

print("Recorrer rango")
for i in range(1, 6):
    print(f"Caso {i}")

print("Recorrer rango configurar paso")
for i in range(2, 11, 2):
    print(f"Ticket de refuerzo cada {i} horas")

print("Enumerar Lista")
for i, ticket in enumerate(tickets):
    print(f"Cola {i}: {ticket}")

print("Dos listas a la vez")
tecnicos = ["Juan", "Dae"]
turnos = ["Mañana", "Tarde"]
for tecnico, turno in zip(tecnicos, turnos):
    print(f"Técnico: {tecnico} | Turno: {turno}")

print("control del ciclo")
for i in range(10):
    if i == 3:
        break
    print(f"Validando ticket {i}")

print("continue")
for i in range(1, 6):
    if i == 3:
        continue
    print(f"Ticket {i} operativo")

print("for anidado")
for categoria in range(1, 3):
    for ticket in range(1, 3):
        print(f"Categoría {categoria} - Ticket {ticket}")

print("Lista comprehension forms corta")        
prioridades_dinamicas = [t * 1.10 for t in [0.35, 0.45, 0.60]]
print(prioridades_dinamicas)

print("Recorrer números y multiplicar")
for i in range(1, 11):
    gestion = i * 0.35
    print(f" {i} casos x 0.35 = {gestion:.2f}")

print("")
print("Ejercicio 2 - Gestión de Tickets y Bonos")
conteos_tickets = [120, 80, 200, 50, 300]  
casos_eficientes = 0

for tickets in conteos_tickets:
    if tickets > 100:
        if tickets > 250:
            print("Incentivo por alta carga $30")
        else: 
            print("Incentivo por carga media $10")
        casos_eficientes += 1
    else:
        print("Carga baja: sin incentivo")

incentivo_acumulado = 0
for tickets in conteos_tickets:
    if tickets > 100:
        if tickets > 250:
            incentivo_acumulado += 30
        else:
            incentivo_acumulado += 10

print(f"El incentivo acumulado total es: ${incentivo_acumulado}")
print(f"Total de casos eficientes: {casos_eficientes}")