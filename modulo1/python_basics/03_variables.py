#  Enteros, Cadena de caracteres, Booleanos, none

nombre = 'Ana Garcia' #string
edad = 28             #int
altura = 1.65         #float
activo = True         #boolean
nulo = None           #NoneType

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))


#Asignar valor varias variables en una linea 
a, b, c = 12, 13, 14
print(a)
print(b)
print(c)

#Asignar el mismo  valor a varias variables
a = b = c = 0
print(a)
print(b)
print(c)

#Intercambiar valores
x, y = 10, 20
print(x, y)
x, y = y, x
print(x, y)

#Convenciones de nombres
nombre_completo = "Ana Garcia"     #snake_case
NombreCompleto = "Ana Garcia"      #NO USAR camelCase
MAX_REINTENTOS = 3                 #CONSTANTE, USAR MAYUSCULAS
_variable_interna = "privada"      #para uso interno

#Manejo de Enteros
pequeno = 42
negativo = -17
grande= 1_000_000_000_000
enorme = 2 ** 100
print(pequeno)
print(negativo)
print(grande)
print(enorme)


#Bases Numericas
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)


#convertir a decimal a otras bases
print(bin(255))   #binario
print(oct(255))   #octal
print(hex(255))   #hexadecimal

