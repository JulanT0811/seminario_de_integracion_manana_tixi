// Archivo: 15_poo_temperatura_mp.ts
// Tema: Ticket de Soporte Técnico (Sensor de temperatura de Servidor de HelpDesk / DataCenter)

class TemperaturaServidorSoporte {
    valorCelsius: number;

    constructor(celsius: number) {
        this.valorCelsius = celsius;
    }

    aFahrenheit(): number {
        return (this.valorCelsius * 9) / 5 + 32;
    }

    aKelvin(): number {
        return this.valorCelsius + 273.15;
    }

    evaluarEstadoServidor(): string {
        if (this.valorCelsius > 75) return "⚠️ ALERTA CRÍTICA: Sobrecalentamiento extremo en Servidor";
        if (this.valorCelsius < 10) return "⚠️ ADVERTENCIA: Temperatura inusualmente baja";
        return "✅ Temperatura operativa normal del Servidor";
    }

    describir(): string {
        return (
            `Servidor HelpDesk: ${this.valorCelsius}°C = ` +
            `${this.aFahrenheit().toFixed(1)}°F | ${this.evaluarEstadoServidor()}`
        );
    }
}

const pruebaServidorRecalentado = new TemperaturaServidorSoporte(82);
const pruebaServidorNormal = new TemperaturaServidorSoporte(38);

console.log(pruebaServidorRecalentado.describir());
console.log(pruebaServidorNormal.describir());
