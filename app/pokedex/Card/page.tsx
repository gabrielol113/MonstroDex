'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
type CardProps = {
    name: string;
    number: number;
    sprite: string;
}
export default function Card({ pokemon }: { pokemon: CardProps }) {
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        async function fetchPokemonTypes() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.number}`);
                const data = await response.json();
                const pokemonTypes = data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name);
                setTypes(pokemonTypes);
            } catch (error) {
                console.error("Error fetching Pokemon types:", error);
            }
        }
        fetchPokemonTypes();
    }, [pokemon.number]);
    console.log("Types:", types);
    return(
        <div className="w-64 h-64 bg-black rounded-4xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="flex h-12 border-b-2 border-b-white items-center justify-center">
                <h1 className="text-white mt-2">#{pokemon.number || "Pokemon Number"}</h1>
                <h1 className="text-white mt-2 ml-2">{pokemon.name || "Pokemon Name"}</h1>
            </div>
            <div>
                <Image src={pokemon.sprite} loading="eager" alt={"Pokemon " + pokemon.number} width={100} height={100} className="mx-auto" />
            </div>
            <div className="flex flex-col w-full h-12 border-t-2 border-t-white items-center justify-center">
                <h1 className="text-white w-full text-center mt-8 border-b-2 ml-2">Types</h1>
                <div className="flex flex-wrap items-center justify-center w-full h-20 pt-4  text-white rounded-md">
                    {
                        types.length > 0 ? (
                            types.map((type) => {
                                if(type == 'grass') {
                                    return (
                                        <span key={type} className="mr-2 bg-green-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                } else if(type == 'fire') {
                                    return (
                                        <span key={type} className="mr-2 bg-red-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                } else if(type == 'water') {
                                    return (
                                        <span key={type} className="mr-2 bg-blue-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                } else if(type == 'poison'){
                                    return (
                                        <span key={type} className="mr-2 bg-purple-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'flying'){
                                    return (
                                        <span key={type} className="mr-2 bg-sky-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'bug'){
                                    return (
                                        <span key={type} className="mr-2 bg-lime-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'normal'){
                                    return (
                                        <span key={type} className="mr-2 bg-gray-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'electric'){
                                    return (
                                        <span key={type} className="mr-2 bg-yellow-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'ground'){
                                    return (
                                        <span key={type} className="mr-2 bg-yellow-800 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'fairy'){
                                    return (
                                        <span key={type} className="mr-2 bg-pink-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'fighting'){
                                    return (
                                        <span key={type} className="mr-2 bg-red-800 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'psychic'){
                                    return (
                                        <span key={type} className="mr-2 bg-pink-800 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }else if(type == 'rock'){
                                    return (
                                        <span key={type} className="mr-2 bg-stone-500 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                } else if(type == 'ghost'){
                                    return (
                                        <span key={type} className="mr-2 bg-violet-800 ml-2 p-2 rounded-md">
                                            {type}
                                        </span>
                                    );
                                }
    })
                        ) : (
                            <span>No types available</span>
                        )
                        }
                </div>
            </div>
        </div>
    )
}
