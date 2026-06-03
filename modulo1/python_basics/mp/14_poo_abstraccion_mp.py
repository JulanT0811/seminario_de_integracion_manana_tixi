from abc import ABC, abstractmethod

class SoporteTecnico(ABC):
    def __init__(self, codigo, limite, prioridad="baja"):
        self.codigo = codigo
        self.limite = limite
        self.prioridad = prioridad

    @abstractmethod
    def calcular_costo(self) -> float:
        pass

    @abstractmethod
    def obtener_tipo_gestion(self) -> str:
        pass

    def describir(self) -> str:
        return (f"{self.__class__.__name__} [{self.codigo}] {self.prioridad}: "
                f"Costo=${self.calcular_costo():.2f}, Gestión={self.obtener_tipo_gestion()}")

class TicketNivel1(SoporteTecnico):
    def __init__(self, codigo, limite, agentes, prioridad="baja"):
        super().__init__(codigo, limite, prioridad)
        self.agentes = agentes

    def calcular_costo(self):
        return 0.45

    def obtener_tipo_gestion(self):
        return "Automatizada (Chatbot)"

class TicketNivel2(SoporteTecnico):
    def __init__(self, codigo, limite, casos_pendientes, prioridad="baja"):
        super().__init__(codigo, limite, prioridad)
        self.casos_pendientes = casos_pendientes

    def calcular_costo(self):
        return 0.35

    def obtener_tipo_gestion(self):
        gestion_min = self.casos_pendientes * 2.5
        return f"{gestion_min:.1f} min"

class TicketNivel3(SoporteTecnico):
    def __init__(self, codigo, limite, longitud_proceso, prioridad="baja"):
        super().__init__(codigo, limite, prioridad)
        self.longitud_proceso = longitud_proceso

    def calcular_costo(self):
        return 0.60

    def obtener_tipo_gestion(self):
        return "Sistema experto por especialista central"

flota = [
    TicketNivel1("TKT-01", 1500, 6, "azul"),
    TicketNivel2("TKT-45", 160, 200, "rojo"),
    TicketNivel3("TKT-09", 10, 2500, "blanco")
]

for ticket in flota:
    print(ticket.describir())

capacidad_total = sum(v.limite for v in flota)
print(f"Capacidad total del sistema: {capacidad_total} casos")