class Sala {
  constructor(id, nome, capacidade, descricao) {
    this.id = id;
    this.nome = nome;
    this.capacidade = capacidade;
    this.descricao = descricao;
  }

static SalasCadastradas = [

]




// funcao para cadastrar as salas 
  cadastrar(){
    // Registra uma sala dentro do array SalaCadastradas
    Sala.SalasCadastradas.push(this);
    console.log(`Sala ${this.id} Cadastrada com sucesso!`)
  }
 
  editar(novoNome, novaCapacidade, novaDescricao) {
    this.nome = novoNome
    this.capacidade = novaCapacidade
    this.descricao = novaDescricao 
    console.log(`informações da sala ${this.nome} foi editada para ${this.novoNome} com sucesso!`);
  }

  listar() {
    console.log(`Listando todas as salas:`);
    Sala.SalasCadastradas.forEach(sala => {
      console.log(`ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`);
    });
    // Exibir a lista de salas
  }

  excluir() {
    // Lógica para remover uma sala do sistema
    console.log(`Sala ${this.nome} excluída com sucesso!`);
  }

  buscarPorId() {
    Sala.SalasCadastradas.find(sala => sala.id === id);
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

let Sala101 = new Sala(1, "Sala 101", 30, "Sala de aula para a turma do primeiro ano.");
Sala101.cadastrar();
Sala101.editar(1,"Sala 102", 25, "Sala de reuniões")


/*
Sala101.listar();
Sala101.editar("Sala 102", 25, "Sala de reuniões")
Sala101.listar();
*/

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