import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <main className="p-4 flex flex-col gap-4">
        <Button>
          <Link href="/blog/article">Article 1</Link>
        </Button>
        <Button>
          <Link href="/dashboard">Dashboard Error Page</Link>
        </Button>
        <Button>
          <Link href="/loading-demo">Loading Demo</Link>
        </Button>
        <Button>
          <Link href="/not-exist">Not Found</Link>
        </Button>
      </main>
    </div>
  );
}
