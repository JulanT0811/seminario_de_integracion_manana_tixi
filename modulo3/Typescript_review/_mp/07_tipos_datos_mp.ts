// Archivo: 07_tipos_datos_mp.ts
// Tema: Ticket de Soporte Técnico

// Tipos numéricos aplicados a diagnóstico y estadísticas de soporte técnico
const tiempoResolucionSegundos: number = 7200;    // 2 horas en segundos
const frecuenciaCpuServidor: number = 3.6;        // GHz
const variacionTemperatura: number = -2;          // grados bajo cero en servidor de soporte
const codigoErrorHex: number = 0x4a2f;            // registro hexadecimal de fallo de hardware
const mascaraPermisosBinario: number = 0b11011;   // flags binarias de permisos de acceso soporte
const codigoSucursalOctal: number = 0o777;        // código octal de grupo de soporte TI
const idTicketNumerico: number = 8_942_000;       // $8,942,000 ID ticket con separador visual ES2021

console.log(`Hexadecimal Error: ${codigoErrorHex}`);
console.log(`Máscara Permisos Soporte (Binario): ${mascaraPermisosBinario}`);
console.log(`ID Ticket Numérico: ${idTicketNumerico}`);

// Constantes especiales de Number aplicadas a verificación de métricas de tickets
console.log(`Número máximo seguro de ID de ticket: ${Number.MAX_SAFE_INTEGER}`);
console.log(`¿Tiempo resolución finito?: ${Number.isFinite(tiempoResolucionSegundos / 0)}`); // false
console.log(`¿Valor NaN en cálculo de métrica?: ${Number.isNaN(0 / 0)}`);                  // true
