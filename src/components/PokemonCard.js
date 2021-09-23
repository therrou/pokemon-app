import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({pokemon}) => {

    

    return (
        <>
            
            <div className={`card ${pokemon.types[0].type.name}`}>
            <Link to={`/pokemon/${pokemon.id}`}> <img height='100px;'src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default} className="card-img-top" alt="{pokemon.name}" /> </Link>
                <div className="card-body">
                    <h5 className="card-title"> #{pokemon.id}  <b>{pokemon.name.toUpperCase()} </b> </h5>
                    <p className="card-text">
                        <b> Height:</b> {pokemon.height} - <b>Weight:</b> {pokemon.weight}
                    </p>
                    <div className="card-text types-container">
                        <b>Types:</b> {pokemon.types.map((type, i) => { return <div key={type.type.name + i} className={`type-container ${type.type.name}`}> {type.type.name.toUpperCase()} </div>})}
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"> <b>Abilities:</b> {pokemon.abilities.map((ability,i) => {return <li key={ability+i}>{ability.ability.name.toUpperCase()}</li>})}</small>
                    </div>
                    <div className='link-container'> <Link to={`/pokemon/${pokemon.id}`}> Read More... </Link> </div>
                </div>
            </div>
        </>
    )
}
