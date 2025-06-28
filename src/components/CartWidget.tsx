import Image from 'next/image';
import CartIcon from '../../public/cart.svg';
import { cookies } from 'next/headers';

export const CartWidget = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
    next: {
      tags: ['cart'],
    },
    cache: 'no-store',
    headers: {
      cookie: (await cookies()).toString(),
    },
  });
  const { count }: { count: number } = await response.json();

  return (
    <div className="relative">
      <Image className="size-10" src={CartIcon} alt="Cart" />
      <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-red-500 text-white text-xs rounded-full size-6 flex items-center justify-center">
        {count}
      </span>
    </div>
  );
};
