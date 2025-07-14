import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { RandomizeButton } from '@/components/RandomizeButton';
import { PRODUCTS } from '@/constants';

export const dynamic = 'force-dynamic';

export default async function SSRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = PRODUCTS.find((product) => product.id.toString() === id)!;

  console.log(`SSR PRODUCT DETAILS PAGE #${id} RENDERED`);

  return (
    <ProductDetailsPage
      product={product}
      loading={false}
      button={<RandomizeButton productId={product.id} />}
    />
  );
}
