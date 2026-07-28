// Archivo: 11_enums_mp.ts
// Tema: Ticket de Soporte Técnico

// Enum numérico para niveles de prioridad de tickets de soporte
enum PrioridadTicket {
    Baja,      // 0
    Media,     // 1
    Alta,      // 2
    Critica,   // 3
}

const prioridadActual: PrioridadTicket = PrioridadTicket.Critica;
console.log(`Nivel numérico de prioridad: ${prioridadActual}`);          // 3
console.log(`Nombre de prioridad: ${PrioridadTicket[3]}`);               // "Critica"

// Enum numérico con códigos de estado de ticket de soporte
enum EstadoTicketSoporte {
    Recibido = 100,
    EnDiagnostico = 101,
    EnProceso = 200,
    Resuelto = 201,
    Cerrado = 202,
}

// Enum de cadenas para categorías de incidencias
enum CategoriaIncidencia {
    Hardware = "HARDWARE",
    Software = "SOFTWARE",
    Redes = "REDES",
    Seguridad = "SEGURIDAD",
}

const categoriaActual: CategoriaIncidencia = CategoriaIncidencia.Redes;
console.log(`Categoría seleccionada: ${categoriaActual}`); // "REDES"
console.log(`Estado del ticket de soporte: ${EstadoTicketSoporte.Resuelto}`); // 201
