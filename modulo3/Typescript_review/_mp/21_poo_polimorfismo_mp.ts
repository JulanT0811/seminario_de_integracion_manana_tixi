// Archivo: 21_poo_polimorfismo_mp.ts
// Tema: Ticket de Soporte Técnico (Polimorfismo en Canales de Notificación de Tickets)

class CanalNotificacionSoporte {
    nombreCanal(): string { return "Canal Genérico de Soporte"; }
    enviarNotificacion(_ticketId: string, _mensaje: string): string {
        return "Notificación genérica de ticket enviada.";
    }
}

class NotificacionEmailSoporte extends CanalNotificacionSoporte {
    constructor(private emailDestino: string) { super(); }
    override nombreCanal(): string { return `Correo Electrónico (${this.emailDestino})`; }
    override enviarNotificacion(ticketId: string, mensaje: string): string {
        return `[EMAIL -> ${this.emailDestino}] Ticket #${ticketId}: ${mensaje}`;
    }
}

class NotificacionSmsSoporte extends CanalNotificacionSoporte {
    constructor(private numeroTelefono: string) { super(); }
    override nombreCanal(): string { return `SMS Informativo (${this.numeroTelefono})`; }
    override enviarNotificacion(ticketId: string, mensaje: string): string {
        return `[SMS -> ${this.numeroTelefono}] Ticket #${ticketId}: ${mensaje}`;
    }
}

class NotificacionWebhookSlack extends CanalNotificacionSoporte {
    constructor(private canalSlack: string) { super(); }
    override nombreCanal(): string { return `Webhook Slack (${this.canalSlack})`; }
    override enviarNotificacion(ticketId: string, mensaje: string): string {
        return `[SLACK -> ${this.canalSlack}] ALERT Ticket #${ticketId}: ${mensaje}`;
    }
}

// Polimorfismo en acción sobre el envío de notificaciones de tickets de soporte
const codigoTicketAlert = "TCK-9901";
const mensajeAlerta = "Servidor Web en estado crítico por uso de CPU del 99%";

const canales: CanalNotificacionSoporte[] = [
    new NotificacionEmailSoporte("admin@empresa.com"),
    new NotificacionSmsSoporte("+56912345678"),
    new NotificacionWebhookSlack("#canal-incidencias-ti"),
];

console.log(`--- Notificando Incidencia de Soporte ${codigoTicketAlert} ---`);
for (const canal of canales) {
    console.log(`Canal: ${canal.nombreCanal()}`);
    console.log(`  Output: ${canal.enviarNotificacion(codigoTicketAlert, mensajeAlerta)}`);
}
