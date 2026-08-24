import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0]; // strip port if present

  // 1. Permanent (301) redirect from www to non-www
  if (hostname.startsWith("www.")) {
    const nonWwwHostname = hostname.replace(/^www\./, "");
    const protocol =
      request.headers.get("x-forwarded-proto") ||
      (request.nextUrl.protocol ? request.nextUrl.protocol.replace(":", "") : "https");

    const targetUrl = new URL(
      `${protocol}://${nonWwwHostname}${request.nextUrl.pathname}${request.nextUrl.search}`
    );

    // Enforce trailing slash on canonical routes (not files)
    if (!targetUrl.pathname.endsWith("/") && !targetUrl.pathname.includes(".")) {
      targetUrl.pathname = `${targetUrl.pathname}/`;
    }

    return NextResponse.redirect(targetUrl.toString(), 301);
  }

  // 2. Normalize uppercase URL paths to lowercase (prevent duplicate indexing)
  if (request.nextUrl.pathname !== request.nextUrl.pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = request.nextUrl.pathname.toLowerCase();
    if (!url.pathname.endsWith("/") && !url.pathname.includes(".")) {
      url.pathname = `${url.pathname}/`;
    }
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, and static asset extensions
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
