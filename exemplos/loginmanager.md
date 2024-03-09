```
const MySQLDatabase = require('./MySQLDatabase');
const LoginManager = require('./LoginManager');

// Configurações de conexão com o banco de dados MySQL
const dbConfig = {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
};

// Criar uma instância da classe MySQLDatabase
const db = new MySQLDatabase(dbConfig);

// Criar uma instância da classe LoginManager
const loginManager = new LoginManager(db);

// Renderizar o formulário de login na página HTML
loginManager.renderLoginForm();
```
