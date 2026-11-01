import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/products.page';
import { ProductDetailPage } from '../pages/product-detail.page';

describe('TC08 - Verificar todos os produtos e página de detalhe do produto', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const productDetailPage = new ProductDetailPage();

  it('TC08 - Verificar todos os produtos e página de detalhe do produto', () => {
    homePage.visitarHome();
    homePage.validarHomeVisivel();

    homePage.irParaProdutos();

    cy.url().should('include', '/products');
    productsPage.tituloTodosProdutos().should('be.visible');
    productsPage.itensProduto().should('have.length.greaterThan', 0);

    productsPage.clicarVerProdutoPorIndice(0);

    cy.url().should('include', '/product_details/');
    productDetailPage.validarCamposDetalheVisiveis();
  });
});
