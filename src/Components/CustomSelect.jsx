import React, { useState } from 'react'
import { Md20Mp, MdArrowDownward, MdDeleteForever } from 'react-icons/md'

const CustomSelect = ({ text, icon, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex flex-row justify-between items-center bg-white text-gray-700 relative'>
            <div className='border border-zinc-400/70 rounded-l w-fit flex flex-row items-center justify-center text-gray-700 font-poppins text-base py-[6px] px-3'>
                {icon} {text}
            </div>
            <div className='border border-l-0 border-zinc-400/70 rounded-r px-[12px] py-[8px]'>
                <MdArrowDownward className='h-[16px] w-[16px]' />
            </div>
            {isOpen && <div className='bg-white h-auto w-auto absolute border border-zinc-400/70 top-10 right-0'>
                {options && options.map((option, index) => (
                    <div className='px-[12px] py-[8px] hover:bg-gray-200 cursor-pointer' key={index}>
                        {option}
                    </div>
                ))}
            </div>}

        </main>
    )
}

export default CustomSelect