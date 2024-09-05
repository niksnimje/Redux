
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import Product from '../Pages/Product'

function PrivatePage({ children }) {

    const { token } = useSelector((store) => store.AuthReducer)
    // const navigate = useNavigate()
    if (!token) {
        return <Navigate to={"/login"} />
    }
    else {
        // navigate(<Product />)
        return children

    }

}

export default PrivatePage



