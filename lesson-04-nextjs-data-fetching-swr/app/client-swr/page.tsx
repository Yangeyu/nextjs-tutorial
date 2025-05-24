'use client'
import { Button } from "@/components/ui/button";
import useSWR from "swr";

// Client SWR component that uses our custom hook
export default function ClientSWRContent() {
  // Using our custom hook for data fetching
  const { data, error, isLoading, mutate } = useSWR(`http://localhost:3001/api/items`);
  const items = data?.data || [];
  
  // Show loading state
  if (isLoading) return <div className="flex justify-center p-8">Loading...</div>;
  
  // Show error state
  if (error) return <div className="flex justify-center p-8 text-red-500">Failed to load data</div>;

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold mt-4">Client SWR Page</h1>
      <main className="p-4 flex flex-col gap-4 w-full max-w-md">
        {items.map((item: any) => (
          <div className="flex gap-4 items-center" key={item.id}>
            <Button>{item.name}</Button>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

