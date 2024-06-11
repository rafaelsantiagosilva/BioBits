"use strict";
const locais = document.querySelectorAll('#locais > figure');
document.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
});
document.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});
for (let i = 0; i < locais.length; i++) {
    locais[i].addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.getElementsByClassName('dragging')[0];
        const target = locais[i];
        if (target.querySelector('img')) {
            return;
        }
        const applyAfter = pegarNovaPosicao(target, e.clientY);
        if (applyAfter) {
            if (applyAfter.children.length < 2) {
                applyAfter.insertAdjacentElement('afterend', dragging);
            }
        }
        else {
            target.prepend(dragging);
        }
    });
}
function pegarNovaPosicao(local, posY) {
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
//# sourceMappingURL=2.js.map