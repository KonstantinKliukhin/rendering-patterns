import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { CartButton } from '@/components/CartButton';
import { Product } from '@/types/product';
import { CartWidget } from '@/components/CartWidget';
import { Suspense } from 'react';

export const experimental_ppr = true;

export const generateStaticParams = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products: Product[] = await response.json();

  return products.map((product) => ({ id: product.id.toString() }));
};

export default async function PPRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const product: Product = await response.json();

  console.log(`PPR PRODUCT DETAILS PAGE #${id} RENDERED`);

  return (
    <div>
      <header className="flex justify-end p-4">
        <div className="text-2xl font-bold text-green-500">App Logo</div>
        <div className="ml-auto">
          <Suspense fallback={<div className="size-10 animate-pulse bg-gray-200 rounded-lg" />}>
            <CartWidget />
          </Suspense>
        </div>
      </header>
      <ProductDetailsPage
        product={product}
        loading={false}
        button={<CartButton productId={product.id} />}
      />
    </div>
  );
}
