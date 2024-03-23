import classTurma from ('./classTurma.js')

// Exemplo de uso da classe GerenciadorTurmas

// Criando um objeto para armazenar as turmas
const turmas = {};

// Instanciando o gerenciador de turmas
const gerenciador = new GerenciadorTurmas(turmas);

// Cadastrando uma turma
const uidTurma1 = gerenciador.cadastrar('Turma A', 'Matemática', 'Prof. João', ['segunda', 'quarta'], '08:00', '10:00');
console.log('Turma cadastrada:', gerenciador.buscarPorId(uidTurma1));

// Editando uma turma
gerenciador.editar(uidTurma1, 'Turma A (Atualizada)', 'Matemática Avançada', 'Prof. Carlos', ['segunda', 'quarta', 'sexta'], '08:30', '10:30');
console.log('Turma atualizada:', gerenciador.buscarPorId(uidTurma1));

// Excluindo uma turma
gerenciador.excluir(uidTurma1);
console.log('Turma excluída:', gerenciador.listar());

// Cadastrando outra turma
const uidTurma2 = gerenciador.cadastrar('Turma B', 'Física', 'Prof. Maria', ['terça', 'quinta'], '09:00', '11:00');
console.log('Nova turma cadastrada:', gerenciador.buscarPorId(uidTurma2));
