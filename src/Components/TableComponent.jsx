import React, { useState } from 'react'
import { HiMiniDocumentDuplicate } from 'react-icons/hi2'
import { MdAutoGraph, MdEdit, MdSwapVerticalCircle } from 'react-icons/md'
import img from '../assets/download.jpg'
import chart from '../assets/chart.svg'
import edit from '../assets/edit.svg'
import duplicate from '../assets/duplicate.svg'
import { HiDotsHorizontal } from 'react-icons/hi'

const TableComponent = () => {

    const [isOpen, setIsOpen] = useState(Array(10).fill(false));
    const toggleRow = (index) => {
        setIsOpen((prevState) =>
            prevState.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <main className='px-2 max-h-[64vh] overflow-y-scroll scrollbar'>
            <table className='w-full'>
                <thead className=''>
                    <tr>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700 font-semibold text-center justify-center pt-[6px]'>
                            <input type="checkbox" className='size-[20px]' />
                        </th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Off / On</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Ad</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Delivery</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Amount spent</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Clicks (all)</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>CPC (all)</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>CTR (all)</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>Cost per result</th>
                        <th className='w-fit border font-roboto text-[15px] text-gray-700  px-2 font-semibold text-left'>CPM (cost per 1,000)</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(10).fill(0).map((item, index) => (
                        <tr key={index} className='odd:bg-white even:bg-blue-50'>
                            <td className='w-fit border font-roboto text-[15px] text-gray-700 font-semibold text-center justify-center pt-[6px]'>
                                <input type="checkbox" className='size-[20px]' />
                            </td>
                            <td className='w-fit border w-100 h-auto'>
                                <div onClick={() => toggleRow(index)} className='cursor-pointer relative w-[40px] border border-gray-300 mx-auto rounded-full h-[20px] bg-sky-100'>
                                    <div className={`rounded-full size-[20px] border  absolute top-[-1px] ${isOpen[index] ? 'left-0 bg-blue-300' : 'left-[20px] bg-blue-700'}`}></div>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-[15px] text-gray-700  px-1 text-left'>
                                <div className='flex flex-row'>
                                    <div className='size-[40px] border text-xs overflow-hidden'>
                                        <img src={img} alt="img here" className='h-full w-full content-fit' />
                                    </div>
                                    <div className='text-base ml-1'>
                                        <p className='tracking-normal leading-normal'>P2 - Copy</p>
                                        <div className='flex flex-row items-center space-x-[5px] tracking-normal leading-normal'>
                                            <img src={chart} alt='' className='size-[14px]' />
                                            <img src={edit} className='size-[14px]' />
                                            <div className='flex flex-row items-center space-x-[2px] w-fit'>
                                                <img src={duplicate} className='size-[14px] mr-1' />
                                                Duplicate
                                            </div>
                                            <HiDotsHorizontal className='size-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-base text-gray-700 px-2 text-left'>
                                <div className='flex flex-row space-x-[5px] items-center'>
                                    <div className='size-[10px] rounded-full bg-gray-400'></div>
                                    <p>Campaign Off </p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-left'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-left'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-left'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-left'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-right'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                    <p className='text-xs text-gray-400'>Per Post Engagement</p>
                                </div>
                            </td>
                            <td className='w-fit border font-roboto text-gray-700  px-2 text-base text-left'>
                                <div className='flex flex-col items-end'>
                                    <p className='font-semibold w-[10px] bg-gray-400 h-[1px] mb-1'></p>
                                </div>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </main>
    )
}

export default TableComponent