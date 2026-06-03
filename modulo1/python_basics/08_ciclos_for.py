print("ciclo for")
frutas = ["manzana", "banana", "naranja", "pera"]
for fruta in frutas:
    print(fruta)

print("Recorrer palabras")
for letra in "frutas":
    print(letra)


print("Recorrer rango")
for i in range(1,6):
    print(i)

print("Recorrer rango configurar paso")
for i in range(1,10,2):
    print(i)

print("Enumerar Lista")
for i, fruta in enumerate(frutas):
    print(i, fruta)

print("Dos listas a la vez")
nombres = ["Ana", "Luis"]
edades = [26, 25]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)


print("control del ciclo")
for i in range(10):
    if i == 3:
        break
    print(i)
print("continue")
for i in range(10):
    if i == 2:
        continue
    print(i)

print("for anidado")
for i in range(3):
    for j in range(2):
        print(i,j)
print("Lista comprehension forms corta")        
cuadrados = [x**2 for x in range(5)]
print( cuadrados)



print("Recorrer números y multiplicar")
for i in range(1, 11):
    resultado = i * 5
    print(f" {i} x 5 = {resultado}")



print("")
print("Ejercicio 2")
ventas = [120,80,200,50,300]  
ventas_validas = 0
for venta in ventas:
    if venta > 100:
        if (venta > 250):
            print("Bono de venta $30")
        else: 
            print("Bono de venta $10")
        ventas_validas += 1
    else:
        print("No hay bono de venta")
bono_acumulado = 0
for venta in ventas:
    if venta > 100:
        if venta > 250:
            bono_acumulado += 30
        else:
            bono_acumulado += 10

print(f"El bono acumulado es: ${bono_acumulado}")
print(f"Total de ventas válidas: {ventas_validas}")
        