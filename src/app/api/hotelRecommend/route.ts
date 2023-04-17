import { getHotelRecommends } from "./getHotelRecommend";

// export const runtime = 'edge';
export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("city");
  const isLogin = searchParams.get("isLogin");
  if (isLogin || !key) {
    const hotelRecommends = null;

    return new Response(JSON.stringify(hotelRecommends ?? null), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const hotelRecommends = await getHotelRecommends(key);

  return new Response(JSON.stringify(hotelRecommends), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
