
import SearchForm from './_components/Search';
import PokemonCard from './_components/Card';
import API from './config/routes';
import MainComp from './_components/Main';

async function fetchPokemonTypes() {
  const res = await fetch(API.POKEMON_TYPES);
  return res.json();
}

async function fetchPokemonList() {
  const res = await fetch(API.POKEMON_LIST);
  const data = await res.json();

  return data.results.map((pokemon, index) => ({
    ...pokemon,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
  }));
}

export default async function HomePage() {
  const [typesData, pokemonData] = await Promise.all([fetchPokemonTypes(), fetchPokemonList()]);
  const pokemonTypes = typesData.results;
  const pokemonList = pokemonData;
  let name = ""
  console.log("outer name",name)
  return (
    <div className="container mx-auto p-4">
      <MainComp
       types={pokemonTypes}
       pokemonList={pokemonList}
       />

      {/* <SearchForm types={pokemonTypes} filter={name} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {pokemonList.filter(pm => pm.name.includes(name)).map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div> */}
    </div>
  );
}
