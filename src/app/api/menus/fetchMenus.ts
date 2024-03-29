import { getBaseUrl } from '@/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import type { navmenu } from './navmenu';

import 'server-only';

export async function getMenus() {

  const res = await fetch(
    `${getBaseUrl()}/api/menus/`,
    { next: { revalidate: 60 } }
  );
  

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  

  const menus = (await res.json()) as navmenu[];


  if (menus.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return menus;
}