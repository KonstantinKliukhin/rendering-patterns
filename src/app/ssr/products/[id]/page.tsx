import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { RandomizeButton } from '@/components/RandomizeButton';
import { Product } from '@/types/product';

export const dynamic = 'force-dynamic';

export default async function SSRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:5002/api/products/${id}`);
  const product: Product = await response.json();

  console.log(`SSR PRODUCT DETAILS PAGE #${id} RENDERED`);

  return (
    <ProductDetailsPage
      product={product}
      loading={false}
      button={<RandomizeButton productId={product.id} />}
    />
  );
}
