import React from 'react'
import chart from '../assets/chart.svg'
import edit from '../assets/edit.svg'
import clock from '../assets/clock.svg'

const Rightbar = () => {
    return (
        <main className='flex flex-col bg-[#1C2B33] w-full py-3 h-screen justify-between items-center shadow'>
            <div className='flex flex-col space-y-[10px] items-center'>
                <div className='w-full h-auto p-[4px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={chart} alt='' className='size-[24px] text-gray-300' />
                </div>
                <div className='w-full h-auto p-[4px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={edit} alt='' className='size-[24px] text-gray-300' />
                </div>
                <div className='w-full h-auto p-[4px] rounded-sm hover:bg-white/20 cursor-pointer'>
                    <img src={clock} alt='' className='size-[24px] text-gray-300' />
                </div>
            </div>
        </main>
    )
}

export default Rightbar