import React from 'react'
import { PokemonCard } from './PokemonCard'

export const PokemonScreen = ({searchPokemon}) => {
    return (
        <div className='single-card-container'>
             <PokemonCard pokemon={searchPokemon}/>
        </div>
    )
}