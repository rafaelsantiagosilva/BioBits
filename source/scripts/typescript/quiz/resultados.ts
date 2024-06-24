const titulo: HTMLElement = document.querySelector('#mensagem_final h1')!;
const paragrafo: HTMLElement = document.querySelector('#mensagem_final p')!;
const spanPontos: HTMLElement = document.querySelector(
    '#mensagem_final span#pontos'
)!;
const spanNomeUsuario: HTMLElement = document.querySelector(
    '#mensagem_final span#nomeusuario'
)!;

const GDados = new GerenciadorDeDados();

// Adicionando evento de load ao objeto window
window.addEventListener('load', () => {
    let pontuacaoFinal = GDados.pegarPontos();
    let usuario = GDados.pegarNomeUsuario();

    if (pontuacaoFinal >= 6) {
        titulo.innerText = '🥳Parabéns!🥳';
    } else if (pontuacaoFinal >= 3) {
        titulo.innerText = '😃Que bom!😃';
    } else {
        titulo.innerText = '🙁Que pena!🙁';
    }

    spanPontos.innerText = pontuacaoFinal.toFixed(2).replace('.', ',');
    spanNomeUsuario.innerText = usuario;
});

document
    .getElementById('botao_jogar_novamente')
    ?.addEventListener('click', () => {
        GDados.resetarPontos();
        window.location.href = './1.html';
    });

document
    .getElementById('botao_pagina_inicial')
    ?.addEventListener('click', () => {
        GDados.resetar();
        window.location.href = '../home.html';
    });
