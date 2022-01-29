let pagina = document.getElementById('body');
pagina.addEventListener('load', carregar());

function carregar() {

    let inserirHora = document.getElementById('horario');
    let inserirImagem = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    inserirHora.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`;
    if (hora >= 0 && hora < 12) {
        // Bom dia
        inserirImagem.src = './Imagens/imagem-manha.jpg';
        document.body.style.background = '#054f77';
    } else if (hora > 12 && hora < 18) {
        // Boa tarde
        inserirImagem.src = './Imagens/imagem-tarde.jpg';
        document.body.style.background = 'orange';
    } else {
        // Boa noite
        inserirImagem.src = './Imagens/imagem-noite.jpg'
        document.body.style.background = 'black';
        inserirHora.style.color = 'white';
        inserirHora.style.background = '#054f77';
    }
}    