'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then(res => res.json())
      .then(data => setItems(data.data))
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Client Page</h1>
      <main className="p-4 flex flex-col gap-4">
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
