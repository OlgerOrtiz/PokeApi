// import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const { trainerName } = useSelector(state => state)

    // const navigate = useNavigate()

    if (trainerName.length >= 3) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
    // useEffect(() => {
    //     navigate('/')
    // },[])
}

export default ProtectedRoutes