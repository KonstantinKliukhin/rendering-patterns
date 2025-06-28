import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { RandomizeButton } from '@/components/RandomizeButton';
import { PRODUCTS } from '@/constants';

export const revalidate = 30;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  return PRODUCTS.map((product) => ({ id: product.id.toString() }));
};

export default async function ISRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = PRODUCTS.find((product) => product.id.toString() === id)!;

  console.log(`ISR PRODUCT DETAILS PAGE #${id} RENDERED`);

  return (
    <ProductDetailsPage
      product={product}
      loading={false}
      button={<RandomizeButton productId={product.id} />}
    />
  );
}
