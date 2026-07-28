// Archivo: 10_tuplas_mp.ts
// Tema: Ticket de Soporte Técnico

type UbicacionServidorSoporte = [rackId: number, unidadU: number];
type MetricasTicketSoporte = [slaHoras: number, csatPuntuacion: number, reintentos: number];
type RegistroAtencionTicket = [codigoTicket: string, costoServicio: number];

const ubicacionRack: UbicacionServidorSoporte = [12, 42];
const metricasServicio: MetricasTicketSoporte = [24, 5, 0];
const ultimoTicketResuelto: RegistroAtencionTicket = ["TCK-8942", 150.00];

// Desestructuración de tuplas de métricas y ubicación
const [rack, unidad] = ubicacionRack;
const [sla, csat, reintentos] = metricasServicio;
const [codigo, costo] = ultimoTicketResuelto;

console.log(`Ubicación Servidor Afectado: Rack ${rack}, Unidad ${unidad}U`);
console.log(`Métricas Ticket: SLA ${sla}h, Satisfacción CSAT ${csat}/5, Reintentos ${reintentos}`);
console.log(`Último ticket atendido: ${codigo} con costo de $${costo}`);

// Tupla con nombres para rango de tiempo de respuesta de ticket
type RangoRespuestaHoras = [minimoHoras: number, maximoHoras: number];
const rangoSlaGarantizado: RangoRespuestaHoras = [1, 12]; // De 1 a 12 horas
console.log(`Garantía de respuesta SLA: de ${rangoSlaGarantizado[0]} a ${rangoSlaGarantizado[1]} horas`);
