import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

class ProductsCollection {
  constructor(
    private products: Product[],
    private categories: Category[],
    private productsCategories: ProductCategory[],
  ) { }

  private joinProduct(product: Product): ProductJoined {
    const categoriesIds = this.productsCategories
      .filter((productCategory) => productCategory.productId === product.id)
      .map((productCategory) => productCategory.categoryId);

    const categoryTitles = this.categories
      .filter((category) => categoriesIds.includes(category.id))
      .map((category) => category.title);

    const productJoined: ProductJoined = {
      ...product,
      categories: categoryTitles.join(', '),
    };

    return productJoined;
  }

  public get all(): ProductJoined[] {
    return this.products.map((product) => this.joinProduct(product));
    // return this.products.map(this.joinProduct.bind(this));
  }
}

export default ProductsCollection;
