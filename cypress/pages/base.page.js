export class BasePage {
  visitar(caminho = '/') {
    cy.visit(caminho);
  }
}
