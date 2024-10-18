import Breadcrumb from '@/app/_components/Breadcumb';
import API from '@/app/config/routes';
import Image from 'next/image';

async function fetchPokemonDetails(name) {
    const res = await fetch(`${API.POKEMON_DETAILS + name} `);
    if (!res.ok) {
        throw new Error('Failed to fetch Pokemon details');
    }
    return res.json();
}

export default function PokemonDetailPage({ pokemon }) {
    return (
        <div className="container mx-auto p-4">
            <Breadcrumb path={`/ pokemon / ${pokemon?.name} `} />

            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">

                {/* Pokémon Image */}
                <div className="flex justify-center mt-4">
                    <Image
                        src={pokemon?.sprites?.front_default} // Adjusted to use the correct sprite URL
                        alt={pokemon?.name}
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </div>

                {/* Pokémon Details */}
                <div className="bg-yellow-200 rounded-b-lg p-4 mt-4">
                    <h2 className="text-lg font-bold mb-2 capitalize">
                        Name: {pokemon?.name}
                    </h2>
                    <p className="text-sm">
                        <span className="font-bold">Type:</span> {pokemon?.types?.map(type => type.type.name).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Stats:</span> {pokemon?.stats?.map(stat => `${stat.stat.name}: ${stat.base_stat} `).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Abilities:</span> {pokemon?.abilities?.map(ability => ability.ability.name).join(', ')}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Some Moves:</span> {pokemon?.moves?.slice(0, 5).map(move => move.move.name).join(', ')} {/* Show first 5 moves */}
                    </p>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams(context) {
    const { name } = context.params;

    try {
        const pokemon = await fetchPokemonDetails(name);
        console.log("pokemon", pokemon)
        return {
            props: { pokemon },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true,
        };
    }
}
