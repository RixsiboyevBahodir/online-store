import { useContext } from "react"
import { Theme } from "../../context/ThemeContext"
import { Link } from "react-router-dom"
import { TbBasketPlus } from "react-icons/tb";

export default function WishList() {

    const { wishList } = useContext(Theme)

    return (
        <div className="grid grid-cols-5 gap-5">
            {
                wishList?.map(card => (
                    <div key={card.id} className="max-w-56 rounded-lg shadow-xl/20 overflow-hidden">
                        <div className="bg-[#edf1e3] relative">
                            <img src={card.thumbnail} alt="card image" />
                            <p className="bg-red-500 p-2 inline rounded-xl text-white absolute top-2 left-2 text-[10px]">{card.discountPercentage}%</p>
                            {/* <FaHeart className="hover:text-red-500 text-gray-400 transition-all cursor-pointer absolute top-2 right-2 text-2xl" onClick={() => addToWishlist(card)} /> */}
                        </div>
                        <div className="p-2">
                            <p className="line-clamp-1 font-bold text-[#743ffa]">{card.title}</p>
                            <p className="text-red-500 font-bold">{card.price}$</p>
                            <p className="py-3 text-[15px]">{card.description}</p>
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
    )
}
