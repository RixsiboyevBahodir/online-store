import marketLogo from '../../assets/market-logo.png'
import { FaRegUser } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import fire from '../../assets/fire.png'
import collection from '../../assets/collection.png'
import cosmetics from '../../assets/cosmetics.png'
import hobbi from '../../assets/hobbi.png'
import smart from "../../assets/smart.png"
import ramazan from '../../assets/ramazan.png'
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../context/ThemeContext';

export default function Navbar() {

    const [search, setSearch] = useState()
    const [inputData, setInputData] = useState("")
    const [show, setShow] = useState(false)

    const { wishList } = useContext(Theme)

    function focus() {
        setShow(true)
    }

    function focusOff() {
        setTimeout(() => {
            setShow(false)
        }, 350);
    }


    function inputText(value) {
        setInputData(value)
    }


    const handleSearch = async (inputData) => {
        let response;
        if (inputData) {
            response = await fetch(`https://dummyjson.com/products/search?q=${inputData}`)
        } else {
            response = await fetch("https://dummyjson.com/products")
        }
        const result = await response.json()
        setSearch(result)
    }

    useEffect(() => {
        handleSearch(inputData)
    }, [inputData])

    return (
        <div className='pt-3'>
            <div className='flex items-center justify-between'>
                <Link to={'/home'} className='flex items-center gap-2 text-3xl font-semibold font-roboto'>
                    <img src={marketLogo} alt="" className='max-w-10' />
                    <h1 className='text-[#743ffa] cursor-pointer'>uzum market</h1>
                </Link>
                <div className='flex items-center max-w-1/2 w-full gap-2'>
                    <button className='flex items-center bg-[#7f4dff41] px-4 py-2 gap-2 text-[16px] text-[#743ffa] rounded-md cursor-pointer active:bg-[#7f4dff8f] transition-all'><LuGalleryVerticalEnd className='text-[19px]' /> Catalog</button>
                    <div className='w-full relative'>
                        <Input
                            onChange={(e) => inputText(e.target.value)}
                            onFocus={focus}
                            onBlur={focusOff}
                            prefix={< IoIosSearch />} />
                        <ul className={`absolute bg-blue-300 w-full rounded-sm z-10 overflow-y-auto max-h-40 p-3 ${show ? `block` : `hidden`} `}>
                            {
                                search?.products?.map(items => (<Link key={items.id} to={`/products/${items.id}`} className='hover:bg-blue-600 flex flex-col'>{items.title}</Link>))
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer'>
                        <FaRegUser className='text-[21px] dark:text-[#ffffffd4]' />
                        <p className='dark:text-[#ffffffd4]'>User</p>
                    </div>
                    <Link to={'/wishlist'}>
                        <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer relative'>
                            <LuHeart className='text-[21px] dark:text-[#ffffffd4]' />
                            <p className='dark:text-[#ffffffd4]'>Like</p>
                            <p className='absolute bg-red-500 px-2 text-white text-[10px] rounded-2xl left-0 top-0'>{wishList?.length}</p>
                        </div>
                    </Link>
                    <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer'>
                        <FiShoppingCart className='text-[21px] dark:text-[#ffffffd4]' />
                        <p className='dark:text-[#ffffffd4]'>Basket</p>
                    </div>
                </div>
                <Link></Link>
            </div>
            <ul className='flex items-center justify-between my-6'>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={fire} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>weekly total</p>
                </li>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={collection} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>spring collection</p>
                </li>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={cosmetics} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>beauty</p>
                </li>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={hobbi} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>hobby items</p>
                </li>
                <li className='flex items-center gap-3'>
                    <img src={smart} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>smartphone</p>
                </li>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={ramazan} alt="" className='max-w-6.5' />
                    <p className='dark:text-[#ffffffd4]'>month of Ramadan</p>
                </li>
                <SlMenu className='cursor-pointer dark:text-[#ffffffd4]' />
            </ul>
        </div>
    )
}
