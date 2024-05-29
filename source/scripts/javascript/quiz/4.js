"use strict";
const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
const areasClicaveis = document.querySelectorAll('map > area');
const listaAreasClicadas = document.getElementById('lista__ordem_organela');
const areaRespostaCorreta = document.getElementsByClassName('resposta')[0];
let respostaRevelada = false;
areasClicaveis.forEach((area) => {
    area === null || area === void 0 ? void 0 : area.addEventListener('click', () => {
        var _a;
        let identificacaoOrganela = (_a = area.classList[0]) !== null && _a !== void 0 ? _a : area.id;
        const nomeDaOrganela = nomeOrganela(identificacaoOrganela);
        const itemExistente = encontraOrganelaNaLista(listaAreasClicadas, nomeDaOrganela);
        if (itemExistente) {
            listaAreasClicadas === null || listaAreasClicadas === void 0 ? void 0 : listaAreasClicadas.removeChild(itemExistente);
        }
        else {
            const itemDaLista = document.createElement('li');
            itemDaLista.innerText = nomeDaOrganela;
            listaAreasClicadas === null || listaAreasClicadas === void 0 ? void 0 : listaAreasClicadas.appendChild(itemDaLista);
        }
    });
});
btnEnviar === null || btnEnviar === void 0 ? void 0 : btnEnviar.addEventListener('click', () => {
    document
        .getElementsByClassName('resposta')[0]
        .classList.remove('invisivel');
    const areaRespostaCorreta = document.getElementsByClassName('resposta_correta')[0];
    if (!respostaRevelada) {
        areaRespostaCorreta === null || areaRespostaCorreta === void 0 ? void 0 : areaRespostaCorreta.appendChild(gerarListaResposta());
        areaRespostaCorreta === null || areaRespostaCorreta === void 0 ? void 0 : areaRespostaCorreta.appendChild(gerarImagemResposta());
        respostaRevelada = true;
    }
});
function nomeOrganela(idOrganela) {
    let nome = '!ERRO!';
    switch (idOrganela) {
        case 'organela1':
            nome = 'Núcleo';
            break;
        case 'organela2':
            nome = 'Retículo Endoplasmático';
            break;
        case 'organela3':
            nome = 'Cloroplasto';
            break;
        case 'organela4':
            nome = 'Lisossomo';
            break;
        case 'organela5':
            nome = 'Mitocôndria';
            break;
        case 'organela6':
            nome = 'Complexo de Golgi';
            break;
        case 'organela7':
            nome = 'Vacúolo';
            break;
        case 'organela8':
            nome = 'Parede Celular';
            break;
    }
    return nome;
}
function encontraOrganelaNaLista(lista, nomeOrganela) {
    if (lista === null || lista === void 0 ? void 0 : lista.children.length) {
        for (let i = 0; i < lista.children.length; i++) {
            if (lista.children[i].innerHTML === nomeOrganela) {
                return lista.children[i];
            }
        }
    }
    return null;
}
function gerarListaResposta() {
    const listaResposta = document.createElement('ol');
    listaResposta.setAttribute('id', 'lista__resposta');
    const ordemCorreta = ['A', 'H', 'D', 'G', 'C', 'E', 'B', 'F'];
    for (let i = 0; i < ordemCorreta.length; i++) {
        const item = document.createElement('li');
        item.innerText = ordemCorreta[i];
        listaResposta.appendChild(item);
    }
    return listaResposta;
}
function gerarImagemResposta() {
    const imagemResposta = document.createElement('img');
    imagemResposta.src =
        '../../../../public/images/organelas-celulares-resposta.png';
    imagemResposta.alt =
        'Uma célula eucarionte vegetal com suas organelas, com as respostas';
    return imagemResposta;
}
//# sourceMappingURL=4.js.map