
import { BasePage } from './base.page';

export class SignupLoginPage extends BasePage {
  tituloNovoCadastro() {
    return cy.contains('.signup-form h2', 'New User Signup!');
  }

  tituloLogin() {
    return cy.contains('.login-form h2', 'Login to your account');
  }

  campoNomeCadastro() {
    return cy.get('input[data-qa="signup-name"]');
  }

  campoEmailCadastro() {
    return cy.get('input[data-qa="signup-email"]');
  }

  botaoCadastrar() {
    return cy.get('button[data-qa="signup-button"]');
  }

  campoEmailLogin() {
    return cy.get('input[data-qa="login-email"]');
  }

  campoSenhaLogin() {
    return cy.get('input[data-qa="login-password"]');
  }

  botaoLogin() {
    return cy.get('button[data-qa="login-button"]');
  }

  mensagemErroCadastro() {
    return cy.get('.signup-form p');
  }

  mensagemErroLogin() {
    return cy.get('.login-form p');
  }

  preencherNomeEEmailCadastro(nome, email) {
    this.campoNomeCadastro().type(nome);
    this.campoEmailCadastro().type(email);
  }

  confirmarCadastro() {
    this.botaoCadastrar().click();
  }

  preencherCredenciaisLogin(email, senha) {
    this.campoEmailLogin().type(email);
    this.campoSenhaLogin().type(senha);
  }

  confirmarLogin() {
    this.botaoLogin().click();
  }

  cadastrar(nome, email) {
    this.preencherNomeEEmailCadastro(nome, email);
    this.confirmarCadastro();
  }

  fazerLogin(email, senha) {
    this.preencherCredenciaisLogin(email, senha);
    this.confirmarLogin();
  }
}
