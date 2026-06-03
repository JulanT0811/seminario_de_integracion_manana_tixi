contador_tickets = 1
while (contador_tickets <= 5):
    print(f"Procesando ticket N°: {contador_tickets}")
    contador_tickets += 1


print("control del ciclo")
print("continue")
i = 1
while (i <= 5):
    i += 1
    if i == 2:
        continue
    print(f"Ticket en gestión: {i}")

print("break")
i = 1
while (i <= 5):
    if i == 3:
        break
    print(f"Revisando estado de ticket {i}")
    i += 1

id_ticket = int(input("Ingrese ID del ticket (0 para salir): "))
while id_ticket != 0:
    print("Monitoreando ticket:", id_ticket)
    id_ticket = int(input("Ingrese ID del ticket (0 para salir): "))

contador_ciclos = 1
while (contador_ciclos <= 5):
    print(f"Ciclo de soporte: {contador_ciclos}")
    contador_ciclos += 1
else:
    print("Jornada de soporte finalizada")


contador_casos = 1
while True:
    print(f"Caso N° {contador_casos} ingresó")
    contador_casos += 1
    if not (contador_casos <= 5):
        break


codigo_acceso = "450"
while True:
    entrada = input("Ingrese código de acceso: ")
    if entrada == codigo_acceso:
        print("Sistema activado - Acceso permitido")
        break
    else:
        print("Código incorrecto - Intente de nuevo")