// ClassSala.js

class Sala {
    constructor(id, nome, capacidade, descricao = "") {
        this.id = id;
        this.nome = nome;
        this.capacidade = capacidade;
        this.descricao = descricao;
    }

    static salasCadastradas = [];

    cadastrar() {
        Sala.salasCadastradas.push(this);
        console.log(`Sala "${this.nome}" cadastrada com sucesso.`);
    }

    editar(novaSala) {
        const index = Sala.salasCadastradas.findIndex(sala => sala.id === this.id);
        if (index !== -1) {
            Sala.salasCadastradas[index] = novaSala;
            console.log(`Sala com ID ${this.id} atualizada.`);
        } else {
            console.log(`Sala com ID ${this.id} não encontrada.`);
        }
    }

    excluir() {
        const index = Sala.salasCadastradas.findIndex(sala => sala.id === this.id);
        if (index !== -1) {
            Sala.salasCadastradas.splice(index, 1);
            console.log(`Sala com ID ${this.id} excluída.`);
        } else {
            console.log(`Sala com ID ${this.id} não encontrada.`);
        }
    }

    static listar() {
        console.log("Lista de salas cadastradas:");
        Sala.salasCadastradas.forEach(sala => {
            console.log(`ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`);
        });
    }

    static buscarPorId(id) {
        const sala = Sala.salasCadastradas.find(sala => sala.id === id);
        if (sala) {
            console.log(`Sala encontrada - ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`);
            return sala;
        } else {
            console.log(`Sala com ID ${id} não encontrada.`);
            return null;
        }
    }

    static verificarDisponibilidade(data, horaInicio, horaFim) {
        // Lógica para verificar disponibilidade não implementada neste exemplo
        console.log(`Verificando disponibilidade para data ${data}, das ${horaInicio} às ${horaFim}.`);
    }
}