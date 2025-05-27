import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  

  return (
    <div className="flex flex-col gap-4 items-center">
      <main className="p-4 max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Next.js Auth Demo</h1>
        <p className="text-xl mb-8">A simple authentication example with NextAuth.js</p>
        
        <div className="flex gap-4 justify-center">
          {session ? (
            <>
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <SignOutButton />
            </>
          ) : (
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </main>
      
      <footer className="flex gap-4 text-sm text-gray-500">
        {session ? (
          <p>Signed in as: {session.user?.name}</p>
        ) : (
          <p>Not signed in</p>
        )}
      </footer>
    </div>
  );
}
