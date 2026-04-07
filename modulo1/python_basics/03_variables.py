#Enteros, Cadenas de caracteres, Booleanos, None
nombre="Ana García"#string
edad= 28           #int
altura= 1.65       #float
activo= True       #bool
nulo= None         #NoneType


print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))
#asignamos varias variables en una linea
a,b,c= 12,12,14
print(a)
print(b)
print(c)
#asignamos el mismo valor a varias variables
a = b = c = 0
print(a)
print(b)        
print(c)
#Intercambiar variables
x,y = 10,20
print(x,y)
x,y = y,x
print(x,y)
#converciones de nombres 
nombre_completo= "Rafael Urdaneta"#snake case
nombreCompleto= "Rafael Urdaneta" #NO USAR camel case
MAX_REINTENTOS= 3                 #MAYUSCULAS SOSTENIDA para constantes
_variable_interna= "privada"      #para  uso interno
#manejo de enteros 
pequeño=42
negativo=-17
grande= 1_000_000_000_000
enorme=2**100

print(pequeño)
print(negativo) 
print(grande)
print(enorme)

#base numericas
binario=0b1010
octal=0o17
hexadecimal=0xFF
print(binario,octal,hexadecimal)
#convertir a decimal
print(bin(255))
print(oct(255))
print(hex(255))
