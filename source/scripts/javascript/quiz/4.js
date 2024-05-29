"use strict";
const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
const areasClicaveis = document.querySelectorAll('map > area');
areasClicaveis.forEach((area) => {
    area === null || area === void 0 ? void 0 : area.addEventListener('click', () => {
        let msg = area.classList[0] ? area.classList[0] : area.id;
        alert(msg);
    });
});
//# sourceMappingURL=4.js.map