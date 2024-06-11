const GA: GerenciadorDeAcertos = new GerenciadorDeAcertos();
const areasClicaveis = document.querySelectorAll('map > area');
const ordemCorreta: string[] = ['A', 'H', 'D', 'G', 'C', 'E', 'B', 'F'];
let ordemClicksUsuario: string[] = [];
let numeroProximaOrganela: number = 1;

areasClicaveis.forEach((area) => {
    area?.addEventListener('click', () => {
        let identificacaoOrganela: string = area.classList[0] ?? area.id;

        const nomeDaOrganela: string = nomeOrganela(identificacaoOrganela);
        const letraDaOrganela: string = letraOrganela(nomeDaOrganela);

        if (ordemClicksUsuario.indexOf(letraDaOrganela) === -1) {
            ordemClicksUsuario.push(letraDaOrganela);

            const organelaAtual = document.getElementById('organela_atual')!;
            organelaAtual.innerText = letraParaNomeDaOrganela(
                ordemCorreta[numeroProximaOrganela]
            );

            if (numeroProximaOrganela < ordemCorreta.length - 1)
                numeroProximaOrganela++;

            const listaAreasClicadas = document.getElementById(
                'lista__ordem_organela'
            );
            const itemDaLista = document.createElement('li');
            itemDaLista.innerText = letraDaOrganela;
            listaAreasClicadas?.appendChild(itemDaLista);
        }
    });
});

document.getElementById('botao_enviar')?.addEventListener('click', () => {
    let respostaCertas: number = contarRespostasCertas();
    let pontuacao: number = respostaCertas / ordemCorreta.length;

    GA.verificarResultado(pontuacao);
    GA.areaRespostaCorreta?.appendChild(gerarListaResposta());
    GA.areaRespostaCorreta?.appendChild(gerarImagemResposta());

    document.getElementById('botao_enviar')?.classList.add('invisivel');
});

function nomeOrganela(idOrganela: string): string {
    let nome: string = '!ERRO!';

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

function letraOrganela(nomeOrganela: string): string {
    let letra: string = '!ERRO!';

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

function letraParaNomeDaOrganela(letra: string): string {
    let nome: string = '!ERRO!';

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

function gerarListaResposta(): HTMLElement {
    const listaResposta = document.createElement('ol');
    listaResposta.setAttribute('id', 'lista__resposta');

    for (let i = 0; i < ordemCorreta.length; i++) {
        const item = document.createElement('li');
        item.innerText = ordemCorreta[i];
        listaResposta.appendChild(item);
    }

    return listaResposta;
}

function gerarImagemResposta(): HTMLImageElement {
    const imagemResposta = document.createElement('img');

    imagemResposta.src =
        '../../../public/images/organelas-celulares-resposta.png';
    imagemResposta.alt =
        'Uma célula eucarionte vegetal com suas organelas, com as respostas';

    return imagemResposta;
}

function contarRespostasCertas(): number {
    let n: number = 0;

    for (let i = 0; i < ordemCorreta.length; i++)
        if (ordemClicksUsuario[i] == ordemCorreta[i]) n++;

    return n;
}
