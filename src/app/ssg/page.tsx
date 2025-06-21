import { ProductsPage } from '@/components/ProductsPage';
import { Product } from '@/types/product';

export const revalidate = 60;

export default async function SSGProductsPage() {
  const response = await fetch('http://localhost:5002/api/products');
  const products: Product[] = await response.json();

  console.log('SSG PRODUCTS LIST PAGE RENDERED');

  return (
    <ProductsPage
      title="Static Site Generation (SSG)"
      description="Static Site Generation (SSG) is a technique that allows you to generate static HTML pages at build time. This means that the pages are pre-rendered and can be served directly by a CDN without the need for server-side rendering."
      products={products}
      loading={false}
      getProductLink={(product) => `/ssg/products/${product.id}`}
    />
  );
}
