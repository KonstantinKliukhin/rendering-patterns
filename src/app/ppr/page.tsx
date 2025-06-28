import { ProductsPage } from '@/components/ProductsPage';
import { PRODUCTS } from '@/constants';

export const experimental_ppr = true;

export default async function PPRProductsPage() {
  const products = PRODUCTS;

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
