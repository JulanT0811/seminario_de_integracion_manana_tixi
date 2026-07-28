total_recaudado = 0.0
inv_premium = 0
while True:
  print("1. Blokees")
  print("2. Yolopark")
  print("3. Furai Model")
  print("0. salir")
  cod = int(input("Ingrese una opcion: "))
  if cod == 0:
    print("saliendo...")
    break
  cant = int(input("Cantidad: "))
  envio = input("Desea envio express? (si/no): ").lower() == "si"
  
  match cod:
    case 1:
      subtotal = 15.0 * cant
    case 2:
      subtotal = 30.0 * cant
    case 3:
      subtotal = 55.0 * cant
      inv_premium += cant

  if subtotal > 100.0:
    subtotal = subtotal * 0.90

  if envio:
    subtotal += 5.0
      
  total_recaudado += subtotal
print(f"Total recaudado: ${total_recaudado}")
print(f"Figuras de Furai Model vendidas: {inv_premium}")
if inv_premium > 3:
  print("Alerta de inventario premium")
    
  
