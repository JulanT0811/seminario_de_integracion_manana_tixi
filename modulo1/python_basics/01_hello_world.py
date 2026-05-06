print("Hello, World!")

edad  = 25
nombre = "Maria Muñoz"

print(f"Me llamo {nombre} y tengo {edad} años.")
print("Nombre", nombre, "Edad", edad)
telefono = 123456789
print("Me llamo {} y tengo {} años.".format(nombre, edad))
print(nombre, edad, telefono, sep=" - ")
print(nombre, end= " | ")
print(edad, end= " | ")
print(telefono, end= " | ")

print(f"{3.14150:.2f}")
print(f"{314976159:,}")