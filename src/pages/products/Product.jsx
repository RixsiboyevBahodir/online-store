import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product() {

    const [data, setData] = useState()

    const { id } = useParams()

    const productFetch = async (id) => {
        const productData = await fetch(`https://dummyjson.com/products/${id}`)
        const reault = await productData.json()
        setData(reault)
    }


    console.log(data)


    useEffect(() => {
        productFetch(id)
    }, [id])

    return (
        <div>
            <p>{data?.title}</p>
        </div>
    )
}
