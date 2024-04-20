// Função para exibir a lista de salas cadastradas
function exibirSalas() {
    fetch('http://172.20.48.182:3000/salas')
        .then(response => response.json())
        .then(salas => {
            const listaSalas = document.getElementById('lista-salas');
            listaSalas.innerHTML = ''; // Limpa o conteúdo anterior

            salas.forEach(sala => {
                const salaItem = document.createElement('p');
                salaItem.textContent = `ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`;
                listaSalas.appendChild(salaItem);
            });
        })
        .catch(error => console.error('Erro ao obter salas:', error));
}

// Event listener para o formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do formulário
    const nome = document.getElementById('nome').value;
    const capacidade = document.getElementById('capacidade').value;
    const descricao = document.getElementById('descricao').value;

    // Cria um objeto com os dados da nova sala
    const novaSala = {
        nome,
        capacidade,
        descricao
    };

    // Envia uma solicitação POST para cadastrar a nova sala
    fetch('http://172.20.48.182:3000/salas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaSala)
    })
    .then(response => response.json())
    .then(() => {
        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('capacidade').value = '';
        document.getElementById('descricao').value = '';

        // Atualiza a lista de salas cadastradas na página
        exibirSalas();
    })
    .catch(error => console.error('Erro ao cadastrar sala:', error));
});

// Event listener para o formulário de busca por ID
document.getElementById('form-busca').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o ID a ser buscado
    const idBusca = document.getElementById('id-busca').value;

    // Envia uma solicitação GET para obter a sala pelo ID
    fetch(`http://172.20.48.182:3000/salas/${idBusca}`)
        .then(response => response.json())
        .then(sala => {
            const resultadoBusca = document.getElementById('resultado-busca');
            resultadoBusca.innerHTML = ''; // Limpa o conteúdo anterior

            if (sala) {
                resultadoBusca.textContent = `Sala encontrada - ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`;
            } else {
                resultadoBusca.textContent = 'Sala não encontrada';
            }
        })
        .catch(error => console.error('Erro ao buscar sala por ID:', error));
});

// Exibe as salas cadastradas ao carregar a página
window.onload = function () {
    exibirSalas();
};
