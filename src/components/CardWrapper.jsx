import { useContext, useEffect, useState } from "react"
import { Pagination } from 'antd';
import Card from "antd/es/card/Card";
import { TbBasketPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Theme } from "../context/ThemeContext";
import { FaHeart } from "react-icons/fa";

export default function CardWrapper() {

    const [loading, setLoading] = useState(false)

    const [current, setCurrent] = useState(1);

    const { setWshList, wishList } = useContext(Theme)

    const onChange = page => {
        setCurrent(page);
    };

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


    const addToWishlist = (card) => {

        const wishListChek = wishList.some(item => item.id == card.id)

        let newWishList = []

        if (wishListChek) {
            newWishList = wishList?.filter(item => item.id !== card.id)
        } else {
            if (wishList.length) {
                newWishList = [...wishList, card]
            }
            else {
                newWishList = [card]
            }
        }
        setWshList(newWishList)
    }

    if (loading) {
        return <div className="grid grid-cols-5 gap-5">{[...Array(10)].map((item, index) => <Card key={index} className=" animate-pulse" style={{ backgroundColor: "#333", width: "244px" }} />)}</div>
    }

    return (
        <div className="flex items-center flex-col gap-10 my-10">
            <div className="grid grid-cols-5 gap-5">
                {
                    data?.products?.map(card => (
                        <div key={card.id} className="max-w-56 rounded-lg shadow-xl/20 overflow-hidden">
                            <div className="bg-[#edf1e3] relative">
                                <img src={card.thumbnail} alt="card image" />
                                <p className="bg-red-500 p-2 inline rounded-xl text-white absolute top-2 left-2 text-[10px]">{card.discountPercentage}%</p>
                                <FaHeart className={`hover:text-red-500 text-gray-400 transition-all cursor-pointer absolute top-2 right-2 text-2xl ${wishList?.some(item => item.id == card.id) ? `text-red-500` : `text-gray-400`}`} onClick={() => addToWishlist(card)} />
                            </div>
                            <div className="p-2">
                                <p className="line-clamp-1 font-bold text-[#743ffa]">{card.title}</p>
                                <p className="text-red-500 font-bold">{card.price}$</p>
                                <p className="text-[15px] line-clamp-3">{card.description}</p>
                                <div className="flex justify-between items-center pb-3">
                                    <div className="flex items-center gap-2">
                                        <p className="text-yellow-600 font-bold text-xl">★</p>
                                        <p>{card.rating}</p>
                                    </div>
                                    <div className="flex gap-2 text-[12px] bg-[#aaaaaa] p-1 rounded-2xl">
                                        <p>({card.minimumOrderQuantity}</p>
                                        <p>order)</p>
                                    </div>
                                </div>
                                <Link to={`/products/${card.id}`} className="flex items-center w-full bg-[#743ffa] justify-center gap-2 rounded-xl p-2 font-semibold cursor-pointer text-white" onClick={() => product(card.id)}><TbBasketPlus /> add to cart</Link>
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
