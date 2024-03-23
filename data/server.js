const express = require('express');
const SQLiteDatabase = require('./SQLiteDatabase');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new SQLiteDatabase('database.sqlite');

// Middleware para análise de corpo JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (como index.html)
app.use(express.static('public'));

// Endpoint para inserir um novo usuário
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    db.insertRow('users', { name, age }, (id) => {
        res.json({ id });
    });
});

// Endpoint para atualizar um usuário existente
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    db.editRow(id, 'users', { name, age }, () => {
        res.send('User updated');
    });
});

// Endpoint para buscar usuários por nome
app.get('/users/search', (req, res) => {
    const { term } = req.query;
    db.queryDatabase(term, 'users', 'name', (rows) => {
        res.json(rows);
    });
});

// Endpoint para excluir um usuário
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.deleteRow(id, 'users', () => {
        res.send('User deleted');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
