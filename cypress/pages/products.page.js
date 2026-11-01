import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  tituloTodosProdutos() {
    return cy.contains('.title', 'All Products');
  }

  tituloProdutosBuscados() {
    return cy.contains('.title', 'Searched Products');
  }

  campoBusca() {
    return cy.get('#search_product');
  }

  botaoBuscar() {
    return cy.get('#submit_search');
  }

  itensProduto() {
    return cy.get('.features_items .product-image-wrapper');
  }

  linkVerProdutoPorIndice(indice) {
    return this.itensProduto().eq(indice).find('.choose a');
  }

  botaoAdicionarCarrinhoPorIndice(indice) {
    return this.itensProduto().eq(indice).find('.productinfo .add-to-cart').first();
  }

  modalCarrinho() {
    return cy.get('#cartModal');
  }

  botaoContinuarComprando() {
    return this.modalCarrinho().find('button').contains('Continue Shopping');
  }

  buscarProduto(termo) {
    this.campoBusca().clear().type(termo);
    this.botaoBuscar().click();
  }

  clicarVerProdutoPorIndice(indice) {
    this.linkVerProdutoPorIndice(indice).click();
  }

  adicionarProdutoAoCarrinhoPorIndice(indice) {
    this.botaoAdicionarCarrinhoPorIndice(indice).click({ force: true });
    this.modalCarrinho().should('be.visible');
  }

  continuarComprando() {
    this.botaoContinuarComprando().click();
  }

  adicionarVariosProdutosAoCarrinho(indices) {
    indices.forEach((indice) => {
      this.adicionarProdutoAoCarrinhoPorIndice(indice);
      this.continuarComprando();
    });
  }
}
