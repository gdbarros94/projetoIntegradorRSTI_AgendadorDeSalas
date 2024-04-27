// Função para exibir a lista de salas cadastradas
function exibirSalas() {
    fetch('http://172.20.48.122:3000/salas')
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

// Função para verificar se um ID já existe
function idExists(id, salas) {
    return salas.some(sala => sala.id === id);
}

// Event listener para o formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const capacidadeStr = document.getElementById('capacidade').value; // Obtém a capacidade como string
    const capacidade = parseInt(capacidadeStr); // Converte a capacidade para número inteiro
    const descricao = document.getElementById('descricao').value;

    fetch('http://172.20.48.122:3000/salas')
        .then(response => response.json())
        .then(salas => {
            let id;
            do {
                id = Math.floor(Math.random() * 50) + 1; // Gera um ID aleatório entre 1 e 50
            } while (idExists(id, salas));

            // Criando a nova sala com os campos adicionais vazios
            const novaSala = {
                id,
                nome,
                capacidade,
                descricao,
                professor: "",
                disciplina: "",
                dias_da_semana: [],
                horarioInicio: "",
                horarioFim: "",
                data: ""
            };

            // Envia uma solicitação POST para cadastrar a nova sala
            return fetch('http://172.20.48.122:3000/salas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaSala)
            });
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

// Event listener para o formulário de edição de sala
document.getElementById('form-editar').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do formulário de edição
    const id = document.getElementById('idEdit').value;
    const nome = document.getElementById('nomeEdit').value;
    const capacidade = document.getElementById('capacidadeEdit').value;
    const descricao = document.getElementById('descricaoEdit').value;

    // Cria um objeto com os dados atualizados da sala
    const salaEditada = {
        nome,
        capacidade,
        descricao
    };

    // Envia uma solicitação PUT para editar a sala
    fetch(`http://172.20.48.122:3000/salas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(salaEditada)
    })
    .then(response => response.json())
    .then(() => {
        // Limpa os campos do formulário
        document.getElementById('idEdit').value = '';
        document.getElementById('nomeEdit').value = '';
        document.getElementById('capacidadeEdit').value = '';
        document.getElementById('descricaoEdit').value = '';

        // Atualiza a lista de salas cadastradas na página
        exibirSalas();
    })
    .catch(error => console.error('Erro ao editar sala:', error));
});

// Event listener para o formulário de exclusão de sala
document.getElementById('form-excluir').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o ID da sala a ser excluída
    const idExcluir = document.getElementById('idExcluir').value;

    // Envia uma solicitação DELETE para excluir a sala
    fetch(`http://172.20.48.122:3000/salas/${idExcluir}`, {
        method: 'DELETE'
    })
    .then(() => {
        // Limpa o campo do formulário
        document.getElementById('idExcluir').value = '';

        // Atualiza a lista de salas cadastradas na página
        exibirSalas();
    })
    .catch(error => console.error('Erro ao excluir sala:', error));
});

// Exibe as salas cadastradas ao carregar a página
window.onload = function () {
    exibirSalas();
};
