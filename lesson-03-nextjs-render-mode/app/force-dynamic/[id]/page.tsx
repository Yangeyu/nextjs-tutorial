export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3001/api/posts', {
    cache: 'force-cache', 
  })
    .then((res) => res.json())
  return posts.map((post: any) => ({
    id: post.id.toString(),
  }))
}


// 运行pnpm run serve 启动后端服务
// 运行pnpm run dev 启动前端服务
// 1. 修改fetch的配置参数
// 2. 修改data/posts.json 文件
// 3. 前往 http://localhost:3000/blog/1 查看效果
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const serverTime = await fetch(`http://localhost:3001/api/server-time`, {
    // cache: 'no-store',
  }).then((res) => res.text())
  const cacheTime = await fetch(`http://localhost:3001/api/server-time`, {
    cache: 'force-cache',
  }).then((res) => res.text())
  const post = await fetch(`http://localhost:3001/api/posts/${id}`, {
    cache: 'force-cache', // 配置为force-cache，验证dynamic的影响效果
  })
    .then((res) => res.json())
  return (
    <div>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
        <p>serverTime: {serverTime}</p>
        <p>cacheTime: {cacheTime}</p>
      </div>
    </div>
  )
}
