// app/login/page.tsx
'use client';
import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';

export default function LoginPage() {
  const params = useSearchParams();
  const from = params.get('from') || '/';
  const router = useRouter();

  const handleLogin = () => {
    // 模拟登录：写入名为 "token" 的 Cookie
    document.cookie = 'token=demo-token; path=/';
    // 登录后重定向回原始页面
    router.push(from);
  };

  return (
    <div>
      <h1>请先登录 🔐</h1>
      <Button onClick={handleLogin} style={{ padding: '8px 16px', marginTop: 16 }}>
        模拟登录
      </Button>
    </div>
  );
}
