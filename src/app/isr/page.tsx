import { ProductsPage } from '@/components/ProductsPage';
import { Product } from '@/types/product';

export const revalidate = 30;

export default async function ISRProductsPage() {
  const response = await fetch('http://localhost:5002/api/products');
  const products: Product[] = await response.json();

  console.log('ISR PRODUCTS LIST PAGE RENDERED');

  return (
    <ProductsPage
      title="Incremental Static Regeneration (ISR)"
      description="Incremental Static Regeneration (ISR) is a technique that allows you to generate static HTML pages at build time. This means that the pages are pre-rendered and can be served directly by a CDN without the need for server-side rendering."
      products={products}
      loading={false}
      getProductLink={(product) => `/isr/products/${product.id}`}
    />
  );
}
