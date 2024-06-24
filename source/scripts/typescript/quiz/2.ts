const locais = document.querySelectorAll('#locais > figure');
const ORDEM_CORRETA = ['planta', 'gazela', 'leao', 'bacterias'];

document.getElementById('botao_enviar')?.addEventListener('click', () => {
    let pontuacao = contarAcertos() / 4;
    const GA = new GerenciadorDeAcertos();
    const GD = new GerenciadorDeDados();

    GD.aumentarPontos(pontuacao);
    GA.verificarResultado(pontuacao);

    GA.areaRespostaCorreta.appendChild(gerarAreaResposta());
    document.getElementById('botao_enviar')?.classList.add('invisivel');
});

document.addEventListener('dragstart', (e) => {
    (e.target as HTMLElement).classList.add('dragging');
});

document.addEventListener('dragend', (e) => {
    (e.target as HTMLElement).classList.remove('dragging');
});

for (let i = 0; i < locais.length; i++) {
    locais[i].addEventListener('dragover', (e) => {
        e.preventDefault();

        const dragging = document.getElementsByClassName('dragging')[0];
        const target = locais[i] as HTMLElement;

        if (target.querySelector('img')) {
            return;
        }

        const applyAfter = pegarNovaPosicao(target, (e as MouseEvent).clientY);

        if (applyAfter) {
            if (applyAfter.children.length < 2) {
                applyAfter.insertAdjacentElement('afterend', dragging);
            }
        } else {
            target.prepend(dragging);
        }
    });
}

function pegarNovaPosicao(local: HTMLElement, posY: number) {
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

function contarAcertos(): number {
    let acertos = 0;

    for (let i = 0; i < locais.length; i++) {
        const item = locais[i].firstChild;
        if ((item as HTMLElement).id == ORDEM_CORRETA[i]) acertos++;
    }

    return acertos;
}

function gerarAreaResposta(): HTMLElement {
    const areaResposta = document.createElement('div');
    areaResposta.setAttribute('class', 'imagens');

    for (let i = 0; i < ORDEM_CORRETA.length; i++) {
        const item = document.createElement('figure');
        const img = document.createElement('img');
        img.src =
            '../../../public/images/cadeia-alimentar/' +
            ORDEM_CORRETA[i] +
            '.png';
        item.appendChild(img);
        areaResposta.appendChild(item);
    }

    return areaResposta;
}
