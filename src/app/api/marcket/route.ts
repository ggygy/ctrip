// export const runtime = 'edge';
import { db } from '@/lib/db'
import type {marketData} from './market'
export const runtime = 'nodejs';

async function getMarketData() {
  const MarketData = await db.marketcity.findMany({
    take: 4, // 选取4个随机酒店
    include: {
      marketdata: true,
    },
  })
  return MarketData
}


export async function GET(request: Request) {
  
  const { searchParams } = new URL(request.url);

  const isLogin = searchParams.get('isLogin');
  if (isLogin) {
    const menus = null;

    return new Response(JSON.stringify(menus ?? null), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const menus = await getMarketData()
  
  return new Response(JSON.stringify(menus), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}