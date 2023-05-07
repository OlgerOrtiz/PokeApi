import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './cardsPokemons.css'
import { useNavigate } from 'react-router-dom'

const CardsPokemons = ({url}) => {

    const [pokemon, getPokemonById] = useFetch(url)

    useEffect(() => {
        getPokemonById()
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.name}`)
    }

    return (
            <article className={`CardPokemon__Content Bg__Content--${pokemon?.types[0].type.name}`} onClick={handleClick}>
            <header className={`CardPokemon__Header Bg__Content--${pokemon?.types[0].type.name}`}>
                <img className='CardPokemon__Header--Image' src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
            </header>
            <main className='CardPokemon__Body'>
                <h3 className={`CardPokemon__Name Color--${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <ul className='CardPokemon__Types'>
                    {
                        pokemon?.types.map(type => (
                            <li className={`Type__specific Type--${type.type.name}`} key={type.slot}>{type.type.name}</li>
                        ))
                    }
                </ul>
                <ul className='CardPokemon__ListStats'>
                    {
                        pokemon?.stats.map(stat => (
                            <li className='Liststats__Specific' 
                            key={stat.stat.url}>
                            <span className={`stat__Label Color--${pokemon?.types[0].type.name}`}>{stat.stat.name}</span> 
                            <p className={`stat__Value Color--${pokemon?.types[0].type.name}`}>{stat.base_stat}</p></li>
                        ))
                    }
                </ul>
            </main>
        </article>
    )
}

export default CardsPokemons