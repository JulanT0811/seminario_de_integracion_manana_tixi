// Archivo: 05_templates_mp.ts
// Tema: Ticket de Soporte Técnico

const usuarioNombre: string = "Laura Gomez";
const tipoIncidencia: string = "Reinstalación de Sistema Operativo y Backup";
const costoServicio: number = 89.99;
const porcentajeIva: number = 0.19;

// Interpolación de datos de ticket de soporte
const resumenTicket: string = `Usuario: ${usuarioNombre} | Incidencia: ${tipoIncidencia} | Costo Soporte: $${costoServicio}`;
console.log(resumenTicket);

// Expresión matemática para cálculo del total con IVA del servicio de soporte
const totalConIva: string = `Total servicio con IVA (19%): $${(costoServicio * (1 + porcentajeIva)).toFixed(2)}`;
console.log(totalConIva);

// Comprobante multi-línea del ticket resuelto
let nivelSoporte: string = "Nivel 2 - Soporte Especializado TI";
let ticketResuelto: boolean = true;
let garantiaHoras: number = 72;

const comprobanteTicket: string = `
=== COMPROBANTE DE TICKET DE SOPORTE TÉCNICO ===
Mesa Ayuda : ${nivelSoporte}
Usuario    : ${usuarioNombre}
Incidencia : ${tipoIncidencia}
Garantía   : ${garantiaHoras} horas de soporte pos-atención
Estado     : ${ticketResuelto ? "RESUELTO (Cerrado)" : "EN PROCESO (Pendiente)"}
Total      : $${(costoServicio * (1 + porcentajeIva)).toFixed(2)}
=================================================
`;
console.log(comprobanteTicket);
