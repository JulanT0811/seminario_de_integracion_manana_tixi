// Archivo: 02_declaracion_variables_mp.ts
// Tema: Ticket de Soporte Técnico

// const — valor que NO cambia (configuración del sistema de soporte técnico)
const NOMBRE_SISTEMA: string = "HelpDesk Pro - Sistema de Tickets de Soporte Técnico";
const SLA_TIEMPO_MAXIMO_HORAS: number = 24;
const DEPARTAMENTO_PRINCIPAL: string = "Soporte Técnico Central TI";

// let — valor que SÍ puede cambiar durante la atención del servicio
let totalTicketsAtendidos: number = 0;
let estadoMesaAyuda: string = "cerrado";
let agenteDisponible: boolean = false;

console.log(`Sistema: ${NOMBRE_SISTEMA}`);
console.log(`Tickets atendidos: ${totalTicketsAtendidos}, Estado Mesa: ${estadoMesaAyuda}, Agente disponible: ${agenteDisponible}`);

// Actualización de variables de estado
totalTicketsAtendidos += 5; // Atención de 5 tickets de soporte técnico
estadoMesaAyuda = "abierto";
agenteDisponible = true;

console.log("Actualizando estado de la mesa de ayuda...");
console.log(`Tickets atendidos: ${totalTicketsAtendidos}, Estado Mesa: ${estadoMesaAyuda}, Agente disponible: ${agenteDisponible}`);
