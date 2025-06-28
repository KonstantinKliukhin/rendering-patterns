import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { RandomizeButton } from '@/components/RandomizeButton';
import { Product } from '@/types/product';

export const revalidate = 30;
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products: Product[] = await response.json();

  return products.map((product) => ({ id: product.id.toString() }));
};

export default async function ISRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const product: Product = await response.json();

  console.log(`ISR PRODUCT DETAILS PAGE #${id} RENDERED`);

  return (
    <ProductDetailsPage
      product={product}
      loading={false}
      button={<RandomizeButton productId={product.id} />}
    />
  );
}
