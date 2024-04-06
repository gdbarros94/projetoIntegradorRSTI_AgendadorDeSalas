class Sala {
  constructor(id, nome, capacidade, descricao) {
    this.id = id;
    this.nome = nome;
    this.capacidade = capacidade;
    this.descricao = descricao;

  }


static SalasCadastradas = []


// funcao para cadastrar as salas 
 cadastrar(){
  // Registra uma sala dentro do array SalaCadastradas
  Sala.SalasCadastradas.push(this);
  console.log(`Sala ${this.id} Cadastrada com sucesso!`);

  let data = new Date()
  let horaInicio = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  let horaFim = `19:00:10`

  const dataString = data.toString();
  const horaInicioString = horaInicio.toString();
  const horaFimString = horaFim.toString();

  const dataCadastro = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  
  console.log(`Data do cadastro: ${dataCadastro}`);
  console.log(`Hora de início: ${horaInicio}`);
  console.log(`Hora de fim: ${horaFim}`);
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
    console.log("Listando todas as salas cadastradas:");
    Sala.SalasCadastradas.forEach(sala => {
      console.log(`ID: ${sala.id}, Nome: ${sala.nome}, Capacidade: ${sala.capacidade}, Descrição: ${sala.descricao}`);
    });
  }

  // Método para excluir uma sala pelo ID.
  excluir(id) {
    const salaEncontrada = Sala.SalasCadastradas.findIndex(sala => sala.id === id);
    
    if (salaEncontrada !== -1) {
      Sala.SalasCadastradas.splice(salaEncontrada, 1);
      console.log(`Sala com ID ${id} excluída com sucesso!`);
    } else {
      console.log(`Sala com ID ${id} não encontrada. Erro ao excluir!`);
    }
  }

  // Método para buscar uma sala pelo ID.
  buscarPorId(id) {
    const salaEncontrada = Sala.SalasCadastradas.findIndex(sala => sala.id === id);

    if (salaEncontrada !== -1) {
      console.log(`Sala com ID ${id} encontrada.`);
    } else {
      console.log(`Sala com ID ${id} não encontrada`);
    }
  }

  verificarDisponibilidade(data, horaInicio, horaFim) {
    // Lógica para verificar se a sala está disponível em um determinado dia e horário
    const Disponivel = true; // Implementar a lógica de verificação


    if (Disponivel) {
      console.log(`Sala ${this.nome} disponível em ${data} das ${horaInicio} às ${horaFim}.`);
    } else {
      console.log(`Sala ${this.nome} indisponível em ${data} das ${horaInicio} às ${horaFim}.`);
    }
  }
  
}

// Criando instâncias de salas
let Sala101 = new Sala(1, "Sala 101", 30, "Sala de Moda");
let Sala102 = new Sala(2, "Sala 102", 10, "Sala de TI");
let Sala103 = new Sala(3, "Sala 103", 15, "Sala de Costura");

// Testes
Sala101.cadastrar();
Sala102.cadastrar();
Sala103.cadastrar();

Sala101.verificarDisponibilidade('27/03', '10:00:00', '12:00:00');
