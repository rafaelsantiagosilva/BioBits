const GD = new GerenciadorDeDados();

document.getElementById('botao_enviar')?.addEventListener('click', () => {
    const input: HTMLInputElement = document.getElementById(
        'nomejogador'
    ) as HTMLInputElement;

    if (input.value.trim()) {
        GD.mudarNomeUsuario(input?.value);
        GD.mudarPontos('0');
        window.location.assign('quiz/1.html');
    } else {
        alert('Digite seu nome!');
    }
});
