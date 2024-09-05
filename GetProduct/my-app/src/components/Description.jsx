import axios from "axios"
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"


function Description() {

    // const { data } = useSelector((store) => store.ProductReducer)
    const { id } = useParams()
    // const filterdata = data.filter((el, index) => el.id == id)

    const [filterdata, setfilterdata] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => setfilterdata(res.data))
            .catch((err) => console.log(err))
    }, [id])


    return (
        <>
            <h1>This Is Description Page</h1>
            <div style={{ textAlign: "center", border: "1px solid black" }}>
                <h3>{filterdata.title}</h3>
                <img src={filterdata.image} alt="" height={200} width={200} />
                <h2>{filterdata.price}</h2>
                <h5>{filterdata.category}</h5>
                <p>{filterdata.description}</p>
            </div>
        </>
    )
}

export default Description
