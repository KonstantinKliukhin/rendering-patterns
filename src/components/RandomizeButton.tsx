import { revalidatePath } from 'next/cache';
import { FC } from 'react';

type RandomizeButtonProps = {
  productId: number | string;
};

export const RandomizeButton: FC<RandomizeButtonProps> = ({ productId }) => {
  return (
    <form
      action={async () => {
        'use server';

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, { method: 'POST' });

        revalidatePath(`products/${productId}`);
      }}
    >
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Randomize</button>
    </form>
  );
};
