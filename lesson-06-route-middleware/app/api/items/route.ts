// app/api/items/route.ts
import { NextRequest, NextResponse } from 'next/server';

// 模拟内存中存储
export let items = [
  { id: '1', name: 'Item 1', description: 'Description 1' },
  { id: '2', name: 'Item 2', description: 'Description 2' },
  { id: '3', name: 'Item 3', description: 'Description 3' },
];


// GET /api/items  — 返回所有 items
export async function GET() {
  return NextResponse.json({ data: items });
}

// POST /api/items — 新增一个 item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newItem = {
      id: String(Date.now()),        // 简单用时间戳做 id
      name: body.name,
      description: body.description,
    };
    items.push(newItem);
    return NextResponse.json({ data: newItem }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
