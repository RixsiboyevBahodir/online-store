import { useEffect, useState } from "react"
import { Pagination } from 'antd';
import Card from "antd/es/card/Card";

export default function CardWrapper() {

    const [loading, setLoading] = useState(false)

    const [current, setCurrent] = useState(1);

    const onChange = page => {
        setCurrent(page);
    };

    // for (let index = 0; index <= 10; index++) {
    //     console.log(index)
    // }

    const pageSize = 20

    const [data, setData] = useState()

    const cardData = async (skip) => {
        setLoading(true)
        const cardFatch = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
        const result = await cardFatch.json()
        setData(result)
        setLoading(false)
    }

    useEffect(() => {
        const skip = pageSize * (current - 1)
        cardData(skip)
    }, [current, pageSize])

    if (loading) {
        return <div className="grid grid-cols-5 gap-5">{[...Array(10)].map((item, index) => <Card key={index} className=" animate-pulse" style={{ backgroundColor: "#333", width: "244px" }} />)}</div>
    }

    return (
        <div className="flex items-center flex-col gap-10">
            <div className="grid grid-cols-5 gap-5">
                {
                    data?.products?.map(card => (
                        <div key={card.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-56 overflow-hidden">
                            {/* Rasm */}
                            <div className="relative h-40 bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                                <img
                                    src={card.thumbnail}
                                    alt={card.title}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                                {card.discountPercentage > 0 && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                        {card.discountPercentage}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{card.title}</h3>
                                    <span className="font-bold text-blue-600">${card.price}</span>
                                </div>

                                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{card.description}</p>

                                <div className="flex items-center justify-between">
                                    {/* Rating stars */}
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-sm ${i < Math.floor(card.rating) ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                                        ))}
                                        <span className="text-xs text-gray-400 ml-1">({card.rating})</span>
                                    </div>

                                    {/* Category badge */}
                                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                                        {card.category}
                                    </span>
                                </div>

                                {/* Add to cart button */}
                                <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm py-2 rounded-xl transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Pagination
                current={current}
                onChange={onChange}
                total={data?.total}
                pageSize={pageSize}
                showSizeChanger={false}
            />
        </div>
    );
}
