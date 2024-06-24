"use strict";
class GerenciadorDeDados {
    constructor() {
        this.tagUsuario = 'username';
        this.tagPontos = 'pontos';
    }
    pegarNomeUsuario() {
        return localStorage.getItem(this.tagUsuario);
    }
    pegarPontos() {
        var _a;
        return Number((_a = localStorage.getItem(this.tagPontos)) === null || _a === void 0 ? void 0 : _a.replace(',', '.'));
    }
    mudarNomeUsuario(novoNome) {
        localStorage.setItem(this.tagUsuario, novoNome);
    }
    mudarPontos(novosPontos) {
        localStorage.setItem(this.tagPontos, novosPontos);
    }
    aumentarPontos(aumento) {
        var _a;
        let atuais = Number((_a = localStorage.getItem(this.tagPontos)) === null || _a === void 0 ? void 0 : _a.replace(',', '.'));
        atuais += aumento;
        localStorage.setItem(this.tagPontos, atuais.toFixed(2).replace('.', ','));
    }
    resetarPontos() {
        localStorage.setItem(this.tagPontos, '0');
    }
    resetar() {
        localStorage.setItem(this.tagUsuario, 'Anônimo');
        localStorage.setItem(this.tagPontos, '0');
    }
}
//# sourceMappingURL=GerenciadorDeDados.js.map