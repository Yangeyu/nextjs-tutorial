import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import nextLogo from "@/assets/next.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* link */}
        <section className="flex gap-4">
          <Button variant="link" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/blog/first-blog">First Blog</Link>
          </Button>
        </section>
        
        {/* image */}
        <section className="flex gap-4">
          <Image src={nextLogo} alt="nextjs logo" width={100} height={100} />
          <Image src="/globe.svg" alt="globe logo" width={100} height={100} />
        </section>

        {/* image sizes */}
        <Image
          src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="random image"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Image
          src="/demo.jpg"
          alt="random image"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </main>
    </div>
  );
}
