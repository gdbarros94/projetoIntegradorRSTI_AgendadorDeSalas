export default class Reserva {
    constructor(id, sala, turma, data, horaInicio, horaFim) {
        // Construtor da classe Reserva
        this.id = id; // ID da reserva
        this.sala = sala; // Sala reservada
        this.turma = turma; // Turma associada à reserva
        this.data = data; // Data da reserva (formato YYYY-MM-DD)
        this.horaInicio = horaInicio; // Hora de início da reserva (formato HH:MM)
        this.horaFim = horaFim; // Hora de término da reserva (formato HH:MM)
    }

    static reservas = []; // Array para armazenar todas as reservas

    // Método para cadastrar uma nova reserva
    cadastrar() {
        Reserva.reservas.push(this); // Adiciona a reserva ao array de reservas
        console.log(`Reserva com ID ${this.id} cadastrada com sucesso.`);
    }

    // Método para editar uma reserva existente
    editar(novaReserva) {
        // Encontra o índice da reserva no array de reservas
        const index = Reserva.reservas.findIndex(reserva => reserva.id === this.id);
        if (index !== -1) { // Se a reserva foi encontrada
            Reserva.reservas[index] = novaReserva; // Substitui a reserva antiga pela nova
            console.log(`Reserva com ID ${this.id} editada com sucesso.`);
        } else { // Se a reserva não foi encontrada
            console.log(`Reserva com ID ${this.id} não encontrada.`);
        }
    }

    // Método para excluir uma reserva existente
    excluir() {
        // Filtra o array de reservas removendo a reserva com o ID correspondente
        Reserva.reservas = Reserva.reservas.filter(reserva => reserva.id !== this.id);
        console.log(`Reserva com ID ${this.id} excluída com sucesso.`);
    }

    // Método estático para listar todas as reservas
    static listar() {
        console.log("Listagem de todas as reservas:");
        Reserva.reservas.forEach(reserva => {
            console.log(reserva); // Imprime cada reserva
        });
    }

    // Método estático para buscar uma reserva pelo ID
    static buscarPorId(id) {
        // Encontra a reserva no array de reservas pelo ID
        const reserva = Reserva.reservas.find(reserva => reserva.id === id);
        if (reserva) { // Se a reserva foi encontrada
            console.log("Reserva encontrada:");
            console.log(reserva); // Imprime a reserva encontrada
        } else { // Se a reserva não foi encontrada
            console.log(`Reserva com ID ${id} não encontrada.`);
        }
    }

    // Método estático para verificar conflito de horário com outras reservas
    static verificarConflito(novaReserva) {
        // Verifica se há alguma reserva existente que conflita com a nova reserva
        const conflito = Reserva.reservas.some(reserva => {
            return (
                reserva.sala === novaReserva.sala &&
                reserva.data === novaReserva.data &&
                (
                    (novaReserva.horaInicio >= reserva.horaInicio && novaReserva.horaInicio < reserva.horaFim) ||
                    (novaReserva.horaFim > reserva.horaInicio && novaReserva.horaFim <= reserva.horaFim)
                )
            );
        });

        if (conflito) { // Se houver conflito de horário
            console.log("Conflito de horário detectado.");
        } else { // Se não houver conflito de horário
            console.log("Nenhum conflito de horário detectado.");
        }
    }
}

// Exemplos de uso da classe Reserva

// Criar novas reservas
const reserva1 = new Reserva(1, "Sala A", "Turma 1", "2024-04-06", "08:00", "10:00");
const reserva2 = new Reserva(2, "Sala B", "Turma 2", "2024-04-06", "09:00", "11:00");
const reserva3 = new Reserva(3, "Sala C", "Turma 3", "2024-04-07", "10:00", "12:00");

// Cadastrar as reservas
reserva1.cadastrar();
reserva2.cadastrar();
reserva3.cadastrar();

// Listar todas as reservas
Reserva.listar();

// Buscar uma reserva por ID
Reserva.buscarPorId(2);

// Editar uma reserva
reserva2.editar(new Reserva(2, "Sala B", "Nova Turma", "2024-04-06", "09:00", "11:00"));

// Excluir uma reserva
reserva3.excluir();

// Verificar conflito de horário
const novaReserva = new Reserva(4, "Sala A", "Turma 4", "2024-04-06", "09:30", "10:30");
Reserva.verificarConflito(novaReserva);