import { HomePage } from '../pages/home.page';
import { SignupLoginPage } from '../pages/signup-login.page';
import { AccountInformationPage } from '../pages/account-information.page';

describe('TC02 - Verificar login com email e senha corretos', () => {
  const homePage = new HomePage();
  const signupLoginPage = new SignupLoginPage();
  const accountInformationPage = new AccountInformationPage();

  let dadosUsuario;

  before(() => {
    cy.criarUsuarioViaApi().then((usuario) => {
      dadosUsuario = usuario;
    });
  });

  after(() => {
    cy.limparUsuario(dadosUsuario);
  });

  it('TC02 - Verificar login com email e senha corretos', () => {
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

    homePage.clicarExcluirConta();
    accountInformationPage.validarContaExcluida();

    cy.then(() => {
      dadosUsuario = null;
    });
  });
});
