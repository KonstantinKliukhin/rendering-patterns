import { ProductsPage } from '@/components/ProductsPage';
import { Product } from '@/types/product';

export const experimental_ppr = true;

export default async function PPRProductsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products: Product[] = await response.json();

  console.log('PPR PRODUCTS LIST PAGE RENDERED');

  return (
    <ProductsPage
      title="Partial Prerendering (PPR)"
      description="Partial Prerendering (PPR). This page is partially prerendered at build time."
      products={products}
      loading={false}
      getProductLink={(product) => `/ppr/products/${product.id}`}
    />
  );
}
