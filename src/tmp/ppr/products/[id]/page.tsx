import { ProductDetailsPage } from '@/components/ProductDetailsPage';
import { CartButton } from '@/components/CartButton';
import { CartWidget } from '@/components/CartWidget';
import { Suspense } from 'react';
import { PRODUCTS } from '@/constants';

export const experimental_ppr = true;

export const generateStaticParams = async () => {
  return PRODUCTS.map((product) => ({ id: product.id.toString() }));
};

export default async function PPRProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = PRODUCTS.find((product) => product.id.toString() === id)!;

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
