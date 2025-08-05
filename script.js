const BotaoMostraPalavras = document. querySelector('#botao-palavrachave');

BotaoMostraPalavras.addEventListener('clik,mostraPalavrasChaves');

function mostraPalavrasChaves() {
    const texto = document .querySelector ('#entrada-de-texto') . value;
    const campoResultado = document.querySelector ('#resultado-pralavrachave');
     const palavras = texto.split('')

 campoResultado. textContent = texto;
}