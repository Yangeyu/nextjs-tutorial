export default async function LoadingDemo() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div className="bg-blue-500">Loading Demo</div>;
}