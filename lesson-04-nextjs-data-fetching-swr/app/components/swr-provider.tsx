'use client';

import { SWRConfig } from 'swr';
import { ReactNode } from 'react';

// Global fetcher function
const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!res.ok) { throw new Error('An error occurred while fetching the data.'); }
    return res.json();
  });

export function SWRProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        dedupingInterval: 5000,
        errorRetryCount: 3,
      }}
    >
      {children}
    </SWRConfig>
  );
} 
