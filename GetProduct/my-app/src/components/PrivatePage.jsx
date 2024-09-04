
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivatePage({ children })  {

    const { token } = useSelector((store) => store.AuthReducer)

    if (!token) {
        return <Navigate to={"/login"} />
    }
    else {
        return children
    }

}

export default PrivatePage



