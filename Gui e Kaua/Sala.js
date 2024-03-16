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
 
  editar(idOuNome, novoNome, novaCapacidade, novaDescricao) {
    // Variável para armazenar a sala encontrada com base no ID ou nome fornecido.
    let salaEncontrada;
  
    // Verifica se o argumento passado é um número (ID) ou uma string (nome).
    if (typeof idOuNome === 'number') {
      // Procura a sala pelo ID.
      salaEncontrada = Sala.SalasCadastradas.find(sala => sala.id === idOuNome);
    } else if (typeof idOuNome === 'string') {
      // Procura a sala pelo nome.
      salaEncontrada = Sala.SalasCadastradas.find(sala => sala.nome === idOuNome);
    }
  
    // Verifica se a sala foi encontrada.
    if (salaEncontrada) {
      // Armazena as informações antigas da sala.
      const idAntigo = salaEncontrada.id;
      const nomeAntigo = salaEncontrada.nome;
      const capacidadeAntigo = salaEncontrada.capacidade;
      const descricaoAntigo = salaEncontrada.descricao;
  
      // Atualiza as informações da sala com os novos valores.
      salaEncontrada.nome = novoNome;
      salaEncontrada.capacidade = novaCapacidade;
      salaEncontrada.descricao = novaDescricao;
  
      // Exibe uma mensagem indicando que a sala foi editada com sucesso.
      console.log(`\n\nSala com ID: ${idAntigo}, nome: "${nomeAntigo}", capacidade: ${capacidadeAntigo} e descrição: "${descricaoAntigo}".\nFoi editada com sucesso para sala com ID: ${salaEncontrada.id}, nome: "${salaEncontrada.nome}", capacidade: ${salaEncontrada.capacidade} e descrição: "${salaEncontrada.descricao}"!\n\n`);
    } else {
      // Se a sala não for encontrada, exibe uma mensagem de erro.
      console.log(`Sala com ID ou nome "${idOuNome}" não encontrada. A edição não pode ser concluída.\n`);
    }
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

let Sala101 = new Sala(1, "Sala 101", 30, "Sala de Moda");

Sala101.cadastrar();

Sala101.listar();

Sala101.editar(1, "Sala 1001", 25, "Sala de TI")

Sala101.listar();

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