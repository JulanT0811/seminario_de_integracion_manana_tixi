// Archivo: 04_primitivo_mp.ts
// Tema: Ticket de Soporte Técnico

// number — tiempos, costos y códigos numéricos de tickets de soporte
const costoHoraSoporte: number = 75.50;
const tiempoRespuestaHoras: number = 2.5;
const descuentoSla: number = -15.0;
const codigoErrorHex: number = 0x500a;

// string — correos de usuarios, categorías y endpoints del HelpDesk
const emailUsuario: string = "usuario@soporte-tecnico.com";
const categoriaIncidencia: string = 'Software';
const endpointTickets: string = `/api/v1/tickets-soporte`;

// boolean — prioridades, resoluciones y requerimiento de escalado
const requiereEscalado: boolean = true;
const esPrioridadCritica: boolean = true;
const esCobroAdicional: boolean = false;

// ── Aritmética de soporte técnico ─────────────────────────────────────────
const tarifaBase = 150;
const descuentoAplicado = 20;
const costoFinalServicio = tarifaBase - descuentoAplicado;
console.log(`Costo final del servicio técnico: $${costoFinalServicio}`);

// ── Métodos de string con datos del ticket ────────────────────────────────
const cadenaAgente = "  agente-soporte@helpdesk.com  ";
console.log(cadenaAgente.trim().toLowerCase());
console.log(emailUsuario.includes("soporte-tecnico"));
console.log(emailUsuario.split("@")[1]);

let logIncidencia: string = "TCK-9901;Error 500;Base de Datos;Servicio Caido";
const datosLog = logIncidencia.split(";");
console.log(`Código: ${datosLog[0]}, Categoria: ${datosLog[2]}`);

// ── Lógica booleana de atención de ticket ─────────────────────────────────
const listoParaCierre: boolean = requiereEscalado && esPrioridadCritica;
console.log(`¿Ticket procesado con alta prioridad?: ${listoParaCierre}`);
