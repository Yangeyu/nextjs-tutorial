import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <main className="p-4">
        <Counter />
      </main>
    </div>
  );
}
