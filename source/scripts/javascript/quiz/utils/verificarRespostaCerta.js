"use strict";
function verificarRespostaCerta(respostaUsuario, respostaCorreta) {
    const GA = new GerenciadorDeAcertos();
    if (respostaUsuario == respostaCorreta)
        GA.verificarResultado(1);
    else
        GA.verificarResultado(0);
}
//# sourceMappingURL=verificarRespostaCerta.js.map