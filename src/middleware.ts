// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.url;
  console.log("next url:" + url);
  if (request.nextUrl.pathname.startsWith("/")) {
    let loginInfo = request.nextUrl.pathname.endsWith("/");
    return loginInfo
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
