"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const getItems = async () => {
  const res = await fetch('http://localhost:3000/api/items');
  const data = await res.json();
  return data.data;
};

const deleteItem = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/items/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

const addItem = async () => {
  const res = await fetch('http://localhost:3000/api/items', {
    method: 'POST',
    body: JSON.stringify({ name: 'New Item', description: 'New Item Description' }),
  });
  return res.json();
};

export default function TodoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems().then(setData);
  }, []);
  
  const onDeleteItem = async (id: string) => {
    deleteItem(id).then(() => {
      getItems().then(setData);
    });
  };

  const onAddItem = async () => {
    addItem().then(() => {
      getItems().then(setData);
    });
  };

  return (
    <div className="flex flex-col gap-2 w-100">
      <div>TodoList</div>
      {data.map((item: any) => (
        <div className="flex gap-2 justify-between" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button variant="destructive" onClick={() => onDeleteItem(item.id)}>Delete</Button>
        </div>
      ))}
      <Button onClick={() => onAddItem()}>Add</Button>
    </div>
  );
}