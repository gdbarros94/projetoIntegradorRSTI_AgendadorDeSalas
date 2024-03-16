class Sala {
  constructor(id, nome, capacidade, descricao) {
    this.id = id;
    this.nome = nome;
    this.capacidade = capacidade;
    this.descricao = descricao;
  }

  // **Métodos**

 
  editar() {
    // Lógica para atualizar as informações de uma sala existente
    console.log(`Sala ${this.nome} atualizada com sucesso!`);
  }

  excluir() {
    // Lógica para remover uma sala do sistema
    console.log(`Sala ${this.nome} excluída com sucesso!`);
  }

  listar() {
    // Lógica para retornar a lista de todas as salas cadastradas
    console.log(`Listando todas as salas:`);
    // Exibir a lista de salas
  }

  buscarPorId() {
    // Lógica para retornar a sala com o ID especificado
    console.log(`Sala com ID ${this.id} encontrada:`);
    // Exibir as informações da sala
  }

  verificarDisponibilidade(data, horaInicio, horaFim) {
    // Lógica para verificar se a sala está disponível em um determinado dia e horário
    const isDisponivel = true; // Implementar a lógica de verificação
    if (isDisponivel) {
      console.log(`Sala ${this.nome} disponível em ${data} das ${horaInicio} às ${horaFim}.`);
    } else {
      console.log(`Sala ${this.nome} indisponível em ${data} das ${horaInicio} às ${horaFim}.`);
    }
  }
}



/*
// Exemplo de uso
const sala1 = new Sala(1, "Sala 101", 30, "Sala de aula principal");
sala1.cadastrar();

const sala2 = new Sala(2, "Laboratório de informática", 20, "Equipada com 20 computadores");
sala2.cadastrar();

sala1.listar();
sala1.buscarPorId();
sala1.verificarDisponibilidade("2024-03-17", "10:00", "12:00");

sala2.editar();
sala2.excluir();
*/