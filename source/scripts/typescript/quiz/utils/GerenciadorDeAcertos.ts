class GerenciadorDeAcertos {
    public areaRespostaCorreta = document.getElementById('resposta_correta')!;
    private iconeResposta = document.getElementById('icone__aviso_resposta')!;
    private avisoResposta = document.getElementById('aviso_resposta')!;

    private vitoria(pontuacao: number): void {
        this.iconeResposta.classList.add('bi-check-circle');
        this.avisoResposta?.classList.add(CLASSES_RESPOSTA[0]);
        this.avisoResposta.innerHTML += `Parabéns! Você acertou! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }

    private intermediario(pontuacao: number): void {
        this.iconeResposta.classList.add('bi-exclamation-triangle');
        this.avisoResposta?.classList.add(CLASSES_RESPOSTA[1]);
        this.avisoResposta.innerHTML += `Quase lá! Continue estudando! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }

    private derrota(pontuacao: number): void {
        this.iconeResposta.classList.add('bi-x-circle');
        this.avisoResposta?.classList.add(CLASSES_RESPOSTA[2]);
        this.avisoResposta.innerHTML += `Errou! Melhor estudar mais! (${pontuacao.toFixed(2).replace('.', ',')})`;
    }

    public verificarResultado(pontuacao: number): void {
        document.getElementById('resposta')?.classList.remove('invisivel');
        this.avisoResposta?.classList.remove('invisivel');
        this.iconeResposta?.classList.add('bi');
        if (pontuacao >= 0.7) this.vitoria(pontuacao);
        else if (pontuacao >= 0.5 && pontuacao < 0.75)
            this.intermediario(pontuacao);
        else this.derrota(pontuacao);
        document
            .getElementById('botao_proxima_questao')
            ?.classList.remove('invisivel');
    }
}
