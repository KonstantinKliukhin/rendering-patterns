import { FC } from 'react';
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';

type CartButtonProps = {
  productId: number | string;
};

export const CartButton: FC<CartButtonProps> = ({ productId }) => {
  return (
    <form
      action={async () => {
        'use server';
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            cookie: (await cookies()).toString(),
          },
          credentials: 'include',
        });

        const data = await response.json();

        const cookieStore = await cookies();

        cookieStore.set('cart', data.count.toString());

        revalidateTag('cart');
      }}
    >
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4" type="submit">
        Add to Cart
      </button>
    </form>
  );
};
