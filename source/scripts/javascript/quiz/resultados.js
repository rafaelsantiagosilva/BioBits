"use strict";
var _a, _b;
const titulo = document.querySelector('#mensagem_final h1');
const paragrafo = document.querySelector('#mensagem_final p');
const spanPontos = document.querySelector('#mensagem_final span#pontos');
const spanNomeUsuario = document.querySelector('#mensagem_final span#nomeusuario');
const GDados = new GerenciadorDeDados();
// Adicionando evento de load ao objeto window
window.addEventListener('load', () => {
    let pontuacaoFinal = GDados.pegarPontos();
    let usuario = GDados.pegarNomeUsuario();
    if (pontuacaoFinal >= 6) {
        titulo.innerText = '🥳Parabéns!🥳';
    }
    else if (pontuacaoFinal >= 3) {
        titulo.innerText = '😃Que bom!😃';
    }
    else {
        titulo.innerText = '🙁Que pena!🙁';
    }
    spanPontos.innerText = pontuacaoFinal.toFixed(2).replace('.', ',');
    spanNomeUsuario.innerText = usuario;
});
(_a = document
    .getElementById('botao_jogar_novamente')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    GDados.resetarPontos();
    window.location.href = './1.html';
});
(_b = document
    .getElementById('botao_pagina_inicial')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    GDados.resetar();
    window.location.href = '../home.html';
});
//# sourceMappingURL=resultados.js.map