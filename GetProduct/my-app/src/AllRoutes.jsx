
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Description from './components/Description'
// import PrivatePage from './components/PrivatePage'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/login' element={
                    <Login />
                } />
                <Route path='/product' element={
                    // <PrivatePage>
                    <Product />
                    // </PrivatePage>
                } />
                <Route path='/description/:id' element={<Description />} />
                <Route path='*' element={<h1>Page is not define</h1>} />
            </Routes>
        </>
    )
}

export default AllRoutes
