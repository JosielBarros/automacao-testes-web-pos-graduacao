import { BasePage } from './base.page';

export class PaymentPage extends BasePage {
  campoNomeCartao() {
    return cy.get('input[data-qa="name-on-card"]');
  }

  campoNumeroCartao() {
    return cy.get('input[data-qa="card-number"]');
  }

  campoCvc() {
    return cy.get('input[data-qa="cvc"]');
  }

  campoMesExpiracao() {
    return cy.get('input[data-qa="expiry-month"]');
  }

  campoAnoExpiracao() {
    return cy.get('input[data-qa="expiry-year"]');
  }

  botaoPagar() {
    return cy.get('button[data-qa="pay-button"]');
  }

  tituloPedidoRealizado() {
    return cy.get('h2[data-qa="order-placed"]');
  }

  preencherDadosPagamento(dadosPagamento) {
    this.campoNomeCartao().type(dadosPagamento.nomeNoCartao);
    this.campoNumeroCartao().type(dadosPagamento.numeroCartao);
    this.campoCvc().type(dadosPagamento.cvc);
    this.campoMesExpiracao().type(dadosPagamento.mesExpiracao);
    this.campoAnoExpiracao().type(dadosPagamento.anoExpiracao);
  }

  clicarPagar() {
    this.botaoPagar().click();
  }

  preencherDadosPagamentoEPagar(dadosPagamento) {
    this.preencherDadosPagamento(dadosPagamento);
    this.clicarPagar();
  }

  validarPedidoRealizadoComSucesso() {
    cy.url().should('include', '/payment_done');
    this.tituloPedidoRealizado().should('be.visible').and('contain.text', 'Order Placed!');
  }
}
