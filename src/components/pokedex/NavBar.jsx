import React from 'react'
import { Link } from "react-router-dom"
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="Pokedex__NavBar">
            <Link to={'/'}><img className="NavBar__Logo" src="https://pokedex-yordanni-ortiz.netlify.app/PokeBall.png" alt="poke ball" /></Link>
            <img className="NavBar__store" src="https://pokedex-yordanni-ortiz.netlify.app/CentroPokemon.png" alt=" store pokemon" />
        </nav>
    )
}

export default NavBar