// Archivo: 18_poo_herencia_mp.ts
// Tema: Ticket de Soporte Técnico

class TicketBase {
    constructor(public codigoTicket: string, public usuarioSolicitante: string) { }

    obtenerFichaTicket(): string {
        return `Ticket #${this.codigoTicket} — Solicitante: ${this.usuarioSolicitante}`;
    }
}

class TicketCriticoInfraestructura extends TicketBase {
    constructor(
        codigoTicket: string,
        usuarioSolicitante: string,
        public servidorAfectado: string,
        public nivelSlaMinutos: number
    ) {
        super(codigoTicket, usuarioSolicitante); // Llama al constructor de TicketBase
    }

    // Sobrescribe el método del padre
    override obtenerFichaTicket(): string {
        return `🚨 Ticket CRÍTICO #${this.codigoTicket} — Servidor: ${this.servidorAfectado} (SLA Max: ${this.nivelSlaMinutos} min)`;
    }

    ejecutarProtocoloEmergencia(): string {
        return `Notificando inmediatamente al equipo de Infraestructura TI sobre el servidor ${this.servidorAfectado}.`;
    }
}

const ticketGeneral = new TicketBase("TCK-100", "Maria Gomez");
const ticketCritico = new TicketCriticoInfraestructura("TCK-999", "Admin Sistema", "SRV-DB-PRIMARY", 30);

console.log(ticketGeneral.obtenerFichaTicket());
console.log(ticketCritico.obtenerFichaTicket());
console.log(ticketCritico.ejecutarProtocoloEmergencia());
