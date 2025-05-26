// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// 只对 /admin 路径生效
export const config = {
  matcher: '/admin/:path*',
};

export function middleware(request: NextRequest) {
  // 简单日志：打印请求方法 & URL
  console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`);

  // 鉴权示例：检查名为 "token" 的 Cookie
  const token = request.cookies.get('token')?.value;
  if (!token) {
    // 未登录：重定向到 /login，并携带原始请求路径
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 登录后：继续，并在响应头中加一个自定义标记
  const response = NextResponse.next();
  response.headers.set('X-User-Token', token);
  return response;
}
