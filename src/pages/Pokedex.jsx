import { useSelector } from "react-redux"
import FormPoke from "../components/pokedex/FormPoke"
import PokeContainer from "../components/pokedex/PokeContainer"
import { useState } from "react"
import './pokedex.css'
import NavBar from "../components/pokedex/NavBar"
import Pagination from "../components/pokedex/Pagination"

const Pokedex = () => {

    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

    const [formUrl, setFormUrl] = useState(urlBase)

    const { trainerName } = useSelector(state => state)

    return (
        <article className="Container__Pokedex">
            <NavBar />
            <header className="Pokedex__Content--Header">
                <p className="Header__Text"><b className="Header__Name">¡ welcome {trainerName} !.</b> Are you ready to learn about pokemons?</p>
                <FormPoke
                    formUrl={formUrl}
                    setFormUrl={setFormUrl}
                    urlBase={urlBase} />
            </header>
            <main className="Pokedex__Content">

                <section className="Pokedex__Header">
                    <img className='Pokedex__Image' src="./image/pokedex-top.png" alt="" />
                    <img className="Header__Logo--Text" src="/image/pokedexTitle.svg" alt="" />
                    <div className="Bg-Fake--Header"></div>
                </section>
                <section className="Pokedex__Content--Body">
                    <Pagination formUrl={formUrl}/>
                    <section className="Pokedex__Body">
                        <PokeContainer formUrl={formUrl} />
                    </section>
                </section>
                <section className="Pokedex__Footer">
                    <img className='Pokedex__Image' src="./image/pokedex-button.png" alt="" />
                    <div className="Bg-Fake--Footer"></div>
                </section>
            </main>
        </article>
    )

}

export default Pokedex