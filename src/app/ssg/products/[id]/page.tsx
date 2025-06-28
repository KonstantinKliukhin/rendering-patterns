import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { PRODUCTS } from '@/constants';

export const generateStaticParams = async () => {
  return PRODUCTS.map((product) => ({ id: product.id.toString() }));
};

export default async function SSGProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = PRODUCTS.find((product) => product.id.toString() === id)!;

  console.log(`SSG PRODUCT DETAILS PAGE #${id} RENDERED`);

  return <ProductDetailsPage product={product} loading={false} />;
}
