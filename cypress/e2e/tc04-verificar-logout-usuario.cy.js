import { HomePage } from '../pages/home.page';
import { SignupLoginPage } from '../pages/signup-login.page';

describe('TC04 - Verificar logout de usuário', () => {
  const homePage = new HomePage();
  const signupLoginPage = new SignupLoginPage();

  let dadosUsuario;

  before(() => {
    cy.criarUsuarioViaApi().then((usuario) => {
      dadosUsuario = usuario;
    });
  });

  after(() => {
    cy.limparUsuario(dadosUsuario);
  });

  it('TC04 - Verificar logout de usuário', () => {
    homePage.visitarHome();
    homePage.validarHomeVisivel();

    homePage.irParaCadastroLogin();
    signupLoginPage.tituloLogin().should('be.visible');

    cy.then(() => {
      signupLoginPage.fazerLogin(dadosUsuario.email, dadosUsuario.password);
    });

    cy.then(() => {
      homePage.validarLogadoComo(dadosUsuario.name);
    });

    homePage.sair();

    cy.url().should('include', '/login');
    signupLoginPage.tituloLogin().should('be.visible');
  });
});
