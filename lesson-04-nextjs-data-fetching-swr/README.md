# Next.js 教程 - lesson-04

这是一个使用 [Next.js](https://nextjs.org) 框架的项目，展示了不同的数据获取方法。

## 项目概述

本课程主要介绍了 Next.js 中的数据获取策略，包括：

- 服务端数据获取
- 客户端数据获取
- 使用 SWR 进行客户端数据获取和缓存
- 使用 Server Actions 和 SWR 进行数据修改

## 快速开始

首先，启动 API 服务器：

```bash
pnpm serve
```

然后，在另一个终端中启动开发服务器：

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

- `/app/server` - 服务端数据获取示例
- `/app/client` - 客户端数据获取示例
- `/app/client-swr` - 使用 SWR 进行客户端数据获取示例
- `/app/components` - 页面级组件
- `/service` - 模拟后端 API 服务
- `/components` - 共享 UI 组件

## API 服务

项目包含一个使用 Hono 构建的简单 API 服务，提供以下接口：

- `GET /api/items` - 获取所有项目
- `GET /api/items/:id` - 根据 ID 获取单个项目
- `PUT /api/items/update` - 更新项目信息

## 数据修改

项目演示了如何使用 React Server Actions 结合 SWR 的乐观更新功能来实现数据修改：

1. 使用 `useActionState` 处理表单提交
2. 使用 SWR 的 `mutate` 函数进行乐观更新
3. 发送实际请求到后端 API
4. 重新验证数据确保一致性

## 技术栈

- Next.js 15
- React 19
- SWR - 用于数据获取和缓存
- Hono - 用于构建 API 服务
- Tailwind CSS - 用于样式设计
- React Server Actions - 用于表单处理

## 学习资源

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的特性和 API
- [SWR 文档](https://swr.vercel.app/zh-CN) - 了解 SWR 的使用方法
- [Hono 文档](https://hono.dev) - 了解 Hono 的使用方法
- [React Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) - 了解服务器端操作
