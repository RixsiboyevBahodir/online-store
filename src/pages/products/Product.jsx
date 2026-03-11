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



    useEffect(() => {
        productFetch(id)
    }, [id])

    return (
        <div className="content">
            <div className="">
                <p className="text-4xl font-semibold">{data?.title}</p>
                <div className="flex">
                    <img src={data?.images[0]} alt="" className="max-w-[40%] shadow-2xl border-[#8683836b] rounded-2xl border" />
                    <div></div>
                </div>
            </div>
        </div>
    )
}
