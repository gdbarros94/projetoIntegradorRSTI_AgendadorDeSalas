const turma = new Turma();

async function carregarListaTurmas() {
    await turma.carregarTurmas();
    const listaTurmas = document.getElementById('listaTurmas');
    listaTurmas.innerHTML = ''; // Limpar lista

    turma.turmas.forEach(t => {
        listaTurmas.innerHTML += `
            <div class="mb-4">
                <p><b>Nome da Turma:</b> ${t.nome}</p>
                <p><b>Disciplina:</b> ${t.disciplina}</p>
                <p><b>Professor:</b> ${t.professor}</p>
                <p><b>Dias da Semana:</b> ${t.dias_da_semana}</p>
                <p><b>Horário de Início:</b> ${t.horarioInicio}</p>
                <p><b>Horário de Fim:</b> ${t.horarioFim}</p>
                <button onclick="editarTurma('${t.uid}')"
                <button onclick="excluirTurma('${t.uid}')"
            </div>
        `;
    });
}

async function cadastrarTurma() {
    const nome = document.getElementById('nome').value;
    const disciplina = document.getElementById('disciplina').value;
    const professor = document.getElementById('professor').value;
    const dias_da_semana = document.getElementById('dias_da_semana').value;
    const horarioInicio = document.getElementById('horarioInicio').value;
    const horarioFim = document.getElementById('horarioFim').value;

    await turma.cadastrar(nome, disciplina, professor, dias_da_semana, horarioInicio, horarioFim);
    await carregarListaTurmas();
}

async function editarTurma(uid) {
    const nome = prompt("Digite o novo nome:", turma.buscarPorId(uid).nome);
    const disciplina = prompt("Digite a nova disciplina:", turma.buscarPorId(uid).disciplina);
    const professor = prompt("Digite o novo professor:", turma.buscarPorId(uid).professor);
    const dias_da_semana = prompt("Digite os novos dias da semana:", turma.buscarPorId(uid).dias_da_semana);
    const horarioInicio = prompt("Digite o novo horário de início:", turma.buscarPorId(uid).horarioInicio);
    const horarioFim = prompt("Digite o novo horário de fim:", turma.buscarPorId(uid).horarioFim);

    await turma.editar(uid, nome, disciplina, professor, dias_da_semana, horarioInicio, horarioFim);
    await carregarListaTurmas();
}

async function excluirTurma(uid) {
    if (confirm("Tem certeza que deseja excluir esta turma?")) {
        await turma.excluir(uid);
        await carregarListaTurmas();
    }
}

// Carregar a lista de turmas ao carregar a página
window.onload = carregarListaTurmas;
