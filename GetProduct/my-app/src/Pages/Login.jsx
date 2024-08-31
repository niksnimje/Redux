import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { LOGIN_FILED, LOGIN_REQ, LOGIN_SUCCES } from "../"

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const dispatch=useDispatch()

    const { isLoading, isError ,token} = useSelector((store) => store.AuthReducer);

    const data_sucessful=(userdata)=>{
        //request
        dispatch({type:LOGIN_REQ})
        axios.post("https://reqres.in/api/login", userdata)
        .then((res) => {
            //succesful
            dispatch({type:LOGIN_SUCCES,payload:res.data.token})
            console.log(res.data.token)
        })
        .catch((err) => {
            //eroor
            dispatch({type:LOGIN_FILED})
            console.error("Error logging in:", err)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdata = { email, password:pass };
        console.log(userdata);
        data_sucessful(userdata)
    };

    return isLoading ? (
        <h1>Loading...</h1>
    ) : isError ? (
        <h1>Something Went Wrong</h1>
    ) : (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <h6>eve.holt@reqres.in</h6>
        </>
    );
}

export default Login;
