export const PokemanDetails = ({ pokeData }) => {
  return (
    <section className="card pokeman-card text-capitalize mx-auto my-3">
      <figure className="pokeman-bg">
        <img
          className="sprites-img"
          src={pokeData.sprites.other.dream_world.front_default}
          alt={pokeData.name}
        />
      </figure>
      <h2>{pokeData.name}</h2>
      <div className="poketypes mt-2 mb-3">
        <p>
          {pokeData.types[0].type.name},{" "}
          {pokeData.types[1] && <span> {pokeData.types[1].type.name}</span>}
        </p>
      </div>
      <section className="grid-three-col">
        <p className="col-4">
          <span className="weight">height:{pokeData.height}</span>
        </p>
        <p className="col-4">
          <span className="weight">weight:{pokeData.weight}</span>
        </p>
        <p className="col-5">
          <span className="weight">stats:{pokeData.stats[5].base_stat}</span>
        </p>
      </section>
      <section className="grid-three-col">
        <div className="pokeman-info">
          <p>{pokeData.height}</p>
          <br />
          <span>experience:</span>
        </div>
        <div className="pokeman-info">
          <p>{pokeData.weight}</p>
          <br />
          <span>Attacks:</span>
        </div>
        <div className="pokeman-info">
          <p>{pokeData.abilities[0].ability.name}</p>
          <br />
          <span>abilities:</span>
        </div>
      </section>
    </section>
  );
};
