import { ProductsPage } from '@/components/ProductsPage';
import { PRODUCTS } from '@/constants';

export const dynamic = 'force-dynamic';

export default async function SSRProductsPage() {
  const products = PRODUCTS;

  console.log('products', products);

  return (
    <ProductsPage
      title="Server Side Rendering (SSR)"
      description="Server Side Rendering (SSR) is a technique that renders pages on the server for each request. This means that the HTML is generated on-demand, ensuring the content is always up-to-date but requiring server processing for every page load."
      products={products}
      loading={false}
      getProductLink={(product) => `/ssr/products/${product.id}`}
    />
  );
}
