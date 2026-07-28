print("Listas")
print("Crear Listas")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6,7]
print(numeros)
nombres=["Juan","Pedro","Carlos","Maria","Petra","Juana"]
print(nombres)
mixta=[1, "Hola", "Mundo", True, None, 3.4]
print(mixta)
anidada=[1,[5,5,[6,4,4]],5,7]
print(anidada)
print("Acceso a los elementos de una lista")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])


print("CRUD de una lista")
frutas = ["Manzana", "Pera", "Melon"]
#agregar
frutas.append("Durazno")
print(frutas)
frutas.insert(1, "Naranja")
print(frutas)
frutas.extend(["kiwi", "mango"])
#Modificar
frutas[0]="Toronja"
print(frutas)
# eliminar elementos
frutas.remove("Pera")
print(frutas)
eliminado = frutas.pop()
print(frutas)
eliminado = frutas.pop(0)
print(frutas)
del frutas [0]
print(frutas)

print("buscar vlores en los elementos de un lista ")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("ordenar una lista")  
numeros_desordenados = [3,2,6,34,9,0,1,2]
print(numeros_desordenados)
numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)
ordenada = sorted(numeros_desordenados)
print(numeros_desordenados)
print(ordenada)