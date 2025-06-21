import { ProductsPage } from '@/components/ProductsPage';
import { Product } from '@/types/product';

export const dynamic = 'force-dynamic';

export default async function SSRProductsPage() {
  const response = await fetch('http://localhost:5002/api/products');
  const products: Product[] = await response.json();

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
