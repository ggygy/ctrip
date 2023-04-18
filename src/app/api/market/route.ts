// export const runtime = 'edge';
import { db } from '@/lib/db'
import type { marketData } from './market'

export const runtime = 'nodejs';

async function getMarketData() {
  const CitytData = await db.marketcity.findMany({
    take: 4, // 选取4个随机酒店
    skip: Math.floor(Math.random() * 8),
  })

  let marketData: marketData[] = []
  for (let item of CitytData) {
    const HotelData = await db.marketdata.findMany({
      where: {
        cityName: item.cityName
      }
    })

    marketData.push({
      ...item,
      cityTem: {
        Lb: item.cityTemLb,
        Ub: item.cityTemUb
      },
      hotels: HotelData as any
    })
  }

  return marketData
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