import React from 'react'
import logo from '../assets/logo.png'
import { MdOutlineQuestionMark } from "react-icons/md";
import svg1 from '../assets/1.svg'
import svg2 from '../assets/2.svg'
import svg3 from '../assets/3.svg'
import svg4 from '../assets/4.svg'
import svg5 from '../assets/5.svg'
import svg6 from '../assets/6.svg'
import svg7 from '../assets/7.svg'
import svg8 from '../assets/8.svg'
import svg9 from '../assets/9.svg'
import svg10 from '../assets/10.svg'
import svg11 from '../assets/11.svg'
import svg12 from '../assets/12.svg'
import svg13 from '../assets/13.svg'

const Leftbar = () => {
    return (
        <main className='w-full py-3 bg-white h-screen flex flex-col justify-between items-center shadow shadow-gray-400'>
            <div className='w-fit flex flex-col items-center space-y-[30px]'>
                <div className='flex flex-col space-y-[20px] items-center'>
                    <div className='w-full h-auto p-[4px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={logo} alt="" className='w-[32px] h-[32px]' />
                    </div>
                    <div className='bg-[#5BA5F4] rounded h-[32px] w-[32px] flex items-center justify-center'>
                        <p className='text-md font-black font-poppins text-[#004590]'>B</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg11} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg3} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg2} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg4} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg5} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg12} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg1} alt="" className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
            <div className=' w-fit flex flex-col items-center space-y-[30px] border-t-[1px]'>
                <div className='flex flex-col items-center pt-[10px]'>
                    <div className='w-full h-auto p-[8px] bg-[#eceff5] cursor-pointer rounded-full'>
                        <MdOutlineQuestionMark className='w-[20px] h-[20px] text-gray-400' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg13} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg7} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg6} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg9} alt="" className='w-[20px] h-[20px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#eceff5] cursor-pointer'>
                        <img src={svg8} alt="" className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Leftbar