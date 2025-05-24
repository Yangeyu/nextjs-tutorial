import { Button } from "@/components/ui/button";

const fetchItems = async () => {
  const res = await fetch('http://localhost:3001/api/items')
  const {data} = await res.json()
  console.log(data)
  return data
}
export default async function ServerPage() {

  const items = await fetchItems()
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Server Page</h1>
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
