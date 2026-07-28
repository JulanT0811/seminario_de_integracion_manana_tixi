// Archivo: 12_union_literales_mp.ts
// Tema: Ticket de Soporte Técnico

type EstadoTicketLiteral = "abierto" | "en_proceso" | "resuelto" | "cerrado";

interface TicketIncidencia {
    id: number;
    titulo: string;
    estado: EstadoTicketLiteral;
    atencionInmediata: boolean;
}

function etiquetarEstadoTicket(ticket: TicketIncidencia): string {
    const prefijos: Record<EstadoTicketLiteral, string> = {
        abierto: "🟡",
        en_proceso: "🔵",
        resuelto: "🟢",
        cerrado: "⚪",
    };
    const indicadorUrgencia = ticket.atencionInmediata ? "🚨" : "📋";
    return `${indicadorUrgencia} ${prefijos[ticket.estado]} [#${ticket.id}] ${ticket.titulo}`;
}

const listaTickets: TicketIncidencia[] = [
    { id: 801, titulo: "Caída de servidor Web principal", estado: "en_proceso", atencionInmediata: true },
    { id: 802, titulo: "Configuración de correo institucional", estado: "abierto", atencionInmediata: false },
    { id: 803, titulo: "Cambio de disco duro dañado", estado: "resuelto", atencionInmediata: true },
    { id: 804, titulo: "Actualización de licencias de office", estado: "cerrado", atencionInmediata: false },
];

console.log("=== ESTADO DE TICKETS DE SOPORTE TÉCNICO ===");
for (const tck of listaTickets) {
    console.log(etiquetarEstadoTicket(tck));
}
