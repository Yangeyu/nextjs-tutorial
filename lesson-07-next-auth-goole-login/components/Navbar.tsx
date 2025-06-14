"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                NextAuth 示例
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                首页
              </Link>
              {session && (
                <Link
                  href="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === "/dashboard"
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  个人中心
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!loading && (
              <>
                {session ? (
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {session.user?.name}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      退出登录
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/register">注册</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="/login">登录</Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 