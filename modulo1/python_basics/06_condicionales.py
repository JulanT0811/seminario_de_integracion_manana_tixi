print("Condicionales simples")
edad = input("Incluye su edad: ")
if int(edad) >= 18:
    print("Mayor de edad")


print("Condicionales dos caminos")
temperatura = input("Incluye temperatura.? ")
if int(temperatura) >= 38:
    print("temperatura alta")
else:
    print("temperatura baja")

print("Condicionales múltiples")
nota = input("Incluye tu nota: ")
if int(nota) >= 90:
    print("Exelente")
elif int(nota) >= 80:
    print("Bueno")
elif int(nota) >= 70:
    print("Aprobado")
else:
    print("Reprobado")

print("Condicionales if anidados") 
tiene_reserva = True 
dinero = 25
plato="pizza"
if tiene_reserva:
    if (dinero >= 20):
        if plato == "pizza":
            print("Tu pizza cuesata $20. Pedido cofirmado ")
        else:
            print("plato disponible")
    else:
        print("Dinero insuficiente")
else:
    print("No tienes reserva")  




print("--- Sistema de Evaluación de Bonos ---")


antiguedad = 2     
desempeño = 9      
salario = 950      

if antiguedad > 1:
    if desempeño >= 8:
        if salario < 1000:
            print("Resultado: Bono de $200")
        else:
            
            print("Resultado: Bono de $100")
    else:
        print("Resultado: No recibe bono por desempeño menor a 8")
else:
    print("Resultado: No elegible por antigüedad insuficiente")