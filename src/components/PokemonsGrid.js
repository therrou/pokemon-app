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
        const sortArray = type => {
            const types = {
              id: 'id',
              name: 'name',
              height: 'height',
              weight: 'weight',
            };
            const sortProperty = types[type];
            const sorted = [...pokemons].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
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
