import fastify from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from '@fastify/cors';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建 Fastify 实例
const server = fastify({ logger: true });

// 注册 CORS 插件
server.register(cors, {
  origin: true // 允许所有来源，也可以指定特定域名
});

// 定义路由
// GET /api/posts - 获取所有文章
server.get('/api/posts', async (request, reply) => {
  // 读取 posts.json 数据
  const postsPath = path.join(__dirname, '../data/posts.json');
  const postsData = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
  return postsData;
});

// GET /api/posts/:id - 获取特定 ID 的文章
server.get('/api/posts/:id', async (request, reply) => {
  const { id } = request.params;
  const postsPath = path.join(__dirname, '../data/posts.json');
  const postsData = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
  const post = postsData.find(post => post.id === Number(id));
  
  if (!post) {
    reply.code(404).send({ error: '文章未找到' });
    return;
  }
  
  return post;
});

// 获取服务器时间
server.get('/api/server-time', async (request, reply) => {
  return new Date().toISOString();
});

// 启动服务器
const start = async () => {
  try {
    await server.listen({ port: 3001 });
    const address = server.server.address();
    const port = address && typeof address === 'object' ? address.port : '';
    console.log(`服务器运行在 ${port} 端口`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); 