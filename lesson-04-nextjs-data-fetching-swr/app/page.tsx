import { Button } from "@/components/ui/button";
import Link from "next/link";
import ItemForm from "./components/item-form";

export default async function Home() {

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <main className="p-4 flex flex-col gap-4 w-100">
        <Button><Link href="/server">Server Page</Link></Button>
        <Button><Link href="/client">Client Page</Link></Button>
        <Button><Link href="/client-swr">Client SWR Page</Link></Button>
        <ItemForm />
        
      </main>
    </div>
  );
}
