function reservaTurma() {
    const id = document.getElementById('id').value;
    const sala = document.getElementById('sala').value;
    const turma = document.getElementById('turma').value;
    const data = document.getElementById('data').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFim = document.getElementById('horaFim').value;

    const novaReserva = new Reserva(id, sala, turma, data, horaInicio, horaFim);

    novaReserva.cadastrar();
    novaReserva.verificarConflito();
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>ID: ${novaReserva.id}</p>
        <p>Sala: ${novaReserva.sala}</p>
        <p>Turma: ${novaReserva.turma}</p>
        <p>Data: ${novaReserva.data}</p>
        <p>Hora de Início: ${novaReserva.horaInicio}</p>
        <p>Hora de Término: ${novaReserva.horaFim}</p>
    `;
}