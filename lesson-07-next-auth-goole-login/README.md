# lesson-07 Next.js 认证示例

这是一个使用 Next.js 和 NextAuth.js 实现的用户认证系统示例。

## 功能特点

- 使用 NextAuth.js 进行用户认证
- 支持用户名/密码登录
- 支持 Google OAuth 第三方登录
- 用户注册功能
- 密码加密存储
- 受保护的路由
- 客户端和服务器端认证状态管理

## 开始使用

### 前置条件

- Node.js 18.17 或更高版本
- PNPM 包管理器

### 安装步骤

1. 克隆仓库
2. 安装依赖:

```bash
pnpm install
```

3. 在项目根目录创建 `.env.local` 文件，并添加以下环境变量:

```
# 数据库连接
DATABASE_URL="postgresql://用户名:密码@localhost:5432/数据库名?schema=public"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=你的密钥-至少32位字符

# Google OAuth
GOOGLE_CLIENT_ID=你的Google客户端ID
GOOGLE_CLIENT_SECRET=你的Google客户端密钥
```

### 设置数据库

1. 确保你有一个 PostgreSQL 数据库实例运行
2. 使用 Prisma 初始化数据库:

```bash
npx prisma migrate dev --name init
```

### 设置 OAuth

要使用 Google 认证:

1. 前往 Google Cloud Console: https://console.cloud.google.com/
2. 创建一个新项目
3. 配置 OAuth 同意屏幕
4. 创建 OAuth 客户端 ID（Web 应用类型）
5. 设置已获授权的重定向 URI 为 `http://localhost:3000/api/auth/callback/google`
6. 复制客户端 ID 和客户端密钥到你的 `.env.local` 文件

### 运行应用

```bash
pnpm dev
```

访问 `http://localhost:3000` 即可查看应用。

## 默认凭据

对于自定义用户，你可以通过注册页面创建新账户，或使用以下默认凭据:
- 用户名: `admin@example.com`
- 密码: `password`

## 页面结构

- `/` - 首页，显示认证状态
- `/login` - 登录页面
- `/register` - 注册页面
- `/dashboard` - 受保护的用户中心页面（需要认证）

## 认证流程

1. 用户访问登录页面
2. 用户使用凭据或 OAuth 登录
3. 登录成功后，用户被重定向到首页
4. 受保护的路由会检查认证状态
5. 未认证用户会被重定向到登录页面

## 注册流程

1. 用户访问注册页面
2. 填写姓名、邮箱和密码
3. 表单验证通过后，创建新用户
4. 密码使用 bcrypt 加密存储
5. 注册成功后重定向到登录页面

## 技术栈

- Next.js 15
- NextAuth.js
- React 19
- Prisma ORM
- PostgreSQL
- bcrypt
- Tailwind CSS

## 项目结构

```
lesson-07-next-auth-goole-login/
│
├── app/                  # Next.js App Router 目录
│   ├── api/              # API 路由
│   │   ├── auth/         # NextAuth API 路由
│   │   └── register/     # 注册 API
│   ├── dashboard/        # 用户中心页面
│   ├── login/            # 登录页面
│   ├── register/         # 注册页面
│   └── page.tsx          # 首页
│
├── components/           # React 组件
│   ├── AuthProvider.tsx  # 认证状态提供者
│   ├── LoginForm.tsx     # 登录表单
│   ├── Navbar.tsx        # 导航栏
│   ├── RegisterForm.tsx  # 注册表单
│   ├── SignOutButton.tsx # 退出登录按钮
│   └── ui/               # UI 组件
│
├── lib/                  # 工具库
│   ├── auth.ts           # NextAuth 配置
│   └── prisma.ts         # Prisma 客户端
│
├── prisma/               # Prisma ORM
│   └── schema.prisma     # 数据库模型定义
│
├── public/               # 静态资源
└── ...                   # 其他配置文件
```

## 了解更多

要了解更多关于 Next.js 的信息，请查阅以下资源:

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 的特性和 API。
- [NextAuth.js 文档](https://next-auth.js.org) - 学习 NextAuth.js 的认证功能。
- [Prisma 文档](https://www.prisma.io/docs) - 学习 Prisma ORM 的使用方法。

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new) 来部署你的 Next.js 应用。

部署前，请确保设置所有必要的环境变量。
