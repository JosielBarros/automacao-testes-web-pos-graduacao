import { BasePage } from './base.page';

export class CartPage extends BasePage {
  tabelaCarrinho() {
    return cy.get('#cart_info_table');
  }

  linhasCarrinho() {
    return cy.get('#cart_info_table tbody tr');
  }

  botaoProsseguirCheckout() {
    return cy.get('a.check_out');
  }

  clicarProsseguirCheckout() {
    this.botaoProsseguirCheckout().click();
  }

  validarQuantidadeItensCarrinho(quantidade) {
    this.linhasCarrinho().should('have.length', quantidade);
  }
}
