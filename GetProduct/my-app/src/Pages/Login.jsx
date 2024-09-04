import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LOGIN_FILED, LOGIN_REQ, LOGIN_SUCCES } from "../Redux/ActionType"



function Login() {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const { isLoading, isError } = useSelector((store) => store.AuthReducer)
    const dispatch = useDispatch()


    const LoginReq = (userdata) => {
        // req
        dispatch({ type: LOGIN_REQ })
        axios.post("https://reqres.in/api/login", userdata)
            // succes

            .then((res) => {
                dispatch({ type: LOGIN_SUCCES, payload: res.data.token })
                console.log(res.data.token)
            })
            // err

            .catch((err) => {
                dispatch({ type: LOGIN_FILED })
                console.log(err)
            }
            )
    }

    const hendalSubmit = (e) => {
        e.preventDefault()
        const userdata = {
            email,
            password: pass
        }
        LoginReq(userdata)
    }

    return isLoading ? (<h1>Loding...</h1>) : isError ? (<h1>Something Went Worng</h1>) : (
        <>
            <h1>Login</h1>

            <form onSubmit={(e) => hendalSubmit(e)}>
                <input onChange={(e) => setemail(e.target.value)} type="text" placeholder="Enter Email" /> <br />
                <input onChange={(e) => setpass(e.target.value)} type="text" placeholder="Enter Password" /> <br />
                <input type="submit" />
            </form>

            <h6>eve.holt@reqres.in</h6>

        </>
    )
}

export default Login
