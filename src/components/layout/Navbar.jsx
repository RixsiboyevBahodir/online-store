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

export default function Navbar() {

    function focus(){
        console.log("focus")
    }

    function focusOff(){
        console.log("focus off")
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-3xl font-semibold font-roboto'>
                    <img src={marketLogo} alt="" className='max-w-10' />
                    <h1 className='text-[#743ffa] cursor-pointer'>uzum market</h1>
                </div>
                <div className='flex items-center max-w-1/2 w-full gap-2'>
                    <button className='flex items-center bg-[#7f4dff41] px-4 py-2 gap-2 text-[16px] text-[#743ffa] rounded-md cursor-pointer active:bg-[#7f4dff8f] transition-all'><LuGalleryVerticalEnd className='text-[19px]' /> Catalog</button>
                    {/* <input type="text" className='outline outline-[#44444473] w-full h-8.75 rounded-sm pl-2 focus:outline-[#743ffa] focus:shadow-xl/25 shadow-indigo-500/50 dark:outline-[#b6b1b1] dark:bg-[#333] dark:text-[#ffffffd4]' placeholder='search' /> */}
                    <Input 
                    onFocus={focus}
                    onBlur={focusOff}
                    prefix={< IoIosSearch/>} />
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer'>
                        <FaRegUser className='text-[21px] dark:text-[#ffffffd4]' />
                        <p className='dark:text-[#ffffffd4]'>User</p>
                    </div>
                    <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer'>
                        <LuHeart className='text-[21px] dark:text-[#ffffffd4]' />
                        <p className='dark:text-[#ffffffd4]'>Like</p>
                    </div>
                    <div className='flex items-center gap-2 hover:bg-[#7f4dff41] px-3 py-2 rounded-md transition-all cursor-pointer'>
                        <FiShoppingCart className='text-[21px] dark:text-[#ffffffd4]' />
                        <p className='dark:text-[#ffffffd4]'>Basket</p>
                    </div>
                </div>
            </div>
            <ul className='flex items-center justify-between my-6'>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={fire} alt=""  className='max-w-6.5'/>
                    <p className='dark:text-[#ffffffd4]'>weekly total</p>
                </li>
                <li className='flex items-center gap-3 cursor-pointer'>
                    <img src={collection} alt=""  className='max-w-6.5'/>
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
