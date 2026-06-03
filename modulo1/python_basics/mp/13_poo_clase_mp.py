class TicketSoporte:
    sistema = "Sistema de Gestión de Soporte"

    def __init__(self, codigo, limite):
        self.codigo = codigo
        self.limite = limite
        self.tickets_actuales = 0

    def registrar_ticket(self, cantidad):
        if self.tickets_actuales + cantidad <= self.limite:
            self.tickets_actuales += cantidad
            return f"Registro exitoso. Tickets en cola: {self.tickets_actuales}"
        else:
            return "Error: Límite de capacidad excedido"

    def vaciar_cola(self):
        self.tickets_actuales = 0
        print(f"Cola {self.codigo} se encuentra vacía.")

    def __str__(self):
        return f"Ticket({self.codigo}, Límite: {self.limite})"

    def __repr__(self):
        return f"Ticket(codigo={self.codigo!r}, limite={self.limite!r})"


tkt_metro = TicketSoporte("TKT-Q01", 1500)
tkt_trole = TicketSoporte("TKT-42", 160)

print(tkt_metro.registrar_ticket(450))
print(tkt_trole.registrar_ticket(100))
tkt_metro.vaciar_cola()
print(str(tkt_metro))
print(repr(tkt_metro))
print(TicketSoporte.sistema)