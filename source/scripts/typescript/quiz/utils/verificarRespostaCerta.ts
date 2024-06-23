function verificarRespostaCerta(
    respostaUsuario: string,
    respostaCorreta: string
): void {
    const GA = new GerenciadorDeAcertos();
    if (respostaUsuario == respostaCorreta) GA.verificarResultado(1);
    else GA.verificarResultado(0);
}
