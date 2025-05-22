# Next.js 教程项目（lesson-02）

本项目基于 [Next.js](https://nextjs.org) 框架，已通过 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 初始化，并采用 TypeScript、Tailwind CSS 等现代前端技术栈。

## 目录结构

```
lesson-02-nextjs-introduce-routing-image/
├── app/                # 应用主目录，包含页面和路由
│   ├── about/          # 关于页面
│   └── blog/[slug]/    # 博客详情页（动态路由）
├── assets/             # 静态资源
├── components/         # 组件库
│   └── ui/             # UI 组件
├── lib/                # 工具库和辅助函数
├── public/             # 公共静态资源
├── next.config.ts      # Next.js 配置文件
├── package.json        # 项目依赖和脚本
├── postcss.config.mjs  # PostCSS 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.mjs   # ESLint 配置
└── README.md           # 项目说明文档
```

## 快速开始

1. 安装依赖：

```bash
pnpm install
# 或
npm install
# 或
yarn install
```

2. 启动开发服务器：

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 主要特性

- 使用 Next.js 13+ App Router 架构
- TypeScript 支持
- Tailwind CSS 集成
- 组件化开发，支持 UI 组件复用
- 动态路由示例（如 `blog/[slug]`）

## 目录说明

- `app/` 目录下为页面和路由，支持嵌套路由和动态路由
- `components/` 存放可复用的 React 组件
- `lib/` 用于存放工具函数或数据请求逻辑
- `public/` 用于存放公开的静态资源（如图片、favicon 等）
- `assets/` 可用于存放项目相关的其他资源文件

## 参考文档

- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
