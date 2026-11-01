// import { HomePage } from '../pages/home.page';
// import { SignupLoginPage } from '../pages/signup-login.page';
// import { AccountInformationPage } from '../pages/account-information.page';
// import { ProductsPage } from '../pages/products.page';
// import { CartPage } from '../pages/cart.page';
// import { CheckoutPage } from '../pages/checkout.page';
// import { PaymentPage } from '../pages/payment.page';

// const DADOS_PAGAMENTO = {
//   numeroCartao: '4111111111111111',
//   cvc: '123',
//   mesExpiracao: '12',
//   anoExpiracao: '2030',
// };

// describe('TC16 - Verificar pedido: login antes do checkout', () => {
//   const homePage = new HomePage();
//   const signupLoginPage = new SignupLoginPage();
//   const accountInformationPage = new AccountInformationPage();
//   const productsPage = new ProductsPage();
//   const cartPage = new CartPage();
//   const checkoutPage = new CheckoutPage();
//   const paymentPage = new PaymentPage();

//   let dadosUsuario;

//   before(() => {
//     cy.criarUsuarioViaApi().then((usuario) => {
//       dadosUsuario = usuario;
//     });
//   });

//   after(() => {
//     cy.limparUsuario(dadosUsuario);
//   });

//   beforeEach(() => {
//     cy.then(() => {
//       cy.session(dadosUsuario.email, () => {
//         cy.visit('/login');
//         signupLoginPage.fazerLogin(dadosUsuario.email, dadosUsuario.password);
//         homePage.validarLogadoComo(dadosUsuario.name);
//       });
//     });
//   });

//   it('TC16 - Verificar pedido: login antes do checkout', () => {
//     homePage.visitarHome();
//     homePage.validarLogadoComo(dadosUsuario.name);

//     homePage.irParaProdutos();
//     productsPage.tituloTodosProdutos().should('be.visible');
//     productsPage.adicionarVariosProdutosAoCarrinho([0]);

//     homePage.irParaCarrinho();
//     cartPage.validarQuantidadeItensCarrinho(1);

//     cartPage.clicarProsseguirCheckout();
//     checkoutPage.validarPaginaCheckoutVisivel();

//     checkoutPage.preencherComentarioPedido('Pedido de teste automatizado - TC16');
//     checkoutPage.clicarFinalizarPedido();

//     paymentPage.preencherDadosPagamentoEPagar({
//       nomeNoCartao: dadosUsuario.name,
//       ...DADOS_PAGAMENTO,
//     });
//     paymentPage.validarPedidoRealizadoComSucesso();

//     homePage.visitarHome();
//     homePage.clicarExcluirConta();
//     accountInformationPage.validarContaExcluida();
//     accountInformationPage.clicarContinuar();

//     cy.then(() => {
//       dadosUsuario = null;
//     });
//   });
// });
