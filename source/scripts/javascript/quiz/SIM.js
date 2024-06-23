"use strict";
var _a;
const locais = document.querySelectorAll('#locais > figure');
const ORDEM_CORRETA = ['planta', 'gazela', 'leao', 'bacterias'];
(_a = document.getElementById('botao_enviar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    let pontuacao = contarAcertos() / 4;
    const GA = new GerenciadorDeAcertos();
    GA.verificarResultado(pontuacao);
    GA.areaRespostaCorreta.appendChild(gerarAreaResposta());
    (_a = document.getElementById('botao_enviar')) === null || _a === void 0 ? void 0 : _a.classList.add('invisivel');
});
document.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
});
document.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});
for (let i = 0; i < locais.length; i++) {
    locais[i].addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.getElementsByClassName('dragging')[0];
        const target = locais[i];
        if (target.querySelector('img')) {
            return;
        }
        const applyAfter = pegarNovaPosicao(target, e.clientY);
        if (applyAfter) {
            if (applyAfter.children.length < 2) {
                applyAfter.insertAdjacentElement('afterend', dragging);
            }
        }
        else {
            target.prepend(dragging);
        }
    });
}
function pegarNovaPosicao(local, posY) {
    const icones = local.querySelectorAll('.item:not(.dragging)');
    let resultado = null;
    for (let i = 0; i < icones.length; i++) {
        const box = icones[i].getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
        if (posY >= boxCenterY) {
            resultado = icones[i];
        }
    }
    return resultado;
}
function contarAcertos() {
    let acertos = 0;
    for (let i = 0; i < locais.length; i++) {
        const item = locais[i].firstChild;
        if (item.id == ORDEM_CORRETA[i])
            acertos++;
    }
    return acertos;
}
function gerarAreaResposta() {
    const areaResposta = document.createElement('div');
    areaResposta.setAttribute('class', 'imagens');
    for (let i = 0; i < ORDEM_CORRETA.length; i++) {
        const item = document.createElement('figure');
        const img = document.createElement('img');
        img.src = "../../../public/images/cadeia-alimentar/" + ORDEM_CORRETA[i] + ".png";
        item.appendChild(img);
        areaResposta.appendChild(item);
    }
    return areaResposta;
}
//# sourceMappingURL=2.js.map