function verificarRespostaCerta(
    respostaUsuario: string,
    respostaCorreta: string
): boolean {
    if (respostaUsuario == respostaCorreta) return true;
    else return false;
}
