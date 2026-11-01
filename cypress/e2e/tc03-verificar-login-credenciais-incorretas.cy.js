// import { HomePage } from '../pages/home.page';
// import { SignupLoginPage } from '../pages/signup-login.page';

// describe('TC03 - Verificar login com email e senha incorretos', () => {
//   const homePage = new HomePage();
//   const signupLoginPage = new SignupLoginPage();

//   let dadosUsuario;

//   before(() => {
//     cy.criarUsuarioViaApi().then((usuario) => {
//       dadosUsuario = usuario;
//     });
//   });

//   after(() => {
//     cy.limparUsuario(dadosUsuario);
//   });

//   it('TC03 - Verificar login com email e senha incorretos', () => {
//     homePage.visitarHome();
//     homePage.validarHomeVisivel();

//     homePage.irParaCadastroLogin();
//     signupLoginPage.tituloLogin().should('be.visible');

//     cy.then(() => {
//       signupLoginPage.fazerLogin(dadosUsuario.email, 'wrongPassword123!');
//     });

//     signupLoginPage
//       .mensagemErroLogin()
//       .should('be.visible')
//       .and('contain.text', 'Your email or password is incorrect!');
//   });
// });
