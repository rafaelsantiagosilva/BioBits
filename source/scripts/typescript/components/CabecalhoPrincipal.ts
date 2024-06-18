class CabecalhoPrincipal extends HTMLElement {
    constructor() {
        super();
        const SHADOW = this.attachShadow({ mode: 'open' });
        SHADOW.appendChild(this.styles());
        SHADOW.appendChild(this.build());
    }

    private build() {
        const componenteRaiz = document.createElement('div');

        const cabecalho = document.createElement('header');
        cabecalho.setAttribute('class', 'header_principal');

        const tituloLogo = document.createElement('div');
        tituloLogo.innerText = 'Biobits';
        tituloLogo.setAttribute('class', 'titulo');

        const imagemLogo = document.createElement('img');
        imagemLogo.setAttribute('src', '../../public/favicon.ico');
        imagemLogo.setAttribute(
            'alt',
            'Um átomo com uma folha no lugar do núcleo'
        );

        const logo = document.createElement('div');
        logo.setAttribute('class', 'logo');
        logo.appendChild(tituloLogo);
        logo.appendChild(imagemLogo);

        const linkLogo = document.createElement('a');
        linkLogo.appendChild(logo);
        linkLogo.href = './home.html';

        // Criar os links de navegação

        const navbarNaoPortrait = document.createElement('nav');

        cabecalho.appendChild(linkLogo);
        cabecalho.appendChild(navbarNaoPortrait);

        const navbarPortrait = document.createElement('nav');

        componenteRaiz.appendChild(cabecalho);
        componenteRaiz.appendChild(navbarPortrait);

        return componenteRaiz;
    }

    private styles() {
        const estilizacao = document.createElement('style');
        estilizacao.textContent = `
             * {
                 list-style: none;
                 text-decoration: none;
                 margin: 0;
                 padding: 0;
                 box-sizing: border-box;
             }
 
             .header_principal {
                 background-color: var(--cor_secundaria);
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                 padding: 1.3rem 3rem;
                 box-shadow: 3px 3px 18px 1px rgba(0, 0, 0, 0.307);
             }
 
             .header_principal > a > .logo {
                 display: flex;
                 align-items: center;
                 gap: 3px;
             }
 
             .header_principal > a > .logo > img {
                 width: 2rem;
             }
 
             .header_principal > a > .logo > .titulo {
                 font-size: 1.5rem;
                 color: var(--cor_primaria);
                 font-weight: 600;
                 letter-spacing: 2px;
             }
 
             .portrait {
                 display: none;
             }
 
             @media screen and (orientation: portrait) {
                 .header_principal {
                     flex-direction: column;
                     align-items: center;
                     text-align: center;
                 }
 
                 .header_principal > a > .logo {
                     justify-content: center;
                     flex-direction: row;
                     align-items: center;
                     flex-wrap: nowrap;
                    }
 
                 .header_principal > a > .logo > .titulo {
                     font-size: 2rem;
                     text-align: center;
                 }
 
                 .header_principal > a > .logo > img {
                     width: 3rem;
                 }
 
                 .nao_portrait {
                     display: none;
                 }
 
                 .portrait {
                     display: block;
                 }
             }
         `;
        return estilizacao;
    }
}

customElements.define('cabecalho-principal', CabecalhoPrincipal);
