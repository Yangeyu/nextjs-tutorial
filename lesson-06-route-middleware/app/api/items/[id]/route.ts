// app/api/items/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// 引用同一个内存数组
// （在实际项目中应替换为数据库调用）
import { items } from '../route'; 

// GET /api/items/:id — 查询单条
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const item = items.find((i) => i.id === params.id);
  if (!item) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
  return NextResponse.json({ data: item });
}

// PUT /api/items/:id — 更新
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    let updated: typeof items[0] | null = null;
    items.forEach((i) => {
      if (i.id === params.id) {
        i.name = body.name;
        i.description = body.description;
      }
    })
  
    if (!updated) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ data: updated });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}

// DELETE /api/items/:id — 删除
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
  items.splice(idx, 1);
  return NextResponse.json({ data: { id } }, { status: 200 });
}
