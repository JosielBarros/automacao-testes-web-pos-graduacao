import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/products.page';

describe('TC09 - Verificar busca de produto', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  it('TC09 - Verificar busca de produto', () => {
    homePage.visitarHome();
    homePage.validarHomeVisivel();

    homePage.irParaProdutos();
    productsPage.tituloTodosProdutos().should('be.visible');

    productsPage.buscarProduto('Dress');

    productsPage.tituloProdutosBuscados().should('be.visible');
    productsPage.itensProduto().should('have.length.greaterThan', 0);
  });
});
