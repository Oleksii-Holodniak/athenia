import { NextApiResponse } from "next";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/profile", "/create"];
const alreadyUsedRoutes = ["/auth/login", "/auth/registration"];

const redirect = (req: NextRequest) => {
  const newUrl = new URL("/", req.nextUrl.origin);
  return NextResponse.redirect(newUrl);
};

export const middleware = async (req: NextRequest, res: NextApiResponse) => {
  const url = req.nextUrl.pathname;

  if (protectedRoutes.includes(url)) {
    if (!req.cookies.has(process.env.COOKIES_NAME!)) {
      return redirect(req);
    }
    let token = req.cookies.get(process.env.COOKIES_NAME!);
    const res = await fetch(`${process.env.BASE_URL}/user/info`, {
      headers: {
        Cookie: `${token?.name}=${token?.value}`,
      },
    });
    if (res.status !== 200) {
      req.cookies.delete(process.env.COOKIES_NAME!);
      return redirect(req);
    }
  }

  if (alreadyUsedRoutes.includes(url)) {
    if (req.cookies.has(process.env.COOKIES_NAME!)) {
      return redirect(req);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon).*)"],
};
