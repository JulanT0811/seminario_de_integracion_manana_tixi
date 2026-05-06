print("Match Case")
comando = input("Comando proceso iniciar/parar/reiniciar: ")
match comando:
    case "iniciar":
        print("Sistema iniciando")
    case "parar":
        print("deteniendose")
    case "reiniciar":
        print("reiniciando el sistema")
    case _:
        print(f"Comando '{comando}' no reconocido")

print("match condiciones")
numero = 7
match numero:
    case n if n<0:
        print(f"El numero {n} es negativo")
    case 0:
        print("Es cero")
    case n if n%2==0:
        print(f"El numero {n} es par")
    case n:
        print(f"{n} es positivo e impar")