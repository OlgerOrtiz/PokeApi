import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import CardsPokemons from "./CardsPokemons"
import { useSelector } from "react-redux";
import { pokemonsPerPage } from "../../store/slices/currentPage.slice";

const PokeContainer = ({ formUrl }) => {
    
    const [pokemons, getAllPokemons] = useFetch(formUrl);
    
    const { currentPage } = useSelector(state => state)
    
    useEffect(() => {
        getAllPokemons()
    }, [formUrl])

    
    return (
            <>
                {
                    pokemons?.results
                        ? (
                            pokemons?.results.slice(currentPage, currentPage + pokemonsPerPage).map(pokemon => (
                                <CardsPokemons
                                    key={pokemon.url}
                                    url={pokemon.url}/>
                            ))
                        )
                        : (
                            pokemons?.pokemon.slice(currentPage, currentPage + pokemonsPerPage).map(pokemon => (
                                <CardsPokemons
                                    key={pokemon.pokemon.url}
                                    url={pokemon.pokemon.url} />
                            ))
                        )
                }
            </>
        
    )
}

export default PokeContainer