import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

// Create a new Hono app instance
const app = new Hono();

// Enable CORS
app.use('/*', cors());

// Mock data
const items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
  { id: 4, name: 'Item 4', description: 'Description for item 4' },
  { id: 5, name: 'Item 5', description: 'Description for item 5' },
];

// GET /api/items - Get all items
app.get('/api/items', (c) => {
  return c.json({
    success: true,
    data: items,
  });
});

// GET /api/items/:id - Get item by ID
app.get('/api/items/:id', (c) => {
  const id = parseInt(c.req.param('id'));
  const item = items.find((item) => item.id === id);

  if (!item) {
    return c.json({
      success: false,
      message: 'Item not found',
    }, 404);
  }
  

  return c.json({
    success: true,
    data: item,
  });
});

app.put('/api/items/update', async (c) => {
  const newItem = await c.req.json();
  items.forEach((item) => {
    if (item.id == newItem.id) {
      item.name = newItem.name;
      item.description = newItem.description;
    }
  });
  return c.json({
    success: true,
    data: items,
  });
});

const PORT = 3001;

console.log(`Server is running on port ${PORT}`);

serve({
  fetch: app.fetch,
  port: Number(PORT),
}); 
