'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import useSWR from 'swr';

export default function ItemForm() {
  // 数据列表
  const { data, isLoading, error, mutate } = useSWR('http://localhost:3001/api/items');
  
  const [state, formAction] = useActionState(async (state: any, formData: any) => {
    const id = formData.get('id');
    const name = formData.get('name');
    const description = formData.get('description');
    const newItem = { id, name, description };
    // 提前更新数据列表, (false 表示不发送请求, 不触发 revalidate)
    // 
    mutate({data: data.data.map((item: any) => item.id == id ? newItem : item)}, false);
    // 发送更新数据请求
    await fetch('http://localhost:3001/api/items/update', {
      method: 'PUT',
      body: JSON.stringify(newItem),
    });
    // 重新校验数据列表
    mutate();
    return newItem;
  }, {
    id: 1,
    name: 'New Item 1',
    description: 'New Description 1',
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Data Modification</h1>
      <form action={formAction} className="flex flex-col gap-4" >
        <Input name="id" defaultValue={state.id} />
        <Input name="name" defaultValue={state.name} />
        <Input name="description" defaultValue={state.description} />
        <Button type="submit">Submit</Button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.data.map((item: any) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    );
}