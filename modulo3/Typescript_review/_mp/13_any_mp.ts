// Archivo: 13_any_mp.ts
// Tema: Ticket de Soporte Técnico

// ─── any ───────────────────────────────────────────────────────────────────
// Útil solo al recibir payloads no estructurados de sistemas de tickets antiguos
let datosPayloadExterno: any = "Incidencia TCK-101";
datosPayloadExterno = 99420.50;
datosPayloadExterno = true;
// datosPayloadExterno.metodoInexistente(); // Falla en runtime si no existe

// ─── unknown ───────────────────────────────────────────────────────────────
// Forma segura de procesar respuestas desconocidas de APIs externas de HelpDesk
let respuestaApiSoporte: unknown = '{"codigo": "TCK-550", "prioridad": "Alta"}';
respuestaApiSoporte = { codigo: "TCK-550", prioridad: "Alta", tiempoHoras: 2 };

if (typeof respuestaApiSoporte === "object" && respuestaApiSoporte !== null) {
    const ticket = respuestaApiSoporte as { codigo: string; prioridad: string };
    console.log(`Ticket verificado: ${ticket.codigo.toUpperCase()} - Prioridad: ${ticket.prioridad}`);
}

// ─── never ─────────────────────────────────────────────────────────────────
// Representa errores fatales en la gestión de SLA o validaciones de tickets de soporte
function lanzarErrorCriticoSoporte(mensaje: string): never {
    throw new Error(`[ERROR CRÍTICO MESA DE AYUDA] ${mensaje}`);
}

function verificarEstadoTicketExhaustivo(estado: never): never {
    throw new Error(`Estado de ticket no manejado: ${String(estado)}`);
}

console.log("Manejo de tipos dinámicos de tickets completado correctamente.");
