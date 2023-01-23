/*
Objetivo 1- quando o usuario clicar em "ver trailer", deve-se abrir o modal com o video do trailer.
    - dar um jeito de pegar o elemento que representa o botao na tela usando o js.
    - dar um jeito de identificar quando o usuario clicar no botão.
    - dar um jeito de pegar o elemento da modal no js
    - abrir o modal na tela.
Objetivo 2- quando o usuario clicar no "x" deve-se fechar o modal.
    - dar um jeito de pegar o elemento de fechar modal usando o js.
    - dar um jeito de identificaar quando o usuario clicar no x.
    - fechar modal.
*/
const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", "");

});

