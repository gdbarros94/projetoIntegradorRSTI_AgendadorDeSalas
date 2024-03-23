const SQLiteDatabase = require('./SQLiteDatabase');

// Instanciando o banco de dados SQLite
const db = new SQLiteDatabase('database.sqlite');

// Criando uma tabela
db.createTable('users', {
    id: 'INTEGER PRIMARY KEY',
    name: 'TEXT',
    age: 'INTEGER'
});

// Inserindo uma linha na tabela
db.insertRow('users', { name: 'Alice', age: 30 }, (id) => {
    console.log(`Linha inserida com ID ${id}`);
});

// Atualizando uma linha na tabela
db.editRow(1, 'users', { age: 31 }, () => {
    console.log('Linha atualizada');
});

// Deletando uma linha na tabela
db.deleteRow(1, 'users', () => {
    console.log('Linha deletada');
});

// Consultando o banco de dados
db.queryDatabase('Alice', 'users', 'name', (rows) => {
    console.log('Resultado da consulta:', rows);
});

// Fechando a conexão com o banco de dados
db.close();
