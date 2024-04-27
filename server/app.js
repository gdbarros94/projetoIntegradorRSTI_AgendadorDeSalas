const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');
const banco = require('./banco.json');

// Middleware para parsear o corpo das requisições como JSON  
app.use(express.json());

app.use(cors());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

// Rota para listar todas as salas de aula
app.get('/salas', (req, res) => {
    res.json(banco.salas);
});

// Rota para obter uma sala de aula por ID
app.get('/salas/:id', (req, res) => {
    const salaId = parseInt(req.params.id);
    const sala = banco.salas.find(sala => sala.id === salaId);

    if (!sala) {
        res.status(404).json({ message: 'Sala de aula não encontrada' });
    } else {
        res.json(sala);
    }
});

// Rota para adicionar uma nova sala de aula
app.post('/salas', (req, res) => {
    const novaSala = req.body;
    novaSala.id = banco.salas.length + 1;
    banco.salas.push(novaSala);
    atualizarBanco();
    res.status(201).json(novaSala);
});

// Rota para atualizar uma sala de aula existente
app.put('/salas/:id', (req, res) => {
    const salaId = parseInt(req.params.id);
    const index = banco.salas.findIndex(sala => sala.id === salaId);

    if (index === -1) {
        res.status(404).json({ message: 'Sala de aula não encontrada' });
    } else {
        banco.salas[index] = { ...banco.salas[index], ...req.body };
        atualizarBanco();
        res.json(banco.salas[index]);
    }
});

// Rota para excluir uma sala de aula
app.delete('/salas/:id', (req, res) => {
    const salaId = parseInt(req.params.id);
    const index = banco.salas.findIndex(sala => sala.id === salaId);

    if (index === -1) {
        res.status(404).json({ message: 'Sala de aula não encontrada' });
    } else {
        banco.salas.splice(index, 1);
        atualizarBanco();
        res.json({ message: 'Sala de aula excluída com sucesso' });
    }
});

function atualizarBanco() {
    fs.writeFileSync(__dirname + '/banco.json', JSON.stringify(banco, null, 2));
}

app.listen(port, '172.20.48.122', () => {
    console.log(`Servidor rodando em http://172.20.48.122:${port}`);
});
