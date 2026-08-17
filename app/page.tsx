import { auth, signOut } from "@/auth";
import Login from "./login/page";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="bg-red-500 h-screen flex items-center justify-center">
      {
  session ? (
        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
          {
            session.user?.image && (
              <img src={session.user.image} alt={session.user.name ?? "Usuário"} className="w-16 h-16 rounded-full mb-4" />
            )
          }
          <p className="mb-4">You are logged in with Google.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">You are not logged in.</h1>
          <Link href="/login" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Go to Login Page
          </Link>  
        </div>
      )
      }
    </div>
  );
}
