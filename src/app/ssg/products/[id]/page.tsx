import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { Product } from '@/types/product';

export const generateStaticParams = async () => {
  const response = await fetch('http://localhost:5002/api/products');
  const products: Product[] = await response.json();

  return products.map((product) => ({ id: product.id.toString() }));
};

export default async function SSGProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:5002/api/products/${id}`);
  const product: Product = await response.json();

  console.log(`SSG PRODUCT DETAILS PAGE #${id} RENDERED`);

  return <ProductDetailsPage product={product} loading={false} />;
}
