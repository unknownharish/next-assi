"use client"
import { useState } from 'react'
import SearchForm from './Search'
import PokemonCard from './Card'

export default function MainComp(props) {
    const [name, setname] = useState("")
    return (
        <>
            <SearchForm types={props.types} setName={setname} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {props.pokemonList.filter(pm => pm.name.includes(name)).map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}
