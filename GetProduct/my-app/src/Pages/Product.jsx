import axios from "axios"
import { useEffect, useState } from "react"

function Product() {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/product")
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h1>Product Page</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr", gap: "5px" }}>
                {data.map(({ id, title, image, price, category, description }) => (

                    <div key={id} style={{ textAlign: "center", border: "1px solid black" }}>
                        <h3>{title}</h3>
                        <img src={image} alt="" height={200} width={200} />
                        <h2>{price}</h2>
                        <h5>{category}</h5>
                        <p>{description}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Product
