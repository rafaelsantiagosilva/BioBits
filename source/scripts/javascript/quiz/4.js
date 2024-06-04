"use strict";
const GA = new GerenciadorDeAcertos();
const btnEnviar = document.getElementById('botao_enviar');
const CLASSES_RESPOSTA = ['acertou', 'intermediario', 'errou'];
const areasClicaveis = document.querySelectorAll('map > area');
const ordemCorreta = ['A', 'H', 'D', 'G', 'C', 'E', 'B', 'F'];
let ordemClicksUsuario = [];
let numeroProximaOrganela = 1;
areasClicaveis.forEach((area) => {
    area === null || area === void 0 ? void 0 : area.addEventListener('click', () => {
        var _a;
        let identificacaoOrganela = (_a = area.classList[0]) !== null && _a !== void 0 ? _a : area.id;
        const nomeDaOrganela = nomeOrganela(identificacaoOrganela);
        const letraDaOrganela = letraOrganela(nomeDaOrganela);
        if (ordemClicksUsuario.indexOf(letraDaOrganela) === -1) {
            ordemClicksUsuario.push(letraDaOrganela);
            const organelaAtual = document.getElementById('organela_atual');
            organelaAtual.innerText = letraParaNomeDaOrganela(ordemCorreta[numeroProximaOrganela]);
            if (numeroProximaOrganela < ordemCorreta.length - 1)
                numeroProximaOrganela++;
            const listaAreasClicadas = document.getElementById('lista__ordem_organela');
            const itemDaLista = document.createElement('li');
            itemDaLista.innerText = letraDaOrganela;
            listaAreasClicadas === null || listaAreasClicadas === void 0 ? void 0 : listaAreasClicadas.appendChild(itemDaLista);
        }
    });
});
btnEnviar === null || btnEnviar === void 0 ? void 0 : btnEnviar.addEventListener('click', () => {
    var _a, _b;
    let respostaCertas = contarRespostasCertas();
    let pontuacao = respostaCertas / ordemCorreta.length;
    GA.verificarResultado(pontuacao);
    (_a = GA.areaRespostaCorreta) === null || _a === void 0 ? void 0 : _a.appendChild(gerarListaResposta());
    (_b = GA.areaRespostaCorreta) === null || _b === void 0 ? void 0 : _b.appendChild(gerarImagemResposta());
    btnEnviar.classList.add('invisivel');
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
function letraParaNomeDaOrganela(letra) {
    let nome = '!ERRO!';
    switch (letra) {
        case 'A':
            nome = 'Núcleo';
            break;
        case 'B':
            nome = 'Retículo Endoplasmático';
            break;
        case 'C':
            nome = 'Cloroplasto';
            break;
        case 'D':
            nome = 'Lisossomo';
            break;
        case 'E':
            nome = 'Mitocôndria';
            break;
        case 'F':
            nome = 'Complexo de Golgi';
            break;
        case 'G':
            nome = 'Vacúolo';
            break;
        case 'H':
            nome = 'Parede Celular';
            break;
    }
    return nome;
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
        '../../../public/images/organelas-celulares-resposta.png';
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
//# sourceMappingURL=4.js.map