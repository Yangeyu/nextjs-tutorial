"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface LoginFormProps {
  providers: Record<string, any> | null;
}

export default function LoginForm({ providers }: LoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 检查是否从注册页面跳转过来
  useEffect(() => {
    const registered = searchParams.get("registered");
    if (registered === "true") {
      setSuccessMessage("注册成功！请使用您的邮箱和密码登录。");
    }
  }, [searchParams]);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("用户名或密码不正确");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("登录失败，请稍后再试。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {successMessage && (
        <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleCredentialsLogin} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            邮箱
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            密码
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-1">{error}</div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "登录中..." : "登录"}
        </Button>
      </form>

      <div className="text-center text-sm">
        没有账号？{" "}
        <Link href="/register" className="text-indigo-600 hover:text-indigo-500">
          注册
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">或使用以下方式登录</span>
        </div>
      </div>

      <div className="space-y-2">
        {providers &&
          Object.values(providers).map((provider) => {
            if (provider.id === "credentials") return null;
            
            return (
              <Button
                key={provider.id}
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="w-full"
                variant="outline"
              >
                使用 {provider.name} 登录
              </Button>
            );
          })}
      </div>
    </div>
  );
} 