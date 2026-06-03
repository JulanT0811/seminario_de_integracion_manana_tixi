print("condicionales simples")
tickets_actuales = input("Cuántos tickets hay pendientes en la cola? ")
if(int(tickets_actuales) >= 50):
    print("Cola al límite de capacidad")

print("condicionales dos caminos")
prioridad_usuario = input("¿Cuál es el nivel de prioridad del ticket? ")
if(float(prioridad_usuario) >= 0.35):
    print("Acceso concedido")
else:
    print("Prioridad insuficiente")

print("condicionales multiples")
tiempo_espera = input("Cuántos minutos lleva esperando el ticket? ")
tiempo_val = int(tiempo_espera)
if(tiempo_val >= 100):
    print("Requiere escalamiento inmediato")
elif(tiempo_val >= 50):
    print("Caso de alta prioridad en progreso")
elif(tiempo_val >= 10):
    print("Caso estándar en progreso")
else:
    print("Movimiento técnico o corto")

print("condicionales if anidados")
agente_disponible = True
capacidad_soporte = 40
tipo_ticket = 'Expreso'
if(agente_disponible):
    if(capacidad_soporte >= 30):
        if(tipo_ticket == 'Expreso'):
            print("Ticket asignado a cola Expreso, despacho confirmado")
        else:
            print("Servicio regular disponible")
    else:
        print("Capacidad insuficiente para el ticket")
else:    
    print("No hay agentes disponibles en soporte")

print("Calculo de bono:")
antiguedad_ticket = input("Ingrese años de antigüedad del sistema: ")
if(int(antiguedad_ticket) > 5):
    estado_tecnico = input("Ingrese calificación técnica (1-10): ")
    if(int(estado_tecnico) >= 7):
        costo_soporte = input("Ingrese costo operativo mensual: ")
        if(int(costo_soporte) < 5000):
            print("Bono asignado: $500")
            print(f"Presupuesto final: {int(costo_soporte) + 500}")
        if(int(costo_soporte) >= 5000):
            print("Bono asignado: $1000")
            print(f"Presupuesto final: {int(costo_soporte) + 1000}")
    else:
        print("Ticket no apto para bono por estado técnico")