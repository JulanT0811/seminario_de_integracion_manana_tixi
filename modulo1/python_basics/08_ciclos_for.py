print("Ciclos For")
frutas = ["manzana", "banana", "pera"]
for fruta in frutas:
    print(fruta) 
print("Recorre palabras")
for letra in "frurta":
        print(letra)

print("Recorre rango")
for i in range(1,6):
    print(i)

print("Recorre rango configurar paso")
for i in range(1, 10, 2):
    print(i)

print("Enumerar lista")
for indice, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

print("Dos listas a la vez")
nombres = ["Ana", "Luis"]
edades = [25, 30]
for nombre, edad in zip(nombres, edades):
    print(nombre,edad)

print("control de ciclo")
print("break")
for i in range(5):
    if i == 3:
        break
    print(i)    
print("continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("for anidado")
for i in range(3):
    for j in range(2):
        print(i, j)
print("Listas comprehension forma corta")        
cuadrados = [x**2 for x in range(5)]
print(cuadrados)


print("Sistema de Evaluación de Ventas")
ventas = [120, 80, 200, 50, 300]
total_ventas_validas = 0
total_bono = 0
for venta in ventas:
    if venta > 100:
        total_ventas_validas += 1
        if venta > 250:
            total_bono += 30
        else:
            total_bono += 10
print(f"Total de ventas válidas: {total_ventas_validas}")
print(f"Total de bono acumulado: ${total_bono}")






