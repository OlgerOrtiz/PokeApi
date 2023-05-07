import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './pokedex.css'
import './pokeInfo.css'
import NavBar from '../components/pokedex/NavBar'
import HasError from '../components/pokedex/HasError'

const PokeInfo = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonByName, hasError] = useFetch(url)

    // console.log(pokemon);

    useEffect(() => {
        getPokemonByName()
    }, [name])

    return (
        <>
            {
                hasError
                    ? <HasError/>
                    : <>
                        <NavBar />
                        <article className="Pokedex__Content">
                            <section className="Pokedex__Header">
                                <img className='Pokedex__Image' src="./image/pokedex-top.png" alt="Pokedex img" />
                                <img className="Header__Logo--Text" src="/image/pokedexTitle.svg" alt="Pokedex logo" />
                                <div className="Bg-Fake--Header"></div>
                            </section>
                            <section className='Pokedex__Content--Body'>
                            <section className='Pokedex__Body'>
                                <section className='PokeInfo__Container'>
                                    <header className='PokeInfo__Header'>
                                        <Link to={'/pokedex'}><i className='bx bx-arrow-to-left Header--Icon'></i></Link>
                                        <img className='Header__Img' src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                                    </header>
                                    <section className='PokeInfo__Body'>
                                        <div className='PokeInfo__Body--Caracteristic'>
                                            <h2 className='Name__Pokemon'> <span className='Position__Id'>No.0{pokemon?.order}</span> {pokemon?.name}</h2>
                                            <ul className='List__Carateristic'>
                                                <li className='Caracteristic'><span className='Caracteristic__Key'>Base Experience :</span> <span className='Caracteristic__Value'>{pokemon?.base_experience}</span></li>
                                                <li className='Caracteristic'><span className='Caracteristic__Key'>Height :</span> <span className='Caracteristic__Value'>{pokemon?.height}</span></li>
                                                <li className='Caracteristic'><span className='Caracteristic__Key'>Weight :</span> <span className='Caracteristic__Value'>{pokemon?.weight}</span></li>
                                            </ul>
                                        </div>
                                        <div className='PokeInfo__Body--Types'>
                                            <h4>Type</h4>
                                            <ul className='PokeInfo__List--Types'>
                                                {
                                                    pokemon?.types.map(type => (
                                                        <li className='Types' key={type.slot}>{type.type.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='PokeInfo__Body--Abilities'>
                                            <h4>Abilities</h4>
                                            <ul className='PokeInfo__List--Abilities'>
                                                {
                                                    pokemon?.abilities.map(ability => (
                                                        <li className='Abilities' key={ability.ability.url}>{ability.ability.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='PokeInfo__Body--Moves'>
                                            <h4>Moves</h4>
                                            <ul className='PokeInfo__List--Moves'>
                                                {
                                                    pokemon?.moves.map(move => (
                                                        <li className='Moves'
                                                            key={move.move.url}>
                                                            {move.move.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </section>
                                </section>
                            </section>
                            </section>
                            <section className="Pokedex__Footer">
                                <img className='Pokedex__Image' src="./image/pokedex-button.png" alt="" />
                                <div className="Bg-Fake--Footer"></div>
                            </section>
                        </article>
                    </>
            }

        </>
    )
}

export default PokeInfo