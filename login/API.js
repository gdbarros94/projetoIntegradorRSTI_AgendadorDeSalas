const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');
const banco = require('./banco.json');

app.use(express.json());
app.use(cors());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

// Rota para fazer login
app.get('/login', (req, res) => {
    const { email, senha } = req.query;

    // Verifica se o email e senha correspondem a algum registro no JSON
    const usuario = banco.find(user => user.email === email && user.senha === senha);
    
    if (usuario) {
        // Usuário autorizado
        res.status(200).json({ message: 'Login bem-sucedido', usuario: usuario });
    } else {
        // Usuário não encontrado ou senha incorreta
        res.status(401).json({ message: 'Email ou senha incorretos' });
    }
});

// Rota para registrar um novo usuário
app.post('/registrar', (req, res) => {
    try {
        const { nome, email, senha, cargo } = req.body;

        // Verificar se todos os campos necessários foram fornecidos
        if (!nome || !email || !senha || !cargo) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        // Verificar se o email já está sendo usado por outro usuário
        const usuarioExistente = banco.find(u => u.email === email);
        if (usuarioExistente) {
            return res.status(400).json({ message: 'Este email já está em uso' });
        }

        // Simular o registro do usuário (você pode substituir por sua lógica de registro real)
        const novoUsuario = {
            id: banco.length + 1,
            nome,
            email,
            senha,
            cargo
        };
        banco.push(novoUsuario);
        atualizarBanco();

        res.status(201).json({ message: 'Usuário registrado com sucesso', usuario: novoUsuario });
    } catch (error) {
        console.error('Erro ao registrar novo usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao registrar novo usuário' });
    }
});


// Rota para solicitar a recuperação de senha
app.post('/recuperar-senha', (req, res) => {
    const { email } = req.body;

    // Aqui você pode adicionar a lógica para enviar instruções de redefinição de senha para o email fornecido
    // Por exemplo, você pode fazer uma solicitação para um serviço de email

    console.log("Instruções de redefinição de senha enviadas para:", email);
    res.status(200).json({ message: 'Instruções de redefinição de senha enviadas para o email fornecido' });
});

function atualizarBanco() {
    fs.writeFileSync(__dirname + '/banco.json', JSON.stringify(banco, null, 2));
}

app.listen(port, '172.20.48.182', () => {
    console.log(`Servidor rodando em http://172.20.48.182:${port}`);
});
