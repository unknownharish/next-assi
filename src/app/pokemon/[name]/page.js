import Image from 'next/image';
import axios from 'axios';
import Breadcrumb from '@/app/_components/Breadcumb';
import API from '@/app/config/routes';

async function fetchPokemonDetails(name) {
    try {
        const res = await axios.get(`${API.POKEMON_DETAILS + name}`);
        return res.data; // Return just the data
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw new Error('Failed to fetch Pokémon data');
    }
}

export default async function PokemonDetailPage({ params }) {
    const { name } = params;

    // Fetch Pokémon data server-side
    const pokemon = await fetchPokemonDetails(name);

    return (
        <div className="container mx-auto p-7">
            <Breadcrumb path={`/pokemon/${pokemon?.name}`} />

            <div className="bg-orange-300  rounded-lg shadow-lg  max-w-md mx-auto">
                <div className="flex justify-center mt-4 bg-green-400 w-full">
                    <Image
                        src={pokemon?.sprites?.front_default} 
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </div>

                <div className="rounded-b-lg p-7 mt-4">
                    <h2 className="text-lg font-bold mb-2 capitalize">
                        Name: {pokemon?.name}
                    </h2>
                    <p className="text-sm">
                        <span className="font-bold">Type:</span> {pokemon?.types?.map(type => type.type.name).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Stats:</span> {pokemon?.stats?.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Abilities:</span> {pokemon?.abilities?.map(ability => ability.ability.name).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Some Moves:</span> {pokemon?.moves?.slice(0, 5).map(move => move.move.name).join(', ')} 
                    </p>
                </div>
            </div>
        </div>
    );
}
