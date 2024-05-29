"use strict";
const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
const areasClicaveis = document.querySelectorAll('map > area');
const listaAreasClicadas = document.getElementById('lista__ordem_organela');
const ordemCorreta = ['A', 'H', 'D', 'G', 'C', 'E', 'B', 'F'];
let ordemClicksUsuario = [];
let respostaCertas = 0;
let pontuacao = 0;
const areaRespostaCorreta = document.getElementsByClassName('resposta')[0];
const iconeResposta = document.getElementById('icone__aviso_resposta');
let respostaRevelada = false;
areasClicaveis.forEach((area) => {
    area === null || area === void 0 ? void 0 : area.addEventListener('click', () => {
        var _a;
        let identificacaoOrganela = (_a = area.classList[0]) !== null && _a !== void 0 ? _a : area.id;
        const nomeDaOrganela = nomeOrganela(identificacaoOrganela);
        const letraDaOrganela = letraOrganela(nomeDaOrganela);
        if (ordemClicksUsuario.indexOf(letraDaOrganela) === -1)
            ordemClicksUsuario.push(letraDaOrganela);
        else
            ordemClicksUsuario = ordemClicksUsuario.filter((letraOrganela) => letraOrganela != letraDaOrganela);
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
    console.log(`Clicks: ${ordemClicksUsuario}\nCorreta: ${ordemCorreta}`);
    respostaCertas = contarRespostasCertas();
    verificarResultado();
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
function letraOrganela(nomeOrganela) {
    let letra = '!ERRO!';
    switch (nomeOrganela.toLowerCase()) {
        case 'núcleo':
            letra = 'A';
            break;
        case 'retículo endoplasmático':
            letra = 'B';
            break;
        case 'cloroplasto':
            letra = 'C';
            break;
        case 'lisossomo':
            letra = 'D';
            break;
        case 'mitocôndria':
            letra = 'E';
            break;
        case 'complexo de golgi':
            letra = 'F';
            break;
        case 'vacúolo':
            letra = 'G';
            break;
        case 'parede celular':
            letra = 'H';
            break;
    }
    return letra;
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
function contarRespostasCertas() {
    let n = 0;
    for (let i = 0; i < ordemCorreta.length; i++)
        if (ordemClicksUsuario[i] == ordemCorreta[i])
            n++;
    return n;
}
function vitoria() {
    avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.classList.add(CLASSES_RESPOSTA[0]);
    avisoResposta.innerHTML += `Parabéns! Você acertou! (${pontuacao.toFixed(2).replace('.', ',')})`;
    iconeResposta.setAttribute('class', 'bi bi-check-circle');
}
function intermediario() {
    avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.classList.add(CLASSES_RESPOSTA[1]);
    avisoResposta.innerHTML += `Quase lá! Continue estudando! (${pontuacao.toFixed(2).replace('.', ',')})`;
    iconeResposta.setAttribute('class', 'bi bi-exclamation-triangle');
}
function derrota() {
    avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.classList.add(CLASSES_RESPOSTA[2]);
    avisoResposta.innerHTML += `Errou! Melhor estudar mais! (${pontuacao.toFixed(2).replace('.', ',')})`;
    iconeResposta.setAttribute('class', 'bi bi-x-circle');
}
function verificarResultado() {
    avisoResposta === null || avisoResposta === void 0 ? void 0 : avisoResposta.classList.remove('invisivel');
    if (pontuacao >= 0.83)
        vitoria();
    else if (pontuacao >= 0.4 && pontuacao < 0.83)
        intermediario();
    else
        derrota();
}
//# sourceMappingURL=4.js.map