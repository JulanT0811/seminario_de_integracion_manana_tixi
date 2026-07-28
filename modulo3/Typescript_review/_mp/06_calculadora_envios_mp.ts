// Archivo: 06_calculadora_envios_mp.ts
// Tema: Ticket de Soporte Técnico - Cotizador de Despacho de Técnico en Sitio

type ZonaAtencionSoporte = "local" | "nacional" | "internacional";

interface TicketDespachoTecnico {
    codigoTicket: string;
    tipoIncidencia: string;
    horasEstimadas: number;
    costoRepuestos: number;
    zona: ZonaAtencionSoporte;
}

const TARIFAS_DESPACHO_TECNICO: Record<ZonaAtencionSoporte, number> = {
    local: 25.00,          // $ base despliegue local
    nacional: 65.00,        // $ base despliegue nacional
    internacional: 200.00,  // $ base despliegue internacional
};

const SEGURO_EQUIPO_PCT = 0.02; // 2% sobre costo de repuestos e infraestructura

function cotizarAtencionTecnica(ticket: TicketDespachoTecnico): string {
    const tarifaBase = TARIFAS_DESPACHO_TECNICO[ticket.zona];
    const costoManoObra = ticket.horasEstimadas * 45.00; // $45/hora mano de obra soporte
    const costoSeguro = ticket.costoRepuestos * SEGURO_EQUIPO_PCT;
    const totalServicio = tarifaBase + costoManoObra + ticket.costoRepuestos + costoSeguro;

    return `
🛠️ Cotización de Atención Técnica en Sitio (Ticket)
   Código Ticket: ${ticket.codigoTicket}
   Incidencia   : ${ticket.tipoIncidencia}
   Horas Est.   : ${ticket.horasEstimadas} hrs
   Zona         : ${ticket.zona}
   Despliegue   : $${tarifaBase.toFixed(2)}
   Mano de Obra : $${costoManoObra.toFixed(2)}
   Repuestos    : $${ticket.costoRepuestos.toFixed(2)}
   Seguro (2%)  : $${costoSeguro.toFixed(2)}
   ────────────────────────────────────────
   TOTAL TICKET : $${totalServicio.toFixed(2)}
    `.trim();
}

const ticketDespacho1: TicketDespachoTecnico = {
    codigoTicket: "TCK-8821",
    tipoIncidencia: "Reemplazo de Router Core en DataCenter",
    horasEstimadas: 3,
    costoRepuestos: 450.00,
    zona: "nacional",
};

const ticketDespacho2: TicketDespachoTecnico = {
    codigoTicket: "TCK-9043",
    tipoIncidencia: "Reparación de Servidor de Blade",
    horasEstimadas: 5,
    costoRepuestos: 1200.00,
    zona: "internacional",
};

console.log(cotizarAtencionTecnica(ticketDespacho1));
console.log("\n" + cotizarAtencionTecnica(ticketDespacho2));
