contador = 1
while (contador<=5):
    print(f"Contador: {contador}")
    contador +=1


print("Continue")
i = 1
while (contador<=5):
    i+=1
    if i == 1: 
        continue
    print(f"Contador: {i}")
print("Break")
i = 1
while (i<=5):
    i+=1
    if i == 3:
        break
    print(f"Contador: {i}")


numero = int(input("Ingrese numero:"))
while numero != 0:
    print(f"Ingresaste: ", numero)
    numero = int(input("Ingrese número:"))

contador = 1
while (contador <= 5):
    print(f"Contador: {contador}")
    contador += 1
else:
    print("Fin del ciclo")


contraseña_correcta = "1234"
while True:
    contraseña = input("Ingrese la contraseña: ")
    if contraseña == contraseña_correcta:
        print("Acceso permitido")
        break
    else:
        print("Contraseña incorrecta")
