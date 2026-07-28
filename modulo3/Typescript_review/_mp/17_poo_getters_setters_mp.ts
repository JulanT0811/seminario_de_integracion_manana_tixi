// Archivo: 17_poo_getters_setters_mp.ts
// Tema: Ticket de Soporte Técnico (Gestión de SLA y Tiempo Transcurrido de Ticket)

class SlaTiempoRespuestaTicket {
    private _horasTranscurridas: number;

    constructor(horasIniciales: number) {
        this._horasTranscurridas = horasIniciales;
    }

    get horasTranscurridas(): number {
        return this._horasTranscurridas;
    }

    set horasTranscurridas(valor: number) {
        if (valor < 0) {
            throw new Error("El tiempo transcurrido del ticket no puede ser negativo");
        }
        this._horasTranscurridas = valor;
    }

    get requiereEscalado(): boolean {
        return this._horasTranscurridas > 24; // Supera SLA estándar de 24h
    }
}

const ticketControl = new SlaTiempoRespuestaTicket(12);
console.log(`Horas transcurridas: ${ticketControl.horasTranscurridas}h`); // 12h
console.log(`¿Requiere escalado urgente?: ${ticketControl.requiereEscalado}`); // false

ticketControl.horasTranscurridas = 30; // Retraso acumulado
console.log(`Nuevas horas transcurridas: ${ticketControl.horasTranscurridas}h`); // 30h
console.log(`¿Requiere escalado urgente?: ${ticketControl.requiereEscalado}`); // true
