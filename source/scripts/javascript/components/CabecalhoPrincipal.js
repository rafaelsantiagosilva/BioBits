"use strict";
class CabecalhoPrincipal extends HTMLElement {
    constructor() {
        super();
        const SHADOW = this.attachShadow({ mode: 'open' });
        SHADOW.appendChild(this.styles());
        SHADOW.appendChild(this.build());
    }
    build() {
        const componenteRaiz = document.createElement('div');
        const cabecalho = document.createElement('header');
        cabecalho.setAttribute('class', 'header_principal');
        const tituloLogo = document.createElement('div');
        tituloLogo.innerText = 'Biobits';
        tituloLogo.setAttribute('class', 'titulo');
        const imagemLogo = document.createElement('img');
        imagemLogo.setAttribute('src', '../../public/favicon.ico');
        imagemLogo.setAttribute('alt', 'Um átomo com uma folha no lugar do núcleo');
        const logo = document.createElement('div');
        logo.setAttribute('class', 'logo');
        logo.appendChild(tituloLogo);
        logo.appendChild(imagemLogo);
        const linkLogo = document.createElement('a');
        linkLogo.appendChild(logo);
        linkLogo.href = './home.html';
        // Criar os links de navegação
        const linksNavbar = this.createLinks();
        const navbarNaoPortrait = document.createElement('nav');
        navbarNaoPortrait.setAttribute('class', 'links nao_portrait');
        navbarNaoPortrait.appendChild(linksNavbar.cloneNode(true));
        cabecalho.appendChild(linkLogo);
        cabecalho.appendChild(navbarNaoPortrait);
        const navbarPortrait = document.createElement('nav');
        navbarPortrait.setAttribute('class', 'links portrait');
        navbarPortrait.appendChild(linksNavbar.cloneNode(true));
        componenteRaiz.appendChild(cabecalho);
        componenteRaiz.appendChild(navbarPortrait);
        return componenteRaiz;
    }
    createLinks() {
        const itemJogar = document.createElement('li');
        const linkJogar = document.createElement('a');
        linkJogar.innerText = 'Jogar';
        linkJogar.href = './jogar.html';
        itemJogar.appendChild(linkJogar);
        const itemSobre = document.createElement('li');
        const linkSobre = document.createElement('a');
        linkSobre.innerText = 'Sobre';
        linkSobre.href = './sobre.html';
        itemSobre.appendChild(linkSobre);
        const itemAutores = document.createElement('li');
        const linkAutores = document.createElement('a');
        linkAutores.innerText = 'Autores';
        linkAutores.href = './autores.html';
        itemAutores.appendChild(linkAutores);
        const linksNavbar = document.createElement('ul');
        linksNavbar.appendChild(itemJogar);
        linksNavbar.appendChild(itemSobre);
        linksNavbar.appendChild(itemAutores);
        return linksNavbar;
    }
    styles() {
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
 
             nav.links > ul {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 justify-content: space-between;
                 gap: 12px;
             }
 
             nav.links a {
                 color: var(--cor_primaria);
                 font-weight: 500;
                 font-size: 1.2rem;
                 text-decoration: none;
                 cursor: pointer;
                 transition: 200ms;
             }
 
             nav.links a:hover {
                 color: var(--cor_primaria_hover);
                 text-decoration: underline;
             }
 
             .portrait {
                 display: none;
             }
 
             @media screen and (orientation: portrait) {
                 .header_principal {
                     flex-direction: column;
                     align-items: center;
                     text-align: center;
                     box-shadow: none;
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
 
                 .links {
                     padding: 0.5rem 1rem;
                     background-color: var(--cor_secundaria_hover);
                     box-shadow: 0 3px 18px -1px rgba(0, 0, 0, 0.482);
                     z-index: -1;
                 }
 
                 nav.links a {
                     font-size: 1.5rem;
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
//# sourceMappingURL=CabecalhoPrincipal.js.map