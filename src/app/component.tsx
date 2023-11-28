'use client';

import { useTransition } from 'react';
import { addToCart } from './action';

export default function Component() {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="grid ">
      <h1>Transition is: {isPending ? 'pending' : 'idle'} </h1>
      <p>
        Press the button below several times in a row to make the transition
        stuck in a "pending" state.
      </p>
      <button
        onClick={() => {
          startTransition(async () => {
            await addToCart();
          });
        }}
      >
        Trigger action
      </button>
    </div>
  );
}
