"use strict";
class RodapePrincipal extends HTMLElement {
    constructor() {
        super();
        const SHADOW = this.attachShadow({ mode: 'open' });
        SHADOW.appendChild(this.styles());
        SHADOW.appendChild(this.build());
    }
    build() {
        const rodape = document.createElement('footer');
        rodape.setAttribute('class', 'footer_principal');
        rodape.appendChild(this.atomo());
        const texto = document.createTextNode('2024');
        rodape.appendChild(texto);
        rodape.appendChild(this.atomo());
        return rodape;
    }
    atomo() {
        const imagemAtomo = document.createElement('img');
        imagemAtomo.setAttribute('src', '../../../../public/favicon.ico');
        imagemAtomo.setAttribute('alt', 'Um átomo com uma folha no lugar do núcleo');
        return imagemAtomo;
    }
    styles() {
        const estilizacao = document.createElement('style');
        estilizacao.textContent = `
          .footer_principal {
               display: flex;
               align-items: center;
               justify-content: center;
               gap: 2rem;
               padding: 2rem;
               background-color: rgb(198, 198, 198);
               color: #fff;
               font-size: 2rem;
               font-weight: 800;
               box-shadow: -6px 3px 18px 1px rgba(0, 0, 0, 0.362);
          }
          
          .footer_principal > img {
               width: 5%;
          }

          @media screen and (orientation: portrait) {
               .footer_principal > img {
                    width: 20%;
               }
          }
        `;
        return estilizacao;
    }
}
customElements.define('rodape-principal', RodapePrincipal);
//# sourceMappingURL=RodapePrincipal.js.map