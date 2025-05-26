import Link from "next/link";
import TodoList from "./components/todo-list";
import { Button } from "@/components/ui/button";

export default async function Home() {
  
  return (
    <div className="gap-4 size-full">
      <main className="p-4 size-full">
        <h1>欢迎来到首页 🎉</h1>
        <Button variant="link" asChild>
          <Link href="/admin">管理员面板</Link>
        </Button>
        <TodoList />
      </main>
    </div>
  );
}
