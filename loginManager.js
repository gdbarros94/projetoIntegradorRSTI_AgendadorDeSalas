class LoginManager {
    constructor(db) {
        this.db = db;
        this.isLoggedIn = false;
        this.userId = null;
    }

    // Método para montar a tela de login em HTML
    renderLoginForm() {
        const form = `
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
                <button type="submit">Login</button>
            </form>
        `;

        document.body.innerHTML = form;

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }

    // Método para lidar com a submissão do formulário de login
    handleLogin(event) {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        // Consultar o banco de dados para validar o login
        this.db.queryDatabase(username, 'usuarios', 'username', (result) => {
            if (result.length > 0 && result[0].password === password) {
                this.isLoggedIn = true;
                this.userId = result[0].id;
                console.log('Login bem-sucedido!');
            } else {
                console.log('Credenciais inválidas. Tente novamente.');
            }
        });
    }

    // Método para verificar se o usuário está logado
    checkLogin() {
        return this.isLoggedIn;
    }

    // Método para iniciar a sessão do usuário
    startSession() {
        // Iniciar a sessão do usuário
        console.log('Sessão iniciada para o usuário:', this.userId);
    }

    // Método para destruir a sessão do usuário
    destroySession() {
        this.isLoggedIn = false;
        this.userId = null;
        console.log('Sessão encerrada.');
    }

    // Método para retornar o ID do usuário atualmente logado
    getUserId() {
        return this.userId;
    }
}

module.exports = LoginManager;
