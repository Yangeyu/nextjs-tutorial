# Next.js lesson-05

本项目演示了 Next.js App Router 的高级功能，包括并行路由、拦截路由和加载状态。

## 功能特点

- **并行路由**: 使用 `@folder` 约定在同一布局中渲染多个页面
  - `@analytics` - 与主内容一起加载的分析组件
  - `@sidebar` - 与主内容一起加载的侧边栏组件

- **加载状态**: Next.js 加载 UI 的演示
  - `loading-demo` - loading.tsx 实现示例

- **动态路由**:
  - 带有动态参数的博客文章
  - 仪表盘布局

## 技术栈

- Next.js 15.3.2 (App Router)
- React 19
- TypeScript
- TailwindCSS 4
- 开发环境使用 Turbopack

## 开始使用

首先，运行开发服务器:

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
/app
  ├── @analytics/       # 分析数据的并行路由
  ├── @sidebar/         # 侧边栏的并行路由
  ├── blog/             # 博客部分（带动态路由）
  ├── dashboard/        # 仪表盘部分 (演示Error 页面)
  ├── loading-demo/     # 加载状态演示
  │    └── loading.tsx  # 加载 UI 组件
  ├── layout.tsx        # 根布局
  └── page.tsx          # 首页
```

## 核心概念

- **并行路由**: 允许在同一布局中同时渲染多个可独立导航的页面
- **加载状态**: 在页面内容加载时显示加载 UI
- **拦截路由**: 创建类似模态框的体验，一个路由可以拦截另一个路由的渲染

## 了解更多

- [Next.js 并行路由文档](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Next.js 加载 UI 文档](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [Next.js 拦截路由文档](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
