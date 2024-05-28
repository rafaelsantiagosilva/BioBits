"use strict";
const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
let classeAtual = 0;
btnEnviar === null || btnEnviar === void 0 ? void 0 : btnEnviar.addEventListener('click', () => {
    avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.setAttribute('class', `${avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.classList[0]} ${CLASSES_RESPOSTA[classeAtual]}`);
    classeAtual = classeAtual == 2 ? 0 : classeAtual + 1;
});
//# sourceMappingURL=4.js.map