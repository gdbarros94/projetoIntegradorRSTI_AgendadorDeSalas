class BootstrapPageBuilder {
    constructor() {}

    // Método para criar o cabeçalho da página
    createHeader(title) {
        document.write(`
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" href="#">${title}</a>
                    </div>
                </nav>
            </header>
        `);
    }

    // Método para criar um card
    createCard(title, content) {
        document.write(`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                </div>
            </div>
        `);
    }

    // Método para criar um loop de cards
    createCardLoop(cards) {
        document.write('<div class="card-deck">');
        cards.forEach(card => {
            this.createCard(card.title, card.content);
        });
        document.write('</div>');
    }

    // Método para criar um menu horizontal
    createHorizontalMenu(items) {
        document.write('<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><ul class="navbar-nav mr-auto">');
        items.forEach(item => {
            document.write(`<li class="nav-item"><a class="nav-link" href="#">${item}</a></li>`);
        });
        document.write('</ul></div></nav>');
    }

    // Método para criar um banner
    createBanner(imageURL) {
        document.write(`<img src="${imageURL}" class="img-fluid" alt="Banner">`);
    }

    // Método para criar um slider
    createSlider(images) {
        document.write('<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators">');
        images.forEach((image, index) => {
            document.write(`<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`);
        });
        document.write('</ol><div class="carousel-inner">');
        images.forEach((image, index) => {
            document.write(`<div class="carousel-item ${index === 0 ? 'active' : ''}"><img class="d-block w-100" src="${image}" alt="Slide"></div>`);
        });
        document.write('</div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>');
    }

    // Método para criar um bloco com imagem à esquerda e texto à direita
    createImageTextBlock(imageURL, title, text) {
        document.write(`
            <div class="row">
                <div class="col-md-6">
                    <img src="${imageURL}" class="img-fluid" alt="Imagem">
                </div>
                <div class="col-md-6">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
            </div>
        `);
    }

    // Método para criar um bloco com uma tabela
    createTable(data) {
        document.write('<table class="table"><thead><tr>');
        for (let key in data[0]) {
            document.write(`<th>${key}</th>`);
        }
        document.write('</tr></thead><tbody>');
        data.forEach(row => {
            document.write('<tr>');
            for (let key in row) {
                document.write(`<td>${row[key]}</td>`);
            }
            document.write('</tr>');
        });
        document.write('</tbody></table>');
    }

    // Método para criar um formulário
    createForm(fields) {
        document.write('<form>');
        fields.forEach(field => {
            document.write(`<div class="form-group"><label for="${field.name}">${field.label}</label><input type="${field.type}" class="form-control" id="${field.name}" placeholder="${field.placeholder}"></div>`);
        });
        document.write('<button type="submit" class="btn btn-primary">Submit</button></form>');
    }

    // Método para criar um rodapé da página
    createFooter(footerText) {
        document.write(`
            <footer class="footer mt-auto py-3 bg-light">
                <div class="container">
                    <span class="text-muted">${footerText}</span>
                </div>
            </footer>
        `);
    }
}
