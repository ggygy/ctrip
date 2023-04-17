import { getMenus } from "./getMenus";

// export const runtime = 'edge';
export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const isLogin = searchParams.get("isLogin");
  if (isLogin) {
    const menus = null;

    return new Response(JSON.stringify(menus ?? null), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const menus = await getMenus();

  return new Response(JSON.stringify(menus), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
