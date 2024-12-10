import React, { useState } from 'react'
import { Md20Mp, MdArrowDownward, MdDeleteForever } from 'react-icons/md'

const CustomSelect = ({ text, icon, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex flex-row justify-between items-center bg-white text-gray-700 relative'>
            <div className='border border-gray-400 rounded-l w-fit flex flex-row items-center justify-center text-gray-700 font-poppins text-base py-[6px] px-3'>
                {icon} {text}
            </div>
            <div className='border border-l-0 border-slate-400 rounded-r  p-[6.5px]'>
                <MdArrowDownward className='size-[20px] text-gray-700' />
            </div>
            {isOpen && <div className='bg-white h-auto w-auto absolute border border-gray-400 top-10 right-0'>
                {options && options.map((option, index) => (
                    <div className='px-3 py-2 hover:bg-gray-200 cursor-pointer' key={index}>
                        {option}
                    </div>
                ))}
            </div>}

        </main>
    )
}

export default CustomSelect