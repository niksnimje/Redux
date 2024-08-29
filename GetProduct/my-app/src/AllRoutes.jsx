
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import Product from './Pages/Product'
import Login from './Pages/Login'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product' element={<Product />} />
                <Route path='*' element={<h1>Page is not define</h1>} />

            </Routes>
        </>
    )
}

export default AllRoutes
