import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function GamePage() {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    const player = await prisma.player.findUnique({
        where: {
            userId: session?.user?.id,
        },
    });
    if (!player) {
        return (
            <main>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold">Player não encontrado</h1>
                </div>
                <p>
                    Sua conta existe, mas não há um jogador associado a ela. Por favor, registre-se para criar um jogador.
                </p>
            </main>
        )
    }
    return (
        <main>
            <div className="flex border-b-gray-700 border-2 flex-col items-center justify-center ">
                <h1 className="text-2xl font-bold">Bem-vindo, {player.name}!</h1>
                <div className="mt-6 space-y-2">
                    <p>
                        <strong>Level:</strong>{player.level}
                    </p>
                    <p>
                        <strong>XP:</strong>{player.experience}
                    </p>
                    <p>
                        <strong>Moedas:</strong>{player.coins}
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className="text-xl font-bold mt-4">Ações</h1>
                <div className="flex flex-col items-center justify-center mt-4 w-1/2">
                    <Link className="flex bg-blue-500 justify-center items-center text-white w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" href="/pokedex">
                        Pokedex
                    </Link>
                    <button className="bg-blue-500 text-white w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button">
                        Equipe
                    </button>
                    <button className="bg-blue-500 text-white w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button">
                        Inventário
                    </button>
                    
                    <button className="bg-blue-500 text-white w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button">
                        Batalhar com pokémon
                    </button>
                    
                    <button className="bg-blue-500 text-white w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button">
                        Batalhar com jogador
                    </button>                    
                    <button className="bg-red-500 text-black w-2/4 py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button">
                        Deslogar
                    </button>
                </div>
            </div>
        </main>
    )
}
