import { useState } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { HiDotsHorizontal } from "react-icons/hi";
import CustomSelect from './CustomSelect';
import TableComponent from './TableComponent';
import { TfiReload } from 'react-icons/tfi';
import { FaTrashCan } from 'react-icons/fa6';

import adSet from '../assets/adSet.svg'
import allAds from '../assets/allAds.svg'
import campaigns from '../assets/campaigns.svg'
import duplicate from '../assets/duplicate.svg'
import edit from '../assets/edit.svg'
import test from '../assets/test.svg'
import ads from '../assets/ads.svg'
import columns from '../assets/columns.svg'
import breakdown from '../assets/breakdown.svg'
import book from '../assets/book.svg'
import month from '../assets/month.svg'
import export2 from '../assets/export2.svg'
import charts from '../assets/charts.svg'


const MainComponent = () => {
    const [active, setActive] = useState(0)

    return (
        <main className='w-full h-screen bg-gradient-to-r from-[#FAF1F1] from-30% to-[#E5F0FA] px-[5px] pt-[10px] pb-[15px] space-y-[10px]'>
            <div className='w-full flex flex-row items-center justify-between'>
                <div className='w-fit flex flex-row place-items-end space-x-[10px]'>
                    <p className='font-semibold font-roboto text-lg palce-self-end mb-[-2px]'>Ads</p>
                    <select className='focus:outline-none focus:ring-0 focus:border-transparent text-[14px] font-roboto rounded border-[1.5px] border-gray-300 py-[6px] px-4'>
                        <option value="">Ad Account 1 - Cartoonised (430804...)</option>
                        <option value="">Options</option>
                        <option value="">Options</option>
                    </select>
                </div>
                <div className='w-fit flex flex-row space-x-[10px] items-center'>
                    <p className='text-base text-gray-600 mr-1'>Updated just now</p>
                    <div className='border border-gray-400 rounded py-[6px] px-3 flex items-center justify-center'>
                        <TfiReload className='size-[16px] text-gray-700' />
                    </div>
                    <div className='cursor-pointer border border-gray-400 rounded py-[6px] px-4 flex flex-row items-center justify-center text-gray-700 font-roboto text-base'>
                        <FaTrashCan className='size-[16px] text-gray-700 mr-1' /> <p className='text-base'>Discard drafts</p>
                    </div>
                    <div className='cursor-pointer border text-white bg-[#067BAA] border-[#067BAA] rounded py-[6px] px-4 flex flex-row items-center justify-center font-roboto text-base'>
                        Review and publish (1)
                    </div>
                    <div className='cursor-pointer border border-gray-400 rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-700 font-roboto text-base'>
                        <HiDotsHorizontal className='size-[16px] text-gray-700' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-between '>
                <div className='flex flex-row items-center justify-between space-x-[10px]'>
                    <div className='flex flex-row items-center justify-center p-[6px] bg-white border border-[#067BAA] rounded'>
                        <MdSearch className='size-[21px] text-[#067BAA]' />
                    </div>
                    <div className='flex flex-row items-center justify-center py-[6px] px-3 font-roboto bg-white border border-[#067BAA] rounded font-semibold'>
                        <img src={allAds} alt='' className='size-[16px] mr-2' /> <p className='text-[#067BAA] text-base'>All ads</p>
                    </div>
                    <div className='flex flex-row items-center justify-center p-2 font-roboto'>
                        <MdAdd className='size-[16px] text-slate-700 mr-1' /> <p className='text-slate-700 text-base'>More views</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center bg-transparent text-[14px] font-roboto font-semibold rounded border-[1.5px] border-gray-300 py-[6px] px-4'>
                    <img src={month} alt='' className='size-[16px] text-gray-500 mr-1' />
                    <select className='focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-gray-700'>
                        <option value="">This month: Dec 1, 2024 - Dec 7, 2024</option>
                        <option value="">Options</option>
                        <option value="">Options</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <input type="text" placeholder='Search and filter' className='focus:outline-none w-full px-8 py-2 bg-white rounded text-inter font-light text-base shadow-lg shadow-gray-200 ' />
            </div>
            <div className=''>
                <div className='w-full flex flex-row space-x-[10px]'>
                    <div onClick={() => setActive(0)} className={`cursor-pointer rounded-t-md w-[300px] flex flex-row items-center p-2 ${active == 0 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-110' : 'bg-gray-200 shadow-none scale-100'} `}>
                        <img src={campaigns} alt='' className='size-[16px] text-slate-800 mr-2' /> <p className='text-slate-800 font-bold'>Campaigns</p>
                    </div>
                    <div onClick={() => setActive(1)} className={`cursor-pointer rounded-t-md w-[300px] flex flex-row items-center p-2 ${active == 1 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-110' : 'bg-gray-200 shadow-none scale-100'} `}>
                        <img src={adSet} alt='' className='size-[16px] text-slate-800 mr-2' /> <p className='text-slate-800 font-bold'>Ad sets</p>
                    </div>
                    <div onClick={() => setActive(2)} className={`cursor-pointer rounded-t-md w-[300px] flex flex-row items-center p-2 ${active == 2 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-110' : 'bg-gray-200 shadow-none scale-100'}`}>
                        <img src={ads} alt='' className='size-[16px] text-slate-800 mr-2' /> <p className='text-[#067BAA] font-bold'>Ads</p>
                    </div>
                </div>
                {
                    active == 2 ?
                        <>
                            <div className='flex flex-col space-y-[10px]  rounded-b-lg shadow-md shadow-gray-400/30  py-2 bg-white '>
                                <div className='flex flex-row items-center space-x-[10px] justify-between'>
                                    <div className='flex flex-row items-center space-x-[10px]'>
                                        <div className='flex flex-row items-center space-x-[10px] border-r px-2'>
                                            <div className='w-fit cursor-pointer border border-[#0E7A5A] bg-[#0E7A5A] rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-200 font-roboto text-base'>
                                                <MdAdd className='size-[16px] text-gray-200 mr-1' /> Create
                                            </div>
                                            <CustomSelect text={"Duplicate"} icon={<img src={duplicate} alt='' className='size-[16px] text-gray-700 mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                            <CustomSelect text={"Edit"} icon={<img src={edit} alt='' className='size-[16px] text-gray-700 mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                        </div>
                                        <div className='flex flex-row items-center space-x-[10px]'>
                                            <div className='w-fit cursor-pointer border border-gray-400 bg-white rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-700 font-roboto text-base'>
                                                <img src={test} alt='' className='size-[16px] text-gray-700 mr-1' /> A/B Test
                                            </div>
                                            <div className=''>
                                                <select name="" id="" className='ml-1 w-[70px] font-roboto text-base'>
                                                    <option value="">More </option>
                                                    <option value="">More</option>
                                                    <option value="">More</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-[10px] px-2'>
                                        <div className='flex flex-row justify-center items-center bg-transparent text-[14px] font-roboto font-semibold rounded border-[1.5px] border-gray-400 py-[8px] px-4'>
                                            <img src={columns} alt='' className='size-[16px] text-gray-500 mr-1' />
                                            <select className='focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-gray-700'>
                                                <option value="">Columns:Custom</option>
                                                <option value="">Options</option>
                                                <option value="">Options</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-row justify-center items-center bg-transparent text-[14px] font-roboto font-semibold rounded border-[1.5px] border-gray-400 py-[8px] px-4'>
                                            <img src={breakdown} alt='' className='size-[16px] text-gray-500 mr-1' />
                                            <select className='focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-gray-700'>
                                                <option value="">Breakdown</option>
                                                <option value="">Options</option>
                                                <option value="">Options</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-row justify-center items-center bg-transparent text-[14px] font-roboto font-semibold rounded border-[1.5px] border-gray-400 py-[8px] px-4'>
                                            <img src={book} alt='' className='size-[16px] text-gray-500 mr-1' />
                                            <select className='focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-gray-700'>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                        <CustomSelect icon={<img src={export2} alt='' className='size-[21px] text-gray-700 mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                        <div className='cursor-pointer border border-gray-400 rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-700 font-roboto text-base'>
                                            <img src={charts} alt='' className='size-[16px] text-gray-700 mr-2' /> Charts
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <TableComponent />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div></div>
                        </>
                }

            </div>
        </main>
    )
}

export default MainComponent