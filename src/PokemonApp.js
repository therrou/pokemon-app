import React, { useEffect, useState } from 'react'


import { fetchAllPokemon, getPokemon } from './helpers/fetchPokemon';


import './assets/styles/index.css'


export const PokemonApp = () => {
  //Initial States
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loader, setLoader] = useState(true);
  const URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect( () =>{
    const fetchData = async () => {
      const response = await fetchAllPokemon(URL);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await loadingPokemon(response.results);
      setLoader(false);

    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    const pokemonsData = await Promise.all(data.map(async pokemon => {
    const singlePokemon = await getPokemon(pokemon.url);
    return singlePokemon;
  }))
  setPokemons(pokemonsData)
}



    return (
        <>
        {loader ? <h3> Loading...</h3> : (
          <div class="row row-cols-1 row-cols-md-2 g-4">
             {
               pokemons.map((pokemon) => {
                
               })
             }
          </div>
        )}
          

        </>
    )
}
