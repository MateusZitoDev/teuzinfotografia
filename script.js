let imagemAtual = 1;
const totalImagens = 7;

function anterior() {
    if (imagemAtual > 1) {
        imagemAtual--;
    } else {
        imagemAtual = totalImagens;
    }
    atualizarImagem()
}

function proximo() {
    if (imagemAtual < totalImagens) {
        imagemAtual++;
    } else {
        imagemAtual = 1;
    }
    atualizarImagem();
}

function atualizarImagem() {
    for (let i = 1; i <= totalImagens; i++) {
        const imagem =
document.getElementById('imagem' + i);
        if (i === imagemAtual) {
            imagem.style.display = 'block';
        } else {
            imagem.style.display = 'none';
        }  
    }
}