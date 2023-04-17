import { getseasonHots } from "./getSeasonHot";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const city = searchParams.get("city");
  const isLogin = searchParams.get("isLogin");
  if (isLogin || !key || !city) {
    const SeasonHotData = null;
    return new Response(JSON.stringify(SeasonHotData ?? null), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const hotelRecommends = await getseasonHots(city, key);

  return new Response(JSON.stringify(hotelRecommends), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
