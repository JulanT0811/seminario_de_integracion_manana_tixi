class TransportePublico:
    def __init__(self, id_unidad, modelo, año_fabricacion):
        self.id_unidad = id_unidad
        self.modelo = modelo
        self.año_fabricacion = año_fabricacion
        self._velocidad_actual = 0

    def acelerar(self, incremento):
        self._velocidad_actual += incremento
        return self

    def frenar(self, decremento):
        self._velocidad_actual = max(0, self._velocidad_actual - decremento)
        return self

    def __str__(self):
        return f"[{self.id_unidad}] {self.modelo} ({self.año_fabricacion}) — {self._velocidad_actual} km/h"

class Bus(TransportePublico):
    def __init__(self, id_unidad, modelo, año_fabricacion, capacidad_sentados=40):
        super().__init__(id_unidad, modelo, año_fabricacion)
        self.capacidad_sentados = capacidad_sentados

    def sonar_timbre(self):
        return f"Unidad {self.id_unidad}: ¡Parada solicitada!"

    def __str__(self):
        return f"{super().__str__()} ({self.capacidad_sentados} asientos)"

class MetroTren(TransportePublico):
    def __init__(self, id_unidad, modelo, año_fabricacion, numero_vagones):
        super().__init__(id_unidad, modelo, año_fabricacion)
        self.numero_vagones = numero_vagones

    def anunciar_estacion(self, nombre_estacion):
        return f"🚅 Próxima estación: {nombre_estacion}"

    def __str__(self):
        return f"{super().__str__()} ({self.numero_vagones} vagones)"

class BusElectrico(Bus):
    def __init__(self, id_unidad, modelo, año_fabricacion, km_autonomia):
        super().__init__(id_unidad, modelo, año_fabricacion)
        self.__autonomia_maxima = km_autonomia
        self.__carga_bateria = 100

    def recargar_bateria(self, porcentaje=100):
        self.__carga_bateria = min(100, self.__carga_bateria + porcentaje)
        return self

    @property
    def km_disponibles(self):
        return self.__autonomia_maxima * self.__carga_bateria / 100

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Carga: {self.__carga_bateria}% | "
                f"Autonomía: {self.km_disponibles:.0f}km")


metro_u1 = BusElectrico("E-BUS-042", "Yutong E12", 2026, 300)
metro_u1.acelerar(50)
print(metro_u1)

print(isinstance(metro_u1, BusElectrico)) 
print(isinstance(metro_u1, Bus))           
print(isinstance(metro_u1, TransportePublico)) 
print(isinstance(metro_u1, MetroTren))     

print(BusElectrico.__mro__)