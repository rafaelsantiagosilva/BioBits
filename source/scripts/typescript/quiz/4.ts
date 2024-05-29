const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA: string[] = ['acertou', 'intermediario', 'errou'];

const areasClicaveis = document.querySelectorAll('map > area');
const listaAreasClicadas = document.getElementById('lista__ordem_organela');

areasClicaveis.forEach((area) => {
    area?.addEventListener('click', () => {
        let identificacaoOrganela = area.classList[0] ?? area.id;
        const nomeDaOrganela = nomeOrganela(identificacaoOrganela);

        const itemExistente = encontraOrganelaNaLista(listaAreasClicadas, nomeDaOrganela);

        if (itemExistente) {
            listaAreasClicadas?.removeChild(itemExistente);
        } else {
            const itemDaLista = document.createElement('li');
            itemDaLista.innerText = nomeDaOrganela;
            listaAreasClicadas?.appendChild(itemDaLista);
        }
    });
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

function encontraOrganelaNaLista(
    lista: HTMLElement | null,
    nomeOrganela: string
): HTMLLIElement | null {
    if (lista?.children.length) {
        for (let i = 0; i < lista.children.length; i++) {
            if (lista.children[i].innerHTML === nomeOrganela) {
                return lista.children[i] as HTMLLIElement;
            }
        }
    }
    return null;
}
