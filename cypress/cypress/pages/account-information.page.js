
import { BasePage } from './base.page';

export class AccountInformationPage extends BasePage {
  radioTituloSr() {
    return cy.get('#id_gender1');
  }

  radioTituloSra() {
    return cy.get('#id_gender2');
  }

  campoSenha() {
    return cy.get('input[data-qa="password"]');
  }

  selectDia() {
    return cy.get('select[data-qa="days"]');
  }

  selectMes() {
    return cy.get('select[data-qa="months"]');
  }

  selectAno() {
    return cy.get('select[data-qa="years"]');
  }

  checkboxNewsletter() {
    return cy.get('#newsletter');
  }

  checkboxOptin() {
    return cy.get('#optin');
  }

  campoNome() {
    return cy.get('input[data-qa="first_name"]');
  }

  campoSobrenome() {
    return cy.get('input[data-qa="last_name"]');
  }

  campoEmpresa() {
    return cy.get('input[data-qa="company"]');
  }

  campoEndereco1() {
    return cy.get('input[data-qa="address"]');
  }

  campoEndereco2() {
    return cy.get('input[data-qa="address2"]');
  }

  selectPais() {
    return cy.get('select[data-qa="country"]');
  }

  campoEstado() {
    return cy.get('input[data-qa="state"]');
  }

  campoCidade() {
    return cy.get('input[data-qa="city"]');
  }

  campoCep() {
    return cy.get('input[data-qa="zipcode"]');
  }

  campoTelefone() {
    return cy.get('input[data-qa="mobile_number"]');
  }

  tituloInformacaoConta() {
    return cy.contains('.title', 'Enter Account Information');
  }

  botaoCriarConta() {
    return cy.get('button[data-qa="create-account"]');
  }

  tituloContaCriada() {
    return cy.get('h2[data-qa="account-created"]');
  }

  tituloContaExcluida() {
    return cy.get('h2[data-qa="account-deleted"]');
  }

  botaoContinuar() {
    return cy.get('a[data-qa="continue-button"]');
  }

  selecionarTitulo(titulo) {
    if (titulo === 'Mrs') {
      this.radioTituloSra().check({ force: true });
    } else {
      this.radioTituloSr().check({ force: true });
    }
  }

  preencherSenha(senha) {
    this.campoSenha().type(senha);
  }

  selecionarDataNascimento(dia, mes, ano) {
    this.selectDia().select(dia);
    this.selectMes().select(mes);
    this.selectAno().select(ano);
  }

  marcarNewsletter() {
    this.checkboxNewsletter().check({ force: true });
  }

  marcarOptin() {
    this.checkboxOptin().check({ force: true });
  }

  preencherDadosPessoais(dadosUsuario) {
    this.campoNome().type(dadosUsuario.firstname);
    this.campoSobrenome().type(dadosUsuario.lastname);
    this.campoEmpresa().type(dadosUsuario.company);
  }

  preencherDadosEndereco(dadosUsuario) {
    this.campoEndereco1().type(dadosUsuario.address1);
    this.campoEndereco2().type(dadosUsuario.address2);
    this.selectPais().select(dadosUsuario.country);
    this.campoEstado().type(dadosUsuario.state);
    this.campoCidade().type(dadosUsuario.city);
    this.campoCep().type(dadosUsuario.zipcode);
    this.campoTelefone().type(dadosUsuario.mobile_number);
  }

  clicarCriarConta() {
    this.botaoCriarConta().click();
  }

  clicarContinuar() {
    this.botaoContinuar().click();
  }

  preencherTodosDadosDaConta(dadosUsuario) {
    this.selecionarTitulo(dadosUsuario.title);
    this.preencherSenha(dadosUsuario.password);
    this.selecionarDataNascimento(
      dadosUsuario.birth_date,
      dadosUsuario.birth_month,
      dadosUsuario.birth_year
    );
    this.marcarNewsletter();
    this.marcarOptin();
    this.preencherDadosPessoais(dadosUsuario);
    this.preencherDadosEndereco(dadosUsuario);
  }

  concluirCriacaoConta(dadosUsuario) {
    this.preencherTodosDadosDaConta(dadosUsuario);
    this.clicarCriarConta();
  }

  validarFormularioContaVisivel() {
    this.tituloInformacaoConta().should('be.visible');
  }

  validarContaCriada() {
    this.tituloContaCriada().should('be.visible').and('contain.text', 'Account Created!');
  }

  validarContaExcluida() {
    this.tituloContaExcluida().should('be.visible').and('contain.text', 'Account Deleted!');
  }
}
