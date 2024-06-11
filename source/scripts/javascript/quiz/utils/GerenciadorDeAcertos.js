"use strict";
class GerenciadorDeAcertos {
    constructor() {
        this.areaRespostaCorreta = document.getElementById('resposta_correta');
        this.iconeResposta = document.getElementById('icone__aviso_resposta');
        this.avisoResposta = document.getElementById('aviso_resposta');
        this.CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
    }
    vitoria(pontuacao) {
        var _a;
        this.iconeResposta.classList.add('bi-check-circle');
        (_a = this.avisoResposta) === null || _a === void 0 ? void 0 : _a.classList.add(this.CLASSES_RESPOSTA[0]);
        this.avisoResposta.innerHTML += `Parabéns! Você acertou! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }
    intermediario(pontuacao) {
        var _a;
        this.iconeResposta.classList.add('bi-exclamation-triangle');
        (_a = this.avisoResposta) === null || _a === void 0 ? void 0 : _a.classList.add(this.CLASSES_RESPOSTA[1]);
        this.avisoResposta.innerHTML += `Quase lá! Continue estudando! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }
    derrota(pontuacao) {
        var _a;
        this.iconeResposta.classList.add('bi-x-circle');
        (_a = this.avisoResposta) === null || _a === void 0 ? void 0 : _a.classList.add(this.CLASSES_RESPOSTA[2]);
        this.avisoResposta.innerHTML += `Errou! Melhor estudar mais! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }
    verificarResultado(pontuacao) {
        var _a, _b, _c, _d;
        (_a = document.getElementById('resposta')) === null || _a === void 0 ? void 0 : _a.classList.remove('invisivel');
        (_b = this.avisoResposta) === null || _b === void 0 ? void 0 : _b.classList.remove('invisivel');
        (_c = this.iconeResposta) === null || _c === void 0 ? void 0 : _c.classList.add('bi');
        if (pontuacao >= 0.7)
            this.vitoria(pontuacao);
        else if (pontuacao >= 0.5 && pontuacao < 0.75)
            this.intermediario(pontuacao);
        else
            this.derrota(pontuacao);
        (_d = document
            .getElementById('botao_proxima_questao')) === null || _d === void 0 ? void 0 : _d.classList.remove('invisivel');
    }
}
//# sourceMappingURL=GerenciadorDeAcertos.js.map