print("condicionales simples")
edad = input("Incluye su edad?")
if(int(edad)>= 18):
    print("Mayor de edad")

print("condicionales dos caminos")
temperatura = input("Incluye temperatura?")
if(int(temperatura)>= 18):
    print("Temperatura alta")
else:
    print("Temperatura normal") 


    print("condicionales multiples")
    nota = input("Incluye nota?")
    if(int(nota)>= 90):
        print("Excelente")
    elif(int(nota)>= 80):
        print("Bueno")
    elif(int(nota)>= 70):
        print("Aprobado")
    else:
        print("Reprobado")


print("condicionales if anidados")
tiene_reseeva = True
dinero = 25
plato = 'pizza'
if(tiene_reseeva):
    if(dinero >= 20):
        if(plato == 'pizza'):
            print("Tu pizza cuesta $20, Pedido confirmado")
        else:
            print("plato disponible")
    else:
        print("dinero insuficiente")
else:    
    print("No tienes reserva")


print("Calculo de bono:")
antiguedad = input("Ingrese años de antiguedad: ")
if(int(antiguedad) > 1):
    desempeño = input("Ingrese su calificacion de desempeño: ")
    if(int(desempeño)>= 8):
        salario=input("Ingrese su salario: ")
        if(int(salario) < 1000):
            print("Su bono es de $200")
            print(f"Su salario total es de: {int(salario)+200}")
        if(int(salario)>= 1000):
            print("Su bono es de $100")
            print(f"Su salario total es de: {int(salario)+100}")
    else:
        print("No recibe Bono")