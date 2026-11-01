import { BasePage } from './base.page';

export class ProductDetailPage extends BasePage {
  nomeProduto() {
    return cy.get('.product-information h2');
  }

  categoriaProduto() {
    return cy.contains('.product-information p', 'Category');
  }

  precoProduto() {
    return cy.get('.product-information span span');
  }

  disponibilidadeProduto() {
    return cy.contains('.product-information p', 'Availability');
  }

  condicaoProduto() {
    return cy.contains('.product-information p', 'Condition');
  }

  marcaProduto() {
    return cy.contains('.product-information p', 'Brand');
  }

  campoQuantidade() {
    return cy.get('#quantity');
  }

  botaoAdicionarCarrinho() {
    return cy.get('.product-details .cart');
  }

  validarCamposDetalheVisiveis() {
    this.nomeProduto().should('be.visible');
    this.categoriaProduto().should('be.visible');
    this.precoProduto().should('be.visible');
    this.disponibilidadeProduto().should('be.visible');
    this.condicaoProduto().should('be.visible');
    this.marcaProduto().should('be.visible');
  }
}
