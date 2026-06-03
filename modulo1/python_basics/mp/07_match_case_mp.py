print("Match Case")
accion = input("Acción del ticket (escalar/cerrar/reparar): ")
match accion:
    case "escalar":
        print("Ticket pasando a nivel superior de soporte")
    case "cerrar":
        print("Ticket movido a archivo de casos finalizados")
    case "reparar":
        print("Ticket enviado a área de desarrollo técnico")
    case _:
        print(f"Estado '{accion}' no registrado en el sistema")

print("match condiciones")
capacidad_tickets = 160
match capacidad_tickets:
    case n if n < 0:
        print(f"Error: La carga {n} no puede ser negativa")
    case 0:
        print("La cola está libre de casos pendientes")
    case n if n % 2 != 0:
        print(f"Carga de {n} tickets es un número impar")
    case n:
        print(f"Carga de {n} tickets es estándar y par")