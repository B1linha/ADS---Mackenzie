// Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.
// Paisagens tem no mínimo: 1080 x 608

function ePaisagem(largura, altura) {
    if (largura >= 1080 && altura >= 608) {
        console.log(true)
        return;
    } else {
    }   console.log(false)
}
ePaisagem(1080, 608)

// Método do professor

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1920, 1080))