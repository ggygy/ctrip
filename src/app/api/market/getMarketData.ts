import { getBaseUrl } from '@/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import type { marketData } from './market';

// import 'server-only';

export async function getMarketData() {

  const res = await fetch(
    `${getBaseUrl()}/api/market/`,
    { cache: "no-store", }
  );
  

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  

  const market = (await res.json()) as marketData[];


  if (market.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return market;
}