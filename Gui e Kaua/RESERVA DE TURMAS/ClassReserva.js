class Reserva {
    constructor(id, sala, turma, data, horaInicio, horaFim) {
        this.id = id;
        this.sala = sala;
        this.turma = turma;
        this.data = data;
        this.horaInicio = horaInicio;
        this.horaFim = horaFim;
    }

    static reservas = [];

    cadastrar() {
        Reserva.reservas.push(this);
        console.log(`Reserva com ID ${this.id} cadastrada com sucesso.`);
    }

    editar(novaReserva) {
        const index = Reserva.reservas.findIndex(reserva => reserva.id === this.id);
        if (index !== -1) {
            Reserva.reservas[index] = novaReserva;
            console.log(`Reserva com ID ${this.id} editada com sucesso.`);
        } else {
            console.log(`Reserva com ID ${this.id} não encontrada.`);
        }
    }

    excluir() {
        Reserva.reservas = Reserva.reservas.filter(reserva => reserva.id !== this.id);
        console.log(`Reserva com ID ${this.id} excluída com sucesso.`);
    }

    static listar() {
        console.log("Listagem de todas as reservas:");
        Reserva.reservas.forEach(reserva => {
            console.log(reserva);
        });
    }

    static buscarPorId(id) {
        const reserva = Reserva.reservas.find(reserva => reserva.id === id);
        if (reserva) {
            console.log("Reserva encontrada:");
            console.log(reserva);
        } else {
            console.log(`Reserva com ID ${id} não encontrada.`);
        }
    }

    verificarConflito() {
        const conflito = Reserva.reservas.some(reserva => {
            return (
                reserva.sala === this.sala &&
                reserva.data === this.data &&
                (
                    (this.horaInicio >= reserva.horaInicio && this.horaInicio < reserva.horaFim) ||
                    (this.horaFim > reserva.horaInicio && this.horaFim <= reserva.horaFim)
                )
            );
        });

        if (conflito) {
            console.log("Conflito de horário detectado.");
        } else {
            console.log("Nenhum conflito de horário detectado.");
        }
    }
}