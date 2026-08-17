'use client';
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Username:", username);
    }
    async function handleGoogleSignIn() {
        await signIn("google", { callbackUrl: "/" });
    }
    return (
        <div className="bg-red-100 p-6 rounded-md shadow-md">
            <div className="flex flex-col items-center justify-center mt-4">
                Continue with Google
                <button className="bg-red-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-red-600 transition-colors" type="button" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </button>
                <div className="flex w-full my-8">
                    <hr className="border-gray-300 mt-3 w-1/2 mr-1" />or<hr className="mt-3 border-gray-300 ml-1 w-1/2" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-96 gap-4">
                <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="username">Username</label>
                    <input
                        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        value={username}
                        onChange={ (e) => setUsername(e.target.value) }
                        placeholder="Username" 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                        placeholder="Password"
                    />
                </div>
                <span>If you don&apos;t have an account, <Link href="/register" className="text-blue-500 hover:underline">register here</Link>.</span>
                <div className="flex items-center justify-center mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
/*
    <div className="flex w-full">
        <hr className="border-gray-300 mt-3 w-1/2 mr-1" />or<hr className="mt-3 border-gray-300 ml-1 w-1/2" />
    </div>
    <div className="flex items-center justify-center mt-4">
        <button className="bg-red-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-red-600 transition-colors" type="button" onClick={handleGoogleSignIn}>
            Sign in with Google
        </button>
    </div>
*/