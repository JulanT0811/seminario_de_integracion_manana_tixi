class AlertaSoporte:
    def __init__(self, ticket_id, mensaje):
        self.ticket_id = ticket_id
        self.mensaje = mensaje

    def emitir(self):
        raise NotImplementedError("Las subclases deben implementar emitir()")

    def __str__(self):
        return f"{self.__class__.__name__} → Ticket: {self.ticket_id}"

class AlertaDashboard(AlertaSoporte):
    def emitir(self):
        return f"🖥️ Dashboard Central: Ticket {self.ticket_id} reporta: {self.mensaje}"

class AlertaEmail(AlertaSoporte):
    def emitir(self):
        return f"📧 Notificación Email: 'Atención equipo, {self.mensaje} en ticket {self.ticket_id}'"

class AlertaApp(AlertaSoporte):
    def emitir(self):
        return f"📲 Notificación App: {self.ticket_id} - {self.mensaje[:30]}..."

def ejecutar_alertas(alertas: list):
    for alerta in alertas:
        print(f"  {alerta.emitir()}")

avisos = [
    AlertaDashboard("TKT-Q01", "Escalamiento en 2 minutos"),
    AlertaEmail("TKT-42", "Ticket con retraso por complejidad"),
    AlertaApp("TKT-10", "Nueva prioridad habilitada para este ticket"),
]

print("Emisión de alertas del sistema:")
ejecutar_alertas(avisos)

class ValidadorTicketWeb:
    def procesar_pago(self): return "Registro procesado con ticket web"
    def registrar_log(self, datos): print(f"Log Servidor: {datos}...")

class ValidadorTerminal:
    def procesar_pago(self): return "Registro procesado con terminal física"
    def registrar_log(self, datos): print(f"Log Local: {datos}...")

class ValidadorBiometrico:
    def procesar_pago(self): return "Registro procesado con reconocimiento facial"
    def registrar_log(self, datos): print(f"Log Seguridad: {datos}...")

def realizar_registro(validador):
    confirmacion = validador.procesar_pago()
    print(f"Estado: {confirmacion}")
    validador.registrar_log(f"Transacción_OK_{confirmacion[:10]}")

for dispositivo in [ValidadorTicketWeb(), ValidadorTerminal(), ValidadorBiometrico()]:
    realizar_registro(dispositivo)