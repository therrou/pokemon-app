import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import loaderImg from '../assets/img/loader.jpg'
export const PokemonView = () => {

    const [pokemon, setPokemon] = useState('');
    const [loader, setLoader] = useState(true);
    const {id } = useParams()
    const history = useHistory();
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const handleReturn = () => {
            history.goBack();
    }

    useEffect( () => {
            const fetchPokemon = async () => {
                const resp = await fetch(URL);
                const data = await resp.json();
                setPokemon(data)
                setLoader(false);
            }
            fetchPokemon()
    }, [URL, id])

    

    return (
        <div className='container pokemon-page-container'>
            {
                loader ? <img height='150px' src={loaderImg} alt='loader' /> : (
                    <div className='row pokemon-responsive mt-5'>
                    <div className='col-4'>
                    <a href='/' ><img src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default} className="img-fluid " alt="{pokemon.name}" /> </a>
                    </div>
                    <div className='row col-8'>
                    <h3 className="display-6"> #{pokemon.id} <b>{pokemon.name.toUpperCase()} </b> </h3>
                    
                    <div className='col-6'>
                    <h5> <b> Stats: </b> </h5>
                    <ul className='list-group list-group-flush'>
                    {
                        pokemon.stats.map( (stat,i) => {
                            return <li className='list-group-item' key={stat.name + `${i}`}>  <b>{stat.stat.name.toUpperCase()} : </b> {stat.base_stat}</li>
                        }) 
                    }
                    </ul> 
                    <br />
                    <h5> <b> Top Moves: </b> </h5>
                    <ul className='list-group list-group-flush'>
                    {
                            pokemon.moves.map((move,index) => {
                                if(index < 5){
                                    return <li className='list-group-item' key={move.move.name}> {move.move.name.toUpperCase()} </li>
                                }
                        })
                    }
                    </ul>
                    </div>
                    <br />
                    <div className='col-6 right-column'>
                        <div className='singlepokemon-type-container'>
                        <h5> <b> Type:</b> </h5>
                        {pokemon.types.map((type, i) => { return <div  key={type.type.name + i} className={`type-container mt-2 ${type.type.name}`}> {type.type.name.toUpperCase()} </div>})}
                        </div>
                        <br />
                        <div>
                            <h5><b> Abilities:</b> </h5>
                            <ul className='list-group list-group-flush'>
                                    {pokemon.abilities.map((ability,i) => {return <li className='list-group-item' key={ability+i}>{ability.ability.name.toUpperCase()}</li>})}
                            </ul>   
                        </div>

                        <div className='buttonContainer'>
                            <button onClick={handleReturn} className="btn btn-primary btn-lg"> Return </button>
                        </div>
                    </div>
                </div>
                </div>

                )
            }
            
        </div>
    )
}
