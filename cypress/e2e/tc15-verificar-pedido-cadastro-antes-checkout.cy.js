import { HomePage } from '../pages/home.page';
import { SignupLoginPage } from '../pages/signup-login.page';
import { AccountInformationPage } from '../pages/account-information.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';

const DADOS_PAGAMENTO = {
  numeroCartao: '4111111111111111',
  cvc: '123',
  mesExpiracao: '12',
  anoExpiracao: '2030',
};

describe('TC15 - Verificar pedido: cadastro antes do checkout', () => {
  const homePage = new HomePage();
  const signupLoginPage = new SignupLoginPage();
  const accountInformationPage = new AccountInformationPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const paymentPage = new PaymentPage();

  let dadosUsuario;

  after(() => {
    cy.limparUsuario(dadosUsuario);
  });

  it('TC15 - Verificar pedido: cadastro antes do checkout', () => {
    homePage.visitarHome();
    homePage.validarHomeVisivel();

    homePage.irParaCadastroLogin();
    signupLoginPage.tituloNovoCadastro().should('be.visible');

    cy.gerarUsuario().then((usuario) => {
      dadosUsuario = usuario;
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

    homePage.irParaProdutos();
    productsPage.tituloTodosProdutos().should('be.visible');
    productsPage.adicionarVariosProdutosAoCarrinho([0, 1]);

    homePage.irParaCarrinho();
    cartPage.validarQuantidadeItensCarrinho(2);

    cartPage.clicarProsseguirCheckout();
    checkoutPage.validarPaginaCheckoutVisivel();

    checkoutPage.preencherComentarioPedido('Pedido de teste automatizado - TC15');
    checkoutPage.clicarFinalizarPedido();

    cy.then(() => {
      paymentPage.preencherDadosPagamentoEPagar({
        nomeNoCartao: dadosUsuario.name,
        ...DADOS_PAGAMENTO,
      });
    });

    paymentPage.validarPedidoRealizadoComSucesso();

    homePage.visitarHome();
    homePage.clicarExcluirConta();
    accountInformationPage.validarContaExcluida();
    accountInformationPage.clicarContinuar();

    cy.then(() => {
      dadosUsuario = null;
    });
  });
});
