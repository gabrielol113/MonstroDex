'use client';
import { useEffect, useState } from "react";
import Card from "./Card/page";
import Link from "next/link";

export default function PokedexPage() {
    const [pokemonList, setPokemonList] = useState<{ name: string; url: string }[]>([]);
    const [page, setPage] = useState(1);
    const limit = 12;
    const offset = (page - 1) * limit;
    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                const data = await response.json();
                setPokemonList(data.results);
            }catch (error) {
                console.error("Error fetching Pokemon list:", error);
            }            
        }
        fetchPokemonList();   
    }, [page]);
    return (
        <main className="bg-red-400 w-full h-full">
            <div>
                <Link className="fixed top-4 left-4 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" href="/game">Homepage</Link>
            </div>
            <div className="flex flex-col items-center justify-center h-16">
                <h1 className="text-2xl font-bold">Pokedex</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-screen ">
                <div className="flex flex-wrap mx-10 gap-10 mt-4">     

                    {
                        pokemonList.map((pokemon, index) => (
                            <Card key={index} pokemon={{ name: pokemon.name, number: offset + index + 1, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + index + 1}.png`}}     />
                        ))
                    }
                </div>
            </div>
            <div className="fixed bottom-0 items-center justify-around h-16">
                <button className="fixed bottom-4 left-1/3 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button" onClick={() => {if(page !== 1) setPage(page - 1); else return;}}>Previous page</button>
                <button className="fixed bottom-4 right-1/3 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-md mt-4 hover:bg-blue-600 transition-colors" type="button" onClick={() => setPage(page + 1)}>Next page</button>
            </div>
        </main>
    )
}