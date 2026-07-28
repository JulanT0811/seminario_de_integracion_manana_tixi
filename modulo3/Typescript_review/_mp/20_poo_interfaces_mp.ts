// Archivo: 20_poo_interfaces_mp.ts
// Tema: Ticket de Soporte Técnico

interface FacturableSoporte {
    generarFacturaSoporte(): string;
}

interface VerificableCodigoTicket {
    validarCodigoTicket(): boolean;
}

class TicketSoporteCorporativo implements FacturableSoporte, VerificableCodigoTicket {
    constructor(
        public codigoTicket: string,
        public servicioRealizado: string,
        public clienteEmpresa: string,
        public totalCobrado: number
    ) { }

    validarCodigoTicket(): boolean {
        // Valida que el código inicie con TCK- y tenga al menos 4 caracteres adicionales
        return this.codigoTicket.startsWith("TCK-") && this.codigoTicket.length >= 8;
    }

    generarFacturaSoporte(): string {
        return JSON.stringify({
            comprobante: `FACT-SUP-${Math.floor(Math.random() * 10000)}`,
            codigoTicket: this.codigoTicket,
            servicio: this.servicioRealizado,
            empresa: this.clienteEmpresa,
            total: this.totalCobrado,
        });
    }
}

const ticketCorporativo1 = new TicketSoporteCorporativo("TCK-9842", "Mantenimiento de Servidores y Firewalls", "Tech Solutions Inc", 450.00);

console.log(`¿Código de Ticket Válido?: ${ticketCorporativo1.validarCodigoTicket()}`); // true
console.log("Factura de soporte emitida:");
console.log(ticketCorporativo1.generarFacturaSoporte());
