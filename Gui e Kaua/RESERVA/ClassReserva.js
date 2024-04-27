class Reserva {
    constructor(id, sala, turma, data, horarioInicio, horarioFim) {
        this.id = id;  // Corrigido se o ID pode ser nulo, caso contrário, passe um valor válido.
        this.sala = sala;
        this.turma = turma;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }

    // Definição de uma propriedade estática reservas para armazenar todas as reservas
    static reservas = [];

    // Método para cadastrar uma nova reserva
    cadastrar() {
        Reserva.reservas.push(this); // Corrigido para adicionar a nova reserva ao array de reservas.
        console.log(`Reserva com ID ${this.id} cadastrada com sucesso.`);
    }

    // Método para editar uma reserva existente
    editar(novaReserva) {
        const index = Reserva.reservas.findIndex(reserva => reserva.id === this.id);
        if (index !== -1) {
            Reserva.reservas[index] = novaReserva;
            console.log(`Reserva com ID ${this.id} editada com sucesso.`);
        } else {
            console.log(`Reserva com ID ${this.id} não encontrada.`);
        }
    }

    // Método para excluir uma reserva existente
    excluir() {
        Reserva.reservas = Reserva.reservas.filter(reserva => reserva.id !== this.id);
        console.log(`Reserva com ID ${this.id} excluída com sucesso.`);
    }

    // Método estático para listar todas as reservas
    static listar() {
        console.log("Listagem de todas as reservas:");
        Reserva.reservas.forEach(reserva => {
            console.log(reserva);
        });
    }

    // Método estático para buscar uma reserva por ID
    static buscarPorId(id) {
        const reserva = Reserva.reservas.find(reserva => reserva.id === id);
        if (reserva) {
            console.log("Reserva encontrada:");
            console.log(reserva);
        } else {
            console.log(`Reserva com ID ${id} não encontrada.`);
        }
    }

    // Método para verificar conflito de horário com outras reservas
    verificarConflito() {
        // Fazendo uma solicitação para recuperar os dados das salas
        fetch('http://172.20.48.122:3000/salas')
            .then(response => response.json())
            .then(salas => {
                // Agora, temos as informações das salas, podemos verificar os conflitos
                const conflito = Reserva.reservas.some(reserva => {
                    const salaReserva = salas.find(sala => sala.id === reserva.sala);
                    const salaAtual = salas.find(sala => sala.id === this.sala);
    
                    if (salaReserva && salaAtual) {
                        // Verificar se as salas são as mesmas e as datas das reservas são iguais
                        if (reserva.sala === this.sala && reserva.data === this.data) {
                            // Verificar se há sobreposição de horários
                            if (
                                // Caso 1: Novo horário de início está dentro do horário da reserva existente
                                (this.horarioInicio >= reserva.horarioInicio && this.horarioInicio < reserva.horarioFim) ||
                                // Caso 2: Novo horário de término está dentro do horário da reserva existente
                                (this.horarioFim > reserva.horarioInicio && this.horarioFim <= reserva.horarioFim) ||
                                // Caso 3: A reserva existente está totalmente dentro do novo horário
                                (this.horarioInicio <= reserva.horarioInicio && this.horarioFim >= reserva.horarioFim)
                            ) {
                                return true; // Conflito detectado
                            }
                        }
                    } else {
                        console.log("Sala não encontrada.");
                    }
                    return false; // Sem conflito neste caso
                });
    
                if (conflito) {
                    console.log("Conflito de horário detectado.");
                } else {
                    console.log("Nenhum conflito de horário detectado.");
                }
            })
            .catch(error => console.error('Erro ao buscar dados das salas:', error));
        }
    }