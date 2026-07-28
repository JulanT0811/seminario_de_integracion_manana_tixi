// Archivo: 14_poo_clase_mp.ts
// Tema: Ticket de Soporte Técnico

class TicketSoporteTecnico {
    codigo: string;
    usuario: string;
    prioridad: string;
    resuelto: boolean;

    constructor(codigo: string, usuario: string, prioridad: string, resuelto: boolean) {
        this.codigo = codigo;
        this.usuario = usuario;
        this.prioridad = prioridad;
        this.resuelto = resuelto;
    }

    // Método: acción que describe el estado del ticket de soporte
    describir(): string {
        const estado = this.resuelto ? "Resuelto / Cerrado" : "En Proceso / Pendiente";
        return `Ticket ${this.codigo} [${this.prioridad}] — Usuario: ${this.usuario} (${estado})`;
    }
}

const ticket1 = new TicketSoporteTecnico("TCK-1001", "Ana Martinez", "Alta", true);
const ticket2 = new TicketSoporteTecnico("TCK-1002", "Carlos Ruiz", "Crítica", false);

console.log(ticket1.describir()); // Ticket TCK-1001 [Alta] — Usuario: Ana Martinez (Resuelto / Cerrado)
console.log(ticket2.describir()); // Ticket TCK-1002 [Crítica] — Usuario: Carlos Ruiz (En Proceso / Pendiente)
