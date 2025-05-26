# Next.js 课程 - lesson 06

这个项目展示了 Next.js 中的路由守卫、中间件和 RESTful API 实现，包含以下核心功能：

## 项目功能

1. **身份验证与路由守卫**
   - 使用中间件（Middleware）保护 `/admin` 路由
   - 基于 Cookie 的简单身份验证机制
   - 未登录自动重定向到登录页

2. **RESTful API**
   - 完整的 CRUD 操作实现
   - 支持 GET、POST、PUT、DELETE 方法
   - 模拟数据存储（内存数组）

3. **前端交互**
   - 待办事项列表的增删改查
   - 客户端组件与服务端 API 交互

## 项目结构

```
lesson-06/
├── app/                   # 应用主目录
│   ├── api/               # API 路由
│   │   └── items/         # 待办事项 API
│   │       ├── route.ts   # GET/POST - 获取所有/创建
│   │       └── [id]/      # 动态路由参数
│   │           └── route.ts # GET/PUT/DELETE - 单项操作
│   ├── admin/             # 管理员页面（受保护路由）
│   ├── login/             # 登录页面
│   ├── components/        # 页面组件
│   │   └── todo-list.tsx  # 待办事项列表组件
│   └── page.tsx           # 首页
├── components/            # 共享 UI 组件
├── middleware.ts          # 全局中间件配置
└── lib/                   # 工具函数
```

## 核心概念演示

1. **中间件 (Middleware)**
   - 路由拦截与保护
   - 请求/响应修改
   - 条件重定向

2. **API 路由**
   - 基于文件系统的 API 路由
   - 动态路由参数 (`[id]`)
   - 同路径不同 HTTP 方法的处理

3. **客户端组件**
   - `'use client'` 指令
   - React Hooks 状态管理
   - 客户端 API 请求

## 开始使用

1. 安装依赖：
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 示例流程

1. 访问首页，查看待办事项列表
2. 尝试添加和删除待办事项
3. 点击"管理员面板"链接
4. 被重定向到登录页面
5. 点击"模拟登录"按钮
6. 成功访问管理员面板

## 技术栈

- Next.js 14+
- React 18+
- TypeScript
- Shadcn UI 组件库
