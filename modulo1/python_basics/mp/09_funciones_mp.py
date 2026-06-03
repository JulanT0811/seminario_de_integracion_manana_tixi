print('Funciones de python')
print('Funcion basica')

def iniciar_sistema():
    print('Sistema de Soporte Técnico activado')

iniciar_sistema()


print('Funcion con parametros')
def registrar_tecnico(nombre):
    print(f'Caso asignado a: {nombre}, ¿listo para la gestión?')

registrar_tecnico('Danna')
registrar_tecnico('Mateo')
    
print('Funcion que devuelve valor con return')
def calcular_costo_caso(horas, nivel):
    return (horas * 25.50) + (nivel * 15.00)

total = calcular_costo_caso(10, 5)
print(f"Costo del ticket: ${total}")

print('Funcion con valor por posicion')
def registrar_incidencia(nombre, prioridad, sector):
    print(f'Ticket: {nombre}, Prioridad: {prioridad}, Ubicación: {sector}')

registrar_incidencia('Error-DB', 2500, 'Servidores')  
registrar_incidencia(sector='Redes', nombre='Falla-DNS', prioridad=1800) 

print('Funcion con valor por defecto')
def notificar_alerta(ticket, mensaje="En proceso", urgencia="Baja"):
    print(f'Ticket {ticket}: {mensaje} [Urgencia: {urgencia}]')

notificar_alerta('TKT-01', "Mantenimiento", "Alta")  
notificar_alerta("TKT-15", urgencia="Media")
notificar_alerta("TKT-202", "Retraso por conectividad")


print('Funcion parametros posicionales')
def sumar_tickets(*tickets):
    print(f"Tickets recibidos: {tickets}")
    return sum(tickets)

print(sumar_tickets(45, 60, 30))
print(sumar_tickets(120, 150, 140, 110))


print('Funcion parametros combinados con posicional')
def lista_casos(area, *tickets):
    print(f"Área: {area}")
    for ticket in tickets:
        print(f"  - Ticket: {ticket}")
    
lista_casos("Nivel 2", "TKT-01", "TKT-02", "TKT-03", "TKT-04")

print('Funcion parametros con clave valor variables')
def crear_bitacora(**detalles):
    print("Resumen de gestión:")
    for clave, valor in detalles.items():
        print(f" {clave.capitalize()}: {valor}")
    
crear_bitacora(ticket="TKT-Q05", tecnico="Danna Gonzalez", tiempo_inicio=12500, estado="Óptimo")


print("Funcion parametros combinacion de todos los tipos")
def configurar_cola(id_cola, *prioridades, activo=True, **servicios):
    print(f"Cola ID: {id_cola}")
    print(f"Prioridades operativas: {prioridades}")
    print(f"Estado: {activo}")
    print(f"Servicios extra: {servicios}")

configurar_cola("Q-SUR", 1, 2, 3, 4, activo=True, monitoreo=True, reportes=False)

print("Devolver multiples valores")
def rango_tickets(registros):
    return min(registros), max(registros)

min_t, max_t = rango_tickets([15, 80, 160, 45, 200])
print(f"Carga máxima: {max_t}, Carga mínima: {min_t}")


print("Devolver un diccionario en el caso de muchos valores")
def analizar_departamento(tiempos_resolucion):
    total = sum(tiempos_resolucion)
    n = len(tiempos_resolucion)

    return {
        "total_tiempo": total,
        "promedio": total/n if n > 0 else 0,
        "menor_resolucion": min(tiempos_resolucion) if tiempos_resolucion else 0,
        "mayor_resolucion": max(tiempos_resolucion) if tiempos_resolucion else 0,
        "tickets_contados": n
    }

datos_soporte = [120, 450, 320, 800, 210]
stats = analizar_departamento(datos_soporte)
print(f"Tiempo Total: {stats['total_tiempo']}")
print(f"Promedio por Ticket: {stats['promedio']:.2f} min")
print(f"Diferencia: {stats['mayor_resolucion'] - stats['menor_resolucion']} min")

print("Funciones Lambdas")
impuesto_soporte = lambda precio: precio * 1.15 
descuento_prioridad = lambda tarifa: tarifa / 2

print(f"Precio con IVA: {impuesto_soporte(100)}")
print(f"Tarifa preferencial: {descuento_prioridad(0.35)}")