import React from 'react'
import chart from '../assets/chart.svg'
import edit from '../assets/edit.svg'
import clock from '../assets/clock.svg'

const Rightbar = () => {
    return (
        <main className='flex flex-col bg-[#1C2B33] w-full justify-between items-center py-[8px] h-screen '>
            <div className='flex flex-col space-y-[10px] items-center px-1'>
                <div className='w-full h-auto p-[8px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={chart} alt='' className='h-[18px] w-[23px] text-gray-300' />
                </div>
                <div className='w-full h-auto p-[8px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={edit} alt='' className='h-[20px] w-[23px] text-gray-300' />
                </div>
                <div className='w-full h-auto p-[8px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={clock} alt='' className='h-[20px] w-[23px] text-gray-300' />
                </div>
            </div>
        </main>
    )
}

export default Rightbar