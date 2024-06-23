"use strict";
var _a;
const alternativas = document.querySelectorAll('.respostas > li');
let alternativaEscolhida = 'x';
(_a = document.getElementById('botao_enviar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    if (alternativaEscolhida != 'x') {
        verificarResposta(alternativaEscolhida, pegarRespostaCerta());
        (_a = document.getElementById('botao_enviar')) === null || _a === void 0 ? void 0 : _a.classList.add('invisivel');
    }
    else {
        alert('Escolha uma alternativa!');
    }
});
for (let i = 0; i < alternativas.length; i++) {
    alternativas[i].addEventListener('click', () => {
        if (alternativaEscolhida != alternativas[i].id) {
            for (let j = 0; j < alternativas.length; j++) {
                if (alternativaEscolhida == alternativas[j].id)
                    alternativas[j].classList.remove('escolhida');
            }
            alternativas[i].classList.add('escolhida');
            alternativaEscolhida = alternativas[i].id;
        }
        else {
            alternativas[i].classList.remove('escolhida');
            alternativaEscolhida = 'x';
        }
    });
}
function pegarRespostaCerta() {
    var _a;
    let numeroDaQuestao = (_a = document
        .querySelector('cabecalho-questao')) === null || _a === void 0 ? void 0 : _a.getAttribute('numeroquestao');
    let respostaCerta = 'ERRO!';
    switch (numeroDaQuestao) {
        case '1':
            respostaCerta = 'c';
            break;
        case '5':
            respostaCerta = 'd';
            break;
        case '6':
            respostaCerta = 'a';
            break;
        default:
            console.error('ERRO: Número errado! Utilize essa função em outra página!');
            break;
    }
    return respostaCerta;
}
function converterLetraEmIndice(letra) {
    let indice = 0;
    switch (letra) {
        case 'a':
            indice = 0;
            break;
        case 'c':
            indice = 2;
            break;
        case 'd':
            indice = 3;
            break;
        default:
            console.error('ERRO: Utilize essa função em outra página!');
            break;
    }
    return indice;
}
function verificarResposta(respostaUsuario, respostaCorreta) {
    const GA = new GerenciadorDeAcertos();
    if (respostaUsuario == respostaCorreta)
        GA.verificarResultado(1);
    else
        GA.verificarResultado(0);
    const resposta = document.createElement('p');
    resposta.innerText = `${respostaCorreta}) ${alternativas[converterLetraEmIndice(respostaCorreta)].innerHTML}`;
    GA.areaRespostaCorreta.appendChild(resposta);
}
//# sourceMappingURL=multiplaEscolha.js.map