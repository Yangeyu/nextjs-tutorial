import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <main className="p-4">
        <Button>Main</Button>
      </main>
      <footer className="flex gap-4">Footer</footer>
    </div>
  );
}
