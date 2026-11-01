import { BasePage } from './base.page';

export class HomePage extends BasePage {
  linkCadastroLogin() {
    return cy.get('a[href="/login"]');
  }

  linkSair() {
    return cy.get('a[href="/logout"]');
  }

  linkExcluirConta() {
    return cy.get('a[href="/delete_account"]');
  }

  linkProdutos() {
    return cy.get('a[href="/products"]');
  }

  linkCarrinho() {
    return cy.get('.navbar-nav a[href="/view_cart"]');
  }

  textoLogadoComo() {
    return cy.contains('a', 'Logged in as');
  }

  produtosEmDestaque() {
    return cy.get('.features_items .product-image-wrapper');
  }

  campoEmailInscricao() {
    return cy.get('#susbscribe_email');
  }

  botaoInscrever() {
    return cy.get('#subscribe');
  }

  mensagemSucessoInscricao() {
    return cy.get('#success-subscribe');
  }

  tituloInscricao() {
    return cy.contains('h2', 'Subscription');
  }

  visitarHome() {
    this.visitar('/');
  }

  irParaCadastroLogin() {
    this.linkCadastroLogin().click();
  }

  irParaProdutos() {
    this.linkProdutos().click();
  }

  irParaCarrinho() {
    this.linkCarrinho().click();
  }

  sair() {
    this.linkSair().click();
  }

  clicarExcluirConta() {
    this.linkExcluirConta().click();
  }

  rolarAteRodape() {
    cy.scrollTo('bottom');
  }

  inscreverComEmail(email) {
    this.campoEmailInscricao().type(email);
    this.botaoInscrever().click();
  }

  validarHomeVisivel() {
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    this.produtosEmDestaque().should('have.length.greaterThan', 0);
  }

  validarLogadoComo(nome) {
    this.textoLogadoComo().should('be.visible').and('contain.text', nome);
  }
}
