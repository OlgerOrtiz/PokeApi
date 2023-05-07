import React from 'react'
import '../../pages/pokedex.css'
import './hasError.css'
import { Link } from 'react-router-dom'

const HasError = () => {
    return (
        <article className="Pokedex__Content">
            <section className="Pokedex__Header">
                <img className='Pokedex__Image' src="./image/pokedex-top.png" alt="Pokedex img" />
                <img className="Header__Logo--Text" src="/image/pokedexTitle.svg" alt="Pokedex logo" />
                <div className="Bg-Fake--Header"></div>
            </section>
            <section className='Pokedex__Content--Body'>
                <section className='Pokedex__Body'>
                    <Link to={'/pokedex'}><i className='bx bx-arrow-to-left'></i></Link>
                    <h3 className='Body__Error--Text'>This pokemon is unknown or does not exist.</h3>
                    <img className='Body__img--Unknown' src="../../image/pokemon-unknown.png" alt="" />
                </section>
                <section className="Pokedex__Footer">
                    <img className='Pokedex__Image' src="./image/pokedex-button.png" alt="" />
                    <div className="Bg-Fake--Footer"></div>
                </section>
            </section>
        </article>
    )
}

export default HasError