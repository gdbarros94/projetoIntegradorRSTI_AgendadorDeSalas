function cadastrarTurma() {
    const nome = document.getElementById('nome').value;
    const disciplina = document.getElementById('disciplina').value;
    const professor = document.getElementById('professor').value;
    const diasSemana = document.getElementById('diasSemana').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFim = document.getElementById('horaFim').value;

    const turma = new Turma(); // Criar uma nova instância de Turma

    // Chamar o método cadastrar() da classe Turma com os valores do formulário
    const novaTurma = turma.cadastrar(nome, disciplina, professor, diasSemana, horaInicio, horaFim);

    // Exibir os detalhes da nova turma no HTML
    const listaTurmas = document.getElementById('listaTurmas');
    listaTurmas.innerHTML += `
        <br>
        <p><b>Nome da Turma:</b> ${novaTurma.nome}</p>
        <p><b>Disciplina:</b> ${novaTurma.disciplina}</p>
        <p><b>Professor:</b> ${novaTurma.professor}</p>
        <p><b>Dias da Semana:</b> ${novaTurma.diasSemana}</p>
        <p><b>Horário de Início:</b> ${novaTurma.horaInicio}</p>
        <p><b>Horário de Fim:</b> ${novaTurma.horaFim}</p>
    `;
}