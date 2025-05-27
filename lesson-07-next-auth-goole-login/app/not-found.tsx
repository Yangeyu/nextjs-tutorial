export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold">页面未找到</h2>
      <p className="mt-4">抱歉，我们找不到您访问的页面。</p>
      <a href="/" className="mt-6 inline-block text-blue-600">
        返回首页
      </a>
    </div>
  )
}
