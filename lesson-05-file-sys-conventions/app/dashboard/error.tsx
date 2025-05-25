'use client'
import { Button } from "@/components/ui/button";

export default function DashboardError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="bg-red-500">
      Dashboard Error {error.message}
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}