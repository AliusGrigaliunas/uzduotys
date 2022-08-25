import ProductsCollection from '../helpers/products-collection';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundHtmlElement = document.querySelector<HTMLElement>(selector);
    if (foundHtmlElement === null) {
      throw new Error(`Kuriant 'App' komponentą nerastas HTML elementas naudojant selektorių: '${selector}'`);
    }

    this.htmlElement = foundHtmlElement;
    this.productsCollection = new ProductsCollection(products, categories, productsCategories);
  }

  public initialize() {
    const productsDataStringified = JSON.stringify(this.productsCollection.all, null, 4);
    this.htmlElement.innerHTML = `<pre>${productsDataStringified}</pre>`;
  }
}

export default App;
