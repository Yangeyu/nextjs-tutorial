import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// 扩展 NextAuth 的类型定义
declare module "next-auth" {
  // 扩展 Session 接口，添加自定义用户属性
  interface Session {
    user: {
      id?: string;       // 用户ID
      name?: string | null;  // 用户名称
      email?: string | null; // 用户邮箱
      image?: string | null; // 用户头像
    }
  }
}

// NextAuth 配置选项
export const authOptions: NextAuthOptions = {
  // 配置身份验证提供者
  providers: [
    // Google OAuth 提供者配置
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,      //  Google OAuth 应用的客户端ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, // Google OAuth 应用的客户端密钥
    }),
    
    // 凭证(用户名密码)提供者配置
    CredentialsProvider({
      name: "Credentials", // 提供者名称
      // 定义登录表单字段
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" }, // 用户名输入框
        password: { label: "Password", type: "password" },                     // 密码输入框
      },
      // 验证用户凭证的函数
      async authorize(credentials) {
        // 这里通常会检查数据库中的用户凭证
        // 示例中使用硬编码的用户名和密码进行演示
        if (credentials?.username === "admin" && credentials?.password === "password") {
          // 验证成功，返回用户对象
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        // 验证失败，返回null
        return null;
      },
    }),
  ],
  
  // 自定义页面路径
  pages: {
    signIn: "/login", // 自定义登录页面路径
  },
  
  // 回调函数配置
  callbacks: {
    // session 回调：在每次会话被访问时调用
    async session({ session, token }) {
      // 如果存在令牌和会话用户信息
      if (token && session.user) {
        // 将令牌中的用户ID添加到会话用户对象中
        session.user = {
          ...session.user,
          id: token.sub as string // 使用令牌的sub字段作为用户ID
        };
      }
      // 返回更新后的会话
      return session;
    },
  },
  
  // 会话配置
  session: {
    strategy: "jwt", // 使用JWT策略管理会话
  },
};
