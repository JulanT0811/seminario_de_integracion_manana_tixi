print("Match-Case")
comando = input("Comando proceso iniciar/parar/reiniciar")
match comando:
    case "iniciar":
        print("Sistema iniciado")
    case "parar":
        print("Detenido")
    case "reiniciar":
        print("Reinicio de sistema ")
    case _:
        print(f"Comando '{comando}' no reconocido: ")


print("match condicional")
numero = 7 
match numero:
    case n if n < 0:
        print(f"{n} es negativo")
    case 0:
        print(f"{n} es cero")
    case n if n % 2 == 0:
        print(f"{n} es par")
    case n :
        print(f"{n} es positivo e impar")        