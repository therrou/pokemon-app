import React, { useEffect, useState } from 'react'

import { fetchAllPokemon, getPokemon } from './helpers/fetchPokemon';

import { Navbar } from './components/Navbar';
import { PokemonsGrid } from './components/PokemonsGrid';

import './assets/styles/index.css'
import { PokemonScreen } from './components/PokemonScreen';


export const PokemonApp = () => {
  //Initial States
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loader, setLoader] = useState(true);
  const [results, setResults] = useState('10')
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [offset, setOffset] = useState('0')
  const [errorMessage, setErrorMessage] = useState(0)

  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${results}&offset=${offset}`;


  useEffect( () =>{
    const fetchData = async () => {
      const response = await fetchAllPokemon(URL);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await loadingPokemon(response.results);
      setLoader(false);
    }
    fetchData();
  }, [URL])

  const loadingPokemon = async (data) => {
    const pokemonsData = await Promise.all(data.map(async pokemon => {
    const singlePokemon = await getPokemon(pokemon.url);
    return singlePokemon;
  }))
  setPokemons(pokemonsData)
}

const filterPokemon = async (query, data) => {
  try {
    setLoader(true);
    const baseURL = `https://pokeapi.co/api/v2/${query}/${data}?limit=${results}&offset=${offset}`
    const pokemon = await fetch(baseURL);
    const resp = await pokemon.json();
    if(resp.pokemon) {
      let pokemonFiltered = []
      for (let i = 0; i < resp.pokemon.length; i++) {
        pokemonFiltered.push(resp.pokemon[i].pokemon)
      }
      await loadingPokemon(pokemonFiltered);
    } else {
      setErrorMessage(0)
      setSearchPokemon(resp)
    }
    setLoader(false);
  } catch (error) {
    setErrorMessage(1)
    console.log('Not results for your search. Try again!')
    setLoader(false);
  }
}



const paginationNext = async () => {
  setLoader(true);
  const page = await fetchAllPokemon(nextPage)
  await loadingPokemon(page.results);
  setNextPage(page.next);
  setPrevPage(page.previous); 
  setOffset(parseInt(results)+parseInt(offset))
  setLoader(false);
}

const paginationPrev = async () => {
    if(prevPage){
      setLoader(true);
      const data = await fetchAllPokemon(prevPage)
      await loadingPokemon(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setOffset(parseInt(offset) - parseInt(results))
      setLoader(false);
    }
}

    return (
        <>
        <Navbar  filterPokemon={filterPokemon} />  
          {loader ? <img className='loader-img'src='https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg' alt='loader' /> : 
            searchPokemon  ? 
                    <div className='container'>
                      {
                        !errorMessage ? <PokemonScreen searchPokemon={searchPokemon}  /> : <h1 className='error-message'> No results with that name. Try again! </h1>
                      }
                      
                    </div>
                  
                  : 
                  <PokemonsGrid  pokemons={pokemons} paginationNext={paginationNext} paginationPrev={paginationPrev} setResults={setResults}/>
          }
        </>
    )
}
