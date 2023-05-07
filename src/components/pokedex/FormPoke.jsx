import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import './formPoke.css'
// import { setCurrentPage } from "../../store/slices/currentPage.slice"

const FormPoke = ({formUrl, setFormUrl, urlBase}) => {
    const inputPoke = useRef()

    const navigate = useNavigate()

    const url = `https://pokeapi.co/api/v2/type/`
    const [types, getAllTypes] = useFetch(url)
    const [pokemons, getAllPokemons] = useFetch(formUrl);

    useEffect(() => {
        getAllTypes()
        getAllPokemons()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = e => {
        
        setFormUrl(e.target.value)
        // setCurrentPage(0)
    }

    return (
        <div className="FormPoke__Container">
            <form className="FormPoke__Form" onSubmit={handleSubmit} >
                <input className="Form__Input" ref={inputPoke} type="text" list="namePokemons" placeholder="Pokemon Name" />
                <datalist id="namePokemons" >
                    {pokemons?.results.map(name => (
                        <option key={name.url} value={name.name}></option>
                    ))}
                </datalist>
                
            </form>
            <select className="FormPoke__SelectType" onChange={handleChange}>
                <option value={urlBase}>All pokemons</option> 
                
                {
                    types?.results.map(type => (
                        <option className={`Select__Options Type--${type.name}`} key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FormPoke