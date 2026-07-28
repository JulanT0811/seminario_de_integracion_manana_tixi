// Archivo: 09_arrays_objetos_mp.ts
// Tema: Ticket de Soporte Técnico

type TicketSoporte = {
    id: number;
    titulo: string;
    categoria: string;
    tiempoHoras: number;
    resuelto: boolean;
    prioridad: "Baja" | "Media" | "Alta" | "Crítica";
};

const sistemaTickets: TicketSoporte[] = [
    { id: 101, titulo: "Fallo en router principal", categoria: "Redes", tiempoHoras: 1.5, resuelto: true, prioridad: "Alta" },
    { id: 102, titulo: "Instalación de antivirus", categoria: "Software", tiempoHoras: 0.5, resuelto: true, prioridad: "Baja" },
    { id: 103, titulo: "Servidor SQL sin respuesta", categoria: "Base de Datos", tiempoHoras: 4.0, resuelto: false, prioridad: "Crítica" },
    { id: 104, titulo: "Reemplazo de pantalla laptop", categoria: "Hardware", tiempoHoras: 2.0, resuelto: true, prioridad: "Media" },
    { id: 105, titulo: "Restablecimiento de credenciales", categoria: "Accesos", tiempoHoras: 0.2, resuelto: false, prioridad: "Baja" },
];

// Operaciones con arreglos de objetos de tickets de soporte
const ticketsPendientes: TicketSoporte[] = sistemaTickets.filter((t) => !t.resuelto);
const listaTitulos: string[] = sistemaTickets.map((t) => `[#${t.id}] ${t.categoria}: ${t.titulo}`);
const ticketMasCritico: TicketSoporte | undefined = sistemaTickets.reduce((max, t) =>
    t.tiempoHoras > max.tiempoHoras ? t : max
);
const ticketEspecifico: TicketSoporte | undefined = sistemaTickets.find((t) => t.id === 103);

console.log("Sistema de Tickets Completo:");
console.log(sistemaTickets);
console.log("Lista de Incidencias:", listaTitulos);
console.log("Ticket con mayor tiempo de atención:", ticketMasCritico?.titulo, "(", ticketMasCritico?.tiempoHoras, "hrs )");
console.log("Cantidad de tickets pendientes:", ticketsPendientes.length);
console.log("Detalle del ticket ID 103:", ticketEspecifico);
