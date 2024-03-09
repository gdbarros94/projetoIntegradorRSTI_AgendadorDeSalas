```
// Exemplo de uso da classe BootstrapPageBuilder
const pageBuilder = new BootstrapPageBuilder();

// Construindo a página
pageBuilder.createHeader('Meu Site com Bootstrap');
pageBuilder.createBanner('banner.jpg');
pageBuilder.createHorizontalMenu(['Home', 'Sobre', 'Contato']);
pageBuilder.createImageTextBlock('image.jpg', 'Título', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.');
pageBuilder.createCardLoop([
    { title: 'Card 1', content: 'Conteúdo do Card 1' },
    { title: 'Card 2', content: 'Conteúdo do Card 2' },
    { title: 'Card 3', content: 'Conteúdo do Card 3' }
]);
pageBuilder.createTable([
    { Nome: 'João', Idade: 30, Cidade: 'São Paulo' },
    { Nome: 'Maria', Idade: 25, Cidade: 'Rio de Janeiro' },
    { Nome: 'Pedro', Idade: 35, Cidade: 'Belo Horizonte' }
]);
pageBuilder.createForm([
    { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
    { name: 'email', label: 'E-mail', type: 'email', placeholder: 'Seu e-mail' },
    { name: 'message', label: 'Mensagem', type: 'textarea', placeholder: 'Sua mensagem' }
]);
pageBuilder.createFooter('© 2024 Meu Site com Bootstrap');
```
