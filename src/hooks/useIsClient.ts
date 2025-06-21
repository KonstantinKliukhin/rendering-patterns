import { useEffect } from 'react';

import { useState } from 'react';

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsClient(true);
  }, []);

  return isClient;
};
