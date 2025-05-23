# Next.js 数据获取与缓存策略（Lesson 03）

这是一个基于 [Next.js](https://nextjs.org) 的示例项目，演示了不同的数据获取策略和缓存方式。

## 项目介绍

本项目展示了 Next.js 中的三种渲染模式：

1. **SSG（静态站点生成）** - 使用 `force-static` 或 `cache: 'force-cache'`
2. **SSR（服务端渲染）** - 使用 `force-dynamic` 或 `cache: 'no-store'`
3. **ISR（增量静态再生成）** - 使用 `revalidate` 参数

## 目录结构

```
lesson-03/
├── app/                    # 应用主目录
│   ├── blog/[id]/          # 博客文章页面（基本示例）
│   ├── force-dynamic/[id]/ # 强制动态渲染示例
│   ├── force-static/[id]/  # 强制静态渲染示例
│   ├── revalidate/[id]/    # ISR 渲染示例
│   └── components/         # 共享组件
├── data/                   # 数据文件
│   └── posts.json          # 示例文章数据
├── service/                # 后端服务
│   └── api.mjs             # Fastify API 服务
├── public/                 # 静态资源
└── ...配置文件
```

## 快速开始

1. 安装依赖：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

2. 启动 API 服务：

```bash
npm run serve
# 或
yarn serve
# 或
pnpm serve
```

3. 启动 Next.js 开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

4. 浏览器访问 [http://localhost:3000](http://localhost:3000)

## 数据获取示例

本项目包含四个不同的路由，展示了不同的数据获取策略：

- `/blog/[id]` - 基本示例，同时展示不同缓存策略
- `/force-dynamic/[id]` - 使用 `force-dynamic` 强制服务端渲染
- `/force-static/[id]` - 使用 `force-static` 强制静态生成
- `/revalidate/[id]` - 使用 `revalidate` 增量静态再生成

## API 服务

项目包含一个使用 Fastify 创建的简单 API 服务：

- `GET /api/posts` - 获取所有文章
- `GET /api/posts/:id` - 获取特定 ID 的文章
- `GET /api/server-time` - 获取服务器时间（用于测试缓存）

## 学习要点

- Next.js 的 `fetch` API 与缓存配置
- 使用 `dynamic` 和 `revalidate` 控制渲染策略
- 不同渲染模式的选择和权衡

## 参考资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Next.js 数据获取文档](https://nextjs.org/docs/app/building-your-application/data-fetching)
