import { useRef } from "react"
import { setTrainerName } from "../../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './FormNameUser.css'

const FormNameUser = () => {

    const inputName = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="FormNameUser__Input" type="text" ref={inputName} placeholder="Name" />
                <button className="FormNameUser__Btn">Go!</button>
            </form>
        </div>
    )
}

export default FormNameUser