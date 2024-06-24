"use strict";
var _a;
const GD = new GerenciadorDeDados();
(_a = document.getElementById('botao_enviar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const input = document.getElementById('nomejogador');
    if (input.value.trim()) {
        GD.mudarNomeUsuario(input === null || input === void 0 ? void 0 : input.value);
        GD.mudarPontos('0');
        window.location.assign('quiz/1.html');
    }
    else {
        alert('Digite seu nome!');
    }
});
//# sourceMappingURL=jogar.js.map