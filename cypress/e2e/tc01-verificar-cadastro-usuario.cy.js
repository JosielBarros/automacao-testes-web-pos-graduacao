import { HomePage } from '../pages/home.page';
import { SignupLoginPage } from '../pages/signup-login.page';
import { AccountInformationPage } from '../pages/account-information.page';

describe('TC01 - Verificar cadastro de usuário', () => {
  const homePage = new HomePage();
  const signupLoginPage = new SignupLoginPage();
  const accountInformationPage = new AccountInformationPage();

  let dadosUsuario;

  after(() => {
    cy.limparUsuario(dadosUsuario);
  });

  it('TC01 - Verificar cadastro de usuário', () => {
    cy.gerarUsuario().then((usuario) => {
      dadosUsuario = usuario;
    });

    homePage.visitarHome();
    homePage.validarHomeVisivel();

    homePage.irParaCadastroLogin();
    signupLoginPage.tituloNovoCadastro().should('be.visible');

    cy.then(() => {
      signupLoginPage.cadastrar(dadosUsuario.name, dadosUsuario.email);
    });

    accountInformationPage.validarFormularioContaVisivel();

    cy.then(() => {
      accountInformationPage.concluirCriacaoConta(dadosUsuario);
    });

    accountInformationPage.validarContaCriada();
    accountInformationPage.clicarContinuar();

    cy.then(() => {
      homePage.validarLogadoComo(dadosUsuario.name);
    });

    homePage.clicarExcluirConta();
    accountInformationPage.validarContaExcluida();
    accountInformationPage.clicarContinuar();

    cy.then(() => {
      dadosUsuario = null;
    });
  });
});
