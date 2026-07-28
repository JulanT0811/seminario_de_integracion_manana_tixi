// Archivo: 08_arrays_mp.ts
// Tema: Ticket de Soporte Técnico

// Arreglos de tiempos de respuesta en minutos y categorías de tickets de soporte
const tiemposRespuestaMinutos: number[] = [15, 30, 45, 120, 240];
const categoriasSoporte: Array<string> = ["Redes", "Hardware", "Software", "Seguridad", "Base de Datos"];

// Inferencia de tipo en arreglos de tickets
const slaMaximoHoras = [1, 2, 4, 8, 24]; // TS infiere number[]
console.log(`Tiempos de respuesta (minutos): ${tiemposRespuestaMinutos}`);
console.log(`Categorías disponibles: ${categoriasSoporte}`);

// Métodos tipados para gestión de SLA de tickets
const tiemposConAjusteSla: number[] = tiemposRespuestaMinutos.map((t) => t * 0.8); // Reducción 20% tiempo por prioridad
const ticketsCriticos: number[] = tiemposRespuestaMinutos.filter((t) => t >= 60);
const tiempoTotalAcumulado: number = tiemposRespuestaMinutos.reduce((acc, t) => acc + t, 0);

console.log(`Tiempos con ajuste SLA: ${tiemposConAjusteSla}`);
console.log(`Tiempos de atención crítica (>= 60 min): ${ticketsCriticos}`);
console.log(`Tiempo Total de Atención Acumulado: ${tiempoTotalAcumulado} min`);

// Mutaciones de la cola de tickets
tiemposRespuestaMinutos.push(480); // Nuevo ticket de soporte de baja prioridad agregado
console.log(`Cola de tickets actualizada: ${tiemposRespuestaMinutos}`);
tiemposRespuestaMinutos.unshift(5); // Ticket urgente de alta prioridad al inicio
console.log(`Cola con ticket urgente: ${tiemposRespuestaMinutos}`);
const ultimoTiempo = tiemposRespuestaMinutos.pop();
const primerTiempo = tiemposRespuestaMinutos.shift();
console.log(`Tras procesar extremos: ${tiemposRespuestaMinutos}`);

// Búsquedas en el registro de soporte
const existeTiempoMedio: boolean = tiemposRespuestaMinutos.includes(45);
console.log(`¿Existe ticket con 45 min de respuesta?: ${existeTiempoMedio}`);
const posicionTiempo: number = tiemposRespuestaMinutos.indexOf(120);
console.log(`Posición del ticket de 120 min: ${posicionTiempo}`);
const primerTicketLargo: number | undefined = tiemposRespuestaMinutos.find((t) => t > 100);
console.log(`Primer ticket hallado con respuesta > 100 min: ${primerTicketLargo} min`);
