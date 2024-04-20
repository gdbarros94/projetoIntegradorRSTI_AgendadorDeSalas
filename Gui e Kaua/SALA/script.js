// Função para exibir a lista de salas cadastradas
function exibirSalas() {
    const listaSalas = document.getElementById('lista-salas');
    listaSalas.innerHTML = ''; // Limpa o conteúdo anterior

    Sala.listar(); // Utiliza o método estático da classe Sala para listar as salas

    // Preenche a lista de salas na página
    Sala.salasCadastradas.forEach(sala => {
        const salaItem = document.createElement('p');
        salaItem.textContent = `ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`;
        listaSalas.appendChild(salaItem);
    });
}

// Event listener para o formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do formulário
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const capacidade = document.getElementById('capacidade').value;
    const descricao = document.getElementById('descricao').value;

    // Cria uma nova instância da classe Sala
    const novaSala = new Sala(id, nome, capacidade, descricao);

    // Cadastra a nova sala
    novaSala.cadastrar();

    // Limpa os campos do formulário
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('capacidade').value = '';
    document.getElementById('descricao').value = '';

    // Atualiza a lista de salas cadastradas na página
    exibirSalas();
});

// Event listener para o formulário de busca por ID
document.getElementById('form-busca').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o ID a ser buscado
    const idBusca = document.getElementById('id-busca').value;

    // Busca a sala pelo ID e exibe o resultado
    const salaEncontrada = Sala.buscarPorId(idBusca);
    const resultadoBusca = document.getElementById('resultado-busca');
    resultadoBusca.innerHTML = ''; // Limpa o conteúdo anterior

    if (salaEncontrada) {
        resultadoBusca.textContent = `Sala encontrada - ID: ${salaEncontrada.id}, Nome: ${salaEncontrada.nome}, Capacidade: ${salaEncontrada.capacidade}, Descrição: ${salaEncontrada.descricao}`;
    }
});

// Exibe as salas cadastradas ao carregar a página
window.onload = function () {
    exibirSalas();
};
