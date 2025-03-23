import "./App.css";
import { useEffect, useState } from "react";
import { PokemanDetails } from "./pokemanDetails";
import { ShimmerCard } from "./ShimmerCards";

export const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [delayed, setDelayed] = useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const DetailsPokeman = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const DetailsPokemanData = data.results.map(async (currPokeman) => {
        const res = await fetch(currPokeman.url);
        const data = await res.json();
        console.log(data);
        return data;
      });

      const DetailsResponse = await Promise.all(DetailsPokemanData);
      setPokemon(DetailsResponse);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    DetailsPokeman();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (JSON.stringify(searchData) !== JSON.stringify(delayed)) {
      const timer = setTimeout(() => {
        setDelayed(searchData);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [searchData]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    <section className="container">
      <header className="text-center">
        <h1 style={{ fontWeight: "bold" }}>Fetching Pokemon</h1>
        <input
          className="inputvalue"
          type="text"
          placeholder="Enter the Pokémon name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="d-flex flex-wrap container pokecontainer">
        {delayed.length === 0 ? (
          <ShimmerCard />
        ) : (
          delayed.map((pokeData) => (
            <PokemanDetails key={pokeData.name} pokeData={pokeData} />
          ))
        )}
      </div>
    </section>
  );
};
