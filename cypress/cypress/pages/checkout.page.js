
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  secaoEnderecoEntrega() {
    return cy.get('#address_delivery');
  }

  tabelaRevisaoPedido() {
    return cy.get('#cart_info');
  }

  campoComentario() {
    return cy.get('textarea[name="message"]');
  }

  linkFinalizarPedido() {
    return cy.get('a[href="/payment"]');
  }

  preencherComentarioPedido(texto) {
    this.campoComentario().type(texto);
  }

  clicarFinalizarPedido() {
    this.linkFinalizarPedido().click();
  }

  validarPaginaCheckoutVisivel() {
    this.secaoEnderecoEntrega().should('be.visible');
    this.tabelaRevisaoPedido().should('be.visible');
  }
}
