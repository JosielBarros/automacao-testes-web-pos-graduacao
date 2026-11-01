// import { HomePage } from '../pages/home.page';

// describe('TC10 - Verificar inscrição na página inicial', () => {
//   const homePage = new HomePage();

//   it('TC10 - Verificar inscrição na página inicial', () => {
//     homePage.visitarHome();
//     homePage.validarHomeVisivel();

//     homePage.rolarAteRodape();
//     homePage.tituloInscricao().should('be.visible');

//     cy.gerarUsuario().then((usuario) => {
//       homePage.inscreverComEmail(usuario.email);
//     });

//     homePage
//       .mensagemSucessoInscricao()
//       .should('be.visible')
//       .and('contain.text', 'You have been successfully subscribed!');
//   });
// });
