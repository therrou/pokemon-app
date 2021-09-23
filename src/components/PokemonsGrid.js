import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

import { ButtonPagination } from './ButtonPagination'
import { DropdownResults } from './DropdownResults'
import { PokemonCard } from './PokemonCard'
import { SortByComponent } from './SortByComponent'



export const PokemonsGrid = ({pokemons, paginationPrev, setResults, paginationNext }) => {
    
    const [data, setData] = useState([]);
    const [sort, setSort] = useState('name');
    useEffect( () => {
        const sortArray = (type) => {
            const types = {
              id: 'id',
              name: 'name',
              height: 'height',
              height_desc: 'height_desc',
              weight: 'weight',
              weight_desc: 'weight_desc'

            };
            const sortProperty = types[type];
            if(sortProperty === 'name'){
               setData([...pokemons].sort((a, b) => b[sortProperty] - a[sortProperty]));
            } else if(sortProperty === 'id') {
                setData([...pokemons].sort((a, b) => b[sortProperty] - a[sortProperty]));
            } else if(sortProperty === 'height') {
                setData([...pokemons].sort((a, b) => b[sortProperty] - a[sortProperty]));
            } else if(sortProperty === 'weight') {
                setData([...pokemons].sort((a, b) => b[sortProperty] - a[sortProperty]));
            } else if(sortProperty === 'weight_desc') {
                setData([...pokemons].sort((a, b) => a.weight - b.weight));
            } else if(sortProperty === 'height_desc') {
                setData([...pokemons].sort((a, b) => a.height - b.height));
            }     

        }
        sortArray(sort);
    }, [setSort, pokemons, sort]);


    return (
        <>
        <div className='pagination-buttons-container'> 
            <ButtonPagination text={'PREVIOUS'} pagination={paginationPrev}/> 
                <DropdownResults setResults={setResults} />
                <SortByComponent setSort={setSort} />
             <ButtonPagination text={'NEXT'} pagination={paginationNext}/>
          </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pokemon-grid-container">
              {
                  data.map(pokemon =>
                    <PokemonCard 
                    key={pokemon.id}
                    pokemon={pokemon} />)
                }
            </div>

            <div className='pagination-buttons-bottom-container'> 
                <ButtonPagination text={'PREVIOUS'} pagination={paginationPrev}/> 
                <ButtonPagination text={'NEXT'} pagination={paginationNext}/>
            </div>
        </>
    )
}
