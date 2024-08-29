
import { NavLink } from 'react-router-dom'

function Navbarr() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/product"}>Product</NavLink>
                <NavLink to={"/addproduct"}>AddProduct</NavLink>
            </div>
        </>
    )
}

export default Navbarr
