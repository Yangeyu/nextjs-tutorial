## 根目录配置package.json参考：
```json
// nextjs-tutorial-pnpm/package.json
{
  "name": "nextjs-tutorial-pnpm",
  "version": "1.0.0",
  "private": true, // 重要：工作区根项目通常是私有的
  "scripts": {
    "dev:lesson1": "pnpm --filter lesson1 dev",
    "build:lesson1": "pnpm --filter lesson1 build",
    "start:lesson1": "pnpm --filter lesson1 start",
    "lint:lesson1": "pnpm --filter lesson1 lint",

    "dev:lesson2": "pnpm --filter lesson2 dev",
    "build:lesson2": "pnpm --filter lesson2 build",
    // ... 为其他 lesson 添加脚本

    "dev:all": "pnpm --parallel --stream -r dev", // 并行运行所有项目的 dev 脚本 (如果端口不冲突)
    "build:all": "pnpm --parallel --stream -r build" // 并行构建所有项目
  },
  "devDependencies": {
    // 可以在这里添加整个工作区共享的开发依赖，例如
    // "typescript": "^5.0.0",
    // "eslint-config-custom": "workspace:*" // 如果你有自定义的共享 ESLint 配置
  }
}
```

- --filter <package_name>: pnpm 命令只对指定名称的 package 生效。package name 是在 lessons/lessonX/package.json 中定义的 name 字段。默认情况下，create-next-app 会将项目文件夹名作为 name。
- -r 或 --recursive: 对工作区中的所有 package 执行命令。
- --parallel: 并行执行。
- --stream: 立即输出子进程的输出。

## 运行和构建：
从根目录运行：
- 启动 lesson1 的开发服务器：
```bash
pnpm dev:lesson1
# 或者直接:
# pnpm --filter lesson1 dev
```

- 构建 lesson2：
```bash
pnpm build:lesson2
# 或者直接:
# pnpm --filter lesson2 build
```

## 添加/删除依赖：

- 为特定 lesson 添加依赖：

```bash
# 为 lesson1 添加 lodash
pnpm --filter lesson1 add lodash
pnpm --filter lesson1 add -D @types/lodash # 开发依赖
```

- 为根项目添加开发依赖 (例如，全局的 linting 工具)：

```bash
pnpm add -D -w eslint # -w 或 --workspace-root 表示安装到工作区根目录
```
