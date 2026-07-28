// Archivo: 03_inferencia_mp.ts
// Tema: Ticket de Soporte Técnico

// ── Anotación explícita ───────────────────────────────────────────────────
const codigoTicket: number = 894201;
const descripcionIncidencia: string = "Fallo en conexión VPN corporativa";
const ticketAbierto: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TypeScript deduce los tipos automáticamente a partir del valor asignado
const codigoTicket2 = 894201;                          // TS infiere: number
const descripcionIncidencia2 = "Error 500 en Servidor"; // TS infiere: string
const ticketAbierto2 = true;                           // TS infiere: boolean

// ── Cuándo anotar explícitamente en el sistema de soporte ──────────────────
// 1. Variable declarada sin valor inicial (esperando asignar ticket):
let ticketsPendientes: number;
ticketsPendientes = 12;

// 2. Tipo unión cuando el identificador de ticket puede ser número o string:
let idTicket: number | string = 101;
idTicket = "TCK-8942"; // Válido por la unión de tipos

// 3. Parámetros de funciones (TS exige anotar parámetros):
function consultarEstadoTicket(incidencia: string, pendientes: number): string {
    return `Consulta de soporte: ${pendientes} ticket(s) pendiente(s) sobre: ${incidencia}`;
}

console.log(consultarEstadoTicket(descripcionIncidencia, ticketsPendientes));
