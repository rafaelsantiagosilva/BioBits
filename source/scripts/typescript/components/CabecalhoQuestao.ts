class CabecalhoQuestao extends HTMLElement {
    constructor() {
        super();
        const SHADOW = this.attachShadow({ mode: 'open' });
        SHADOW.appendChild(this.styles());
        SHADOW.appendChild(this.build());
    }

    private build() {
        const cabecalho = document.createElement('header');
        cabecalho.setAttribute('class', 'header_questao');
        const titulo = document.createElement('div');
        let texto =
            'Questão ' +
            (this.getAttribute('numeroquestao')
                ? this.getAttribute('numeroquestao')
                : '0');
        titulo.innerText = texto;
        titulo.setAttribute('class', 'titulo');

        cabecalho.appendChild(titulo);
        return cabecalho;
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

          .header_questao {
          background-color: var(--cor_secundaria);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.3rem 3rem;
          box-shadow: 3px 3px 18px 1px rgba(0, 0, 0, 0.307);
          }

          .header_questao > .titulo {
          font-size: 1.5rem;
          color: var(--cor_primaria);
          font-weight: 600;
          letter-spacing: 2px;
          }

          .portrait {
          display: none;
          }

          @media screen and (orientation: portrait) {
          .header_questao {
               flex-direction: column;
               align-items: center;
               text-align: center;
          }

          .header_questao > .titulo {
               font-size: 2rem;
               text-align: center;
          }
          }
          `;
        return estilizacao;
    }
}

customElements.define('cabecalho-questao', CabecalhoQuestao);
