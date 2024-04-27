
    function reservaTurma() {
        const sala = document.getElementById('sala').value;
        const turma = document.getElementById('turma').value;
        const data = document.getElementById('data').value;
        const horarioInicio = document.getElementById('horarioInicio').value;
        const horarioFim = document.getElementById('horarioFim').value;

        const novaReserva = new Reserva(sala, turma, data, horarioInicio, horarioFim);
        
        // Verifica conflitos de horário com outras reservas
        novaReserva.verificarConflito();

        // Exibe os detalhes da reserva
        const resultado = document.getElementById('resultado');
        resultado.innerHTML += `
            <br>
            <p>Sala: ${novaReserva.sala}</p>
            <p>Turma: ${novaReserva.turma}</p>
            <p>Data: ${novaReserva.data}</p>
            <p>Hora de Início: ${novaReserva.horarioInicio}</p>
            <p>Hora de Término: ${novaReserva.horarioFim}</p>
        `;

        // Adiciona a nova reserva ao array de reservas
        novaReserva.cadastrar();
    }

