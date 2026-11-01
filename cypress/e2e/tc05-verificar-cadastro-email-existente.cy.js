// import { HomePage } from '../pages/home.page';
// import { SignupLoginPage } from '../pages/signup-login.page';

// describe('TC05 - Verificar cadastro de usuário com email já existente', () => {
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

//   it('TC05 - Verificar cadastro de usuário com email já existente', () => {
//     homePage.visitarHome();
//     homePage.validarHomeVisivel();

//     homePage.irParaCadastroLogin();
//     signupLoginPage.tituloNovoCadastro().should('be.visible');

//     cy.gerarUsuario().then((novoUsuario) => {
//       signupLoginPage.cadastrar(novoUsuario.name, dadosUsuario.email);
//     });

//     signupLoginPage
//       .mensagemErroCadastro()
//       .should('be.visible')
//       .and('contain.text', 'Email Address already exist!');
//   });
// });
