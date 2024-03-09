```
// Importar a classe MySQLDatabase
const MySQLDatabase = require('./MySQLDatabase');

// Configurações de conexão com o banco de dados MySQL
const dbConfig = {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
};

// Criar uma instância da classe MySQLDatabase
const db = new MySQLDatabase(dbConfig);

// Conectar ao banco de dados
db.connect();

// Exemplo de criação de tabela
const tabelaUsuarios = 'usuarios';
const colunasUsuarios = {
    id: 'INT AUTO_INCREMENT PRIMARY KEY',
    nome: 'VARCHAR(255)',
    email: 'VARCHAR(255)',
    idade: 'INT'
};

db.createTable(tabelaUsuarios, colunasUsuarios);

// Exemplo de inserção de dados em uma tabela
const novoUsuario = {
    nome: 'João',
    email: 'joao@example.com',
    idade: 30
};

db.insertRow(tabelaUsuarios, novoUsuario, (result) => {
    console.log('Novo usuário inserido com sucesso:', result);
});

// Exemplo de consulta no banco de dados
const termoConsulta = 'João';
const colunaConsulta = 'nome';

db.queryDatabase(termoConsulta, tabelaUsuarios, colunaConsulta, (result) => {
    console.log('Resultado da consulta:', result);
});

// Exemplo de edição de uma linha na tabela
const idUsuarioParaEditar = 1;
const novosDadosUsuario = {
    nome: 'João da Silva',
    email: 'joao.silva@example.com',
    idade: 35
};

db.editRow(idUsuarioParaEditar, tabelaUsuarios, novosDadosUsuario, (result) => {
    console.log('Linha editada com sucesso:', result);
});

// Exemplo de exclusão de uma linha na tabela
const idUsuarioParaDeletar = 2;

db.deleteRow(idUsuarioParaDeletar, tabelaUsuarios, (result) => {
    console.log('Linha deletada com sucesso:', result);
});

// Desconectar do banco de dados quando não for mais necessário
// db.disconnect();
```
