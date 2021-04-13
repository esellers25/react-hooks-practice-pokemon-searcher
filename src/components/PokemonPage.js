import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r =>r.json())
    .then(setPokemon)
  }, [])
  
  function handleSearch(newSearchInput){
    setSearchInput(newSearchInput)
  }


  const filteredPoke = pokemon.filter((pokemon) => pokemon.name.includes(searchInput))

  function handleNewPokemon(newPokemon){
    const updatedPoke = [...filteredPoke, newPokemon]
    setPokemon(updatedPoke)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon={handleNewPokemon}/>
      <br />
      <Search searchInput={searchInput} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPoke}/>
    </Container>
  );
}

export default PokemonPage;
