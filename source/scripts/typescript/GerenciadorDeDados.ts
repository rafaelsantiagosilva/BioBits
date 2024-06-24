class GerenciadorDeDados {
    private tagUsuario: string = 'username';
    private tagPontos: string = 'pontos';

    public pegarNomeUsuario(): string {
        return localStorage.getItem(this.tagUsuario)!;
    }

    public pegarPontos(): number {
        return Number(localStorage.getItem(this.tagPontos)?.replace(',', '.'))!;
    }

    public mudarNomeUsuario(novoNome: string) {
        localStorage.setItem(this.tagUsuario, novoNome);
    }

    public mudarPontos(novosPontos: string) {
        localStorage.setItem(this.tagPontos, novosPontos);
    }

    public aumentarPontos(aumento: number) {
        let atuais = Number(
            localStorage.getItem(this.tagPontos)?.replace(',', '.')
        );
        atuais += aumento;
        localStorage.setItem(
            this.tagPontos,
            atuais.toFixed(2).replace('.', ',')
        );
    }

    public resetarPontos() {
        localStorage.setItem(this.tagPontos, '0');
    }

    public resetar() {
        localStorage.setItem(this.tagUsuario, 'Anônimo');
        localStorage.setItem(this.tagPontos, '0');
    }
}
