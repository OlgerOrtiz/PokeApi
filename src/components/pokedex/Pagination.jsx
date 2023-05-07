import { useDispatch, useSelector } from 'react-redux'
import { pokemonsPerPage, setCurrentPage } from '../../store/slices/currentPage.slice'
import './pagination.css'


9
const Pagination = () => {

    const { currentPage } = useSelector(state => state)

    const dispatch = useDispatch()

    const nextPages = () => {
        dispatch(setCurrentPage(currentPage + pokemonsPerPage))
    }
    const previousPages = () => {
        if (currentPage > 0)
            dispatch(setCurrentPage(currentPage - pokemonsPerPage))
    }

    return (
        <div className='Pagination__Content'>
            <button className='Pagination__Btn--Previous' onClick={previousPages}>Previous</button>
            <button className='Pagination__Btn--Next' onClick={nextPages}>Next</button>
        </div>
    )
}

export default Pagination