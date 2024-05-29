const btnEnviar = document.getElementById('botao_enviar');
const avisoResposta = document.getElementById('aviso_resposta');
const CLASSES_RESPOSTA: string[] = ['acertou', 'intermediario', 'errou'];

const areasClicaveis = document.querySelectorAll('map > area');

areasClicaveis.forEach((area) => {
    area?.addEventListener('click', () => {
        let msg = area.classList[0] ? area.classList[0] : area.id;
        alert(msg);
    });
});
