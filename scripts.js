let body = document.querySelector("body")
let logo = document.querySelector(".logo")
let botao = document.querySelector(".botao-carrinho")

function MudarVisual(cor, cortexto, imagem){
    body.style.backgroundColor = cor
    body.style.color = cortexto
    logo.src = imagem
    botao.style.backgroundColor = cortexto
    botao.style.color = cor
}