const imagemTeorias = document.querySelector('#teoria_img > img')!;
const listaTeoriasClicadas: HTMLOListElement = document.querySelector(
    '#teorias_clicadas > ol'
)!;

const teorias = document.getElementsByClassName('teoria')!;
const clicksUsuario: string[] = [];
const ordemCorretaDasTeorias: string[] = [
    'criacionismo',
    'abiogenese',
    'panspermia',
    'biogenese',
    'quimica',
];

class ProtoImg {
    public src: string = '../../../public/images/teorias-de-origem-da-vida/';
    public alt: string = '';

    constructor(src: string, alt: string) {
        this.src += src + '.png';
        this.alt = alt;
    }
}

const imagens: ProtoImg[] = [
    new ProtoImg('criacionismo', 'Uma mão segurando o mundo'),
    new ProtoImg('abiogenese', 'Uma camisa branca + trigo = rato'),
    new ProtoImg('panspermia', 'Um cometa caindo na Terra'),
    new ProtoImg(
        'biogenese',
        'Três frascos: o primeiro com uma carne e fechado; o segundo com uma carne mas com uma rede invés de tampa, atraindo moscas; o terceiro aberto com moscas dentro e larvas na carne'
    ),
    new ProtoImg(
        'evolucao_quimica',
        'Um vulcão soltando diversos gases em um mar de lava. Aparecem moléculas que apóes a eletrização vinda das nuvens viram aminoácidos, proteínas e coacervados.'
    ),
];

let indiceImagemAtual: number = 0;

document.getElementById('botao_enviar')?.addEventListener('click', () => {
    let pontuacao: number =
        contarAcertosTeorias(clicksUsuario, ordemCorretaDasTeorias) / 5;

    const GA = new GerenciadorDeAcertos();
    GA.areaRespostaCorreta.appendChild(gerarRespostaCorreta());
    GA.verificarResultado(pontuacao);

    const GD = new GerenciadorDeDados();
    GD.aumentarPontos(pontuacao);

    document.getElementById('botao_enviar')?.classList.add('invisivel');
});

for (let i = 0; i < teorias.length; i++) {
    teorias[i].addEventListener('click', () => {
        let teoria: string = teorias[i].innerHTML;

        let itemDaLista = document.createElement('li');
        itemDaLista.innerText = teoria;

        if (!hasChild(listaTeoriasClicadas, itemDaLista)) {
            indiceImagemAtual += indiceImagemAtual < imagens.length - 1 ? 1 : 0;
            imagemTeorias.setAttribute('src', imagens[indiceImagemAtual].src);
            imagemTeorias.setAttribute('alt', imagens[indiceImagemAtual].alt);
            listaTeoriasClicadas.appendChild(itemDaLista);
            clicksUsuario.push(teorias[i].id);
            teorias[i].classList.add('riscado');
        }
    });
}

function hasChild(lista: HTMLOListElement, elemento: HTMLLIElement): boolean {
    const itemsDaLista = lista.children;

    for (let i = 0; i < itemsDaLista.length; i++) {
        if (itemsDaLista[i].innerHTML == elemento.innerHTML) return true;
    }

    return false;
}

function contarAcertosTeorias(
    clicksUsuario: string[],
    correta: string[]
): number {
    let acertos = 0;

    for (let i = 0; i < clicksUsuario.length; i++) {
        if (clicksUsuario[i] == correta[i]) acertos++;
    }

    return acertos;
}

function gerarRespostaCorreta(): HTMLDivElement {
    const respostaCorreta = document.createElement('div');
    respostaCorreta.setAttribute('class', 'teorias_clicadas');
    respostaCorreta.appendChild(gerarListaCorretaDasTeorias());
    return respostaCorreta;
}

function gerarListaCorretaDasTeorias(): HTMLOListElement {
    const listaCorreta = document.createElement('ol');

    for (let i = 0; i < ordemCorretaDasTeorias.length; i++) {
        const itemDaLista = document.createElement('li');

        for (let j = 0; j < teorias.length; j++) {
            if (ordemCorretaDasTeorias[i] == teorias[j].id)
                itemDaLista.innerText = teorias[j].textContent!;
        }

        listaCorreta.appendChild(itemDaLista);
    }

    return listaCorreta;
}
