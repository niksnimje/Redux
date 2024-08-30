import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"



function Login() {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const { isLoading, isError } = useSelector((store) => store.AuthReducer)


    const hendalSubmit = (e) => {
        e.preventDefault()
        const userdata = {
            email,
            pass
        }
        console.log(userdata)
        axios.post("https://reqres.in/api/login",userdata)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return isLoading ? <h1>Loding...</h1> : isError ? <h1>Something Went Worng</h1> : (
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
