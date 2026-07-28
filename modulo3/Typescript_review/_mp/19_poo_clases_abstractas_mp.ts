// Archivo: 19_poo_clases_abstractas_mp.ts
// Tema: Ticket de Soporte Técnico (Políticas de SLA de Atención)

abstract class PoliticaSlaSoporte {
    abstract calcularTiempoLimiteHoras(prioridad: number): number;
    abstract obtenerNivelEscalado(): string;

    // Método concreto con lógica reutilizable
    resumenPoliticaSla(prioridad: number): string {
        const horas = this.calcularTiempoLimiteHoras(prioridad);
        const nivel = this.obtenerNivelEscalado();
        return `Nivel Escalado: ${nivel} | Tiempo Límite SLA: ${horas} horas`;
    }
}

class PoliticaSlaEstandar extends PoliticaSlaSoporte {
    override calcularTiempoLimiteHoras(prioridad: number): number {
        return 24 / prioridad; // Prioridad 1 = 24h, Prioridad 2 = 12h
    }

    override obtenerNivelEscalado(): string {
        return "Mesa de Ayuda Nivel 1";
    }
}

class PoliticaSlaVIP extends PoliticaSlaSoporte {
    override calcularTiempoLimiteHoras(prioridad: number): number {
        return 4 / prioridad; // Prioridad 1 = 4h, Prioridad 2 = 2h
    }

    override obtenerNivelEscalado(): string {
        return "Soporte Especializado Nivel 3 - Respuesta Inmediata";
    }
}

const prioridadTicket = 2; // Alta prioridad
const slaEstandar = new PoliticaSlaEstandar();
const slaVip = new PoliticaSlaVIP();

console.log("=== SLA PLAN ESTÁNDAR ===");
console.log(slaEstandar.resumenPoliticaSla(prioridadTicket));

console.log("=== SLA PLAN CORPORATIVO VIP ===");
console.log(slaVip.resumenPoliticaSla(prioridadTicket));
