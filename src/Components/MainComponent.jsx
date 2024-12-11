import React, { useState } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { HiDotsHorizontal } from "react-icons/hi";
import CustomSelect from './CustomSelect';
import TableComponent from './TableComponent';
import { TfiReload } from 'react-icons/tfi';
import { FaTrashCan } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa'

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
    const [accountActive, setAccountActive] = useState(false)
    const [columnActive, setColumnActive] = useState(false)
    const [breakDownActive, setBreakDownActive] = useState(false)
    const [reportActive, setReportActive] = useState(false)

    return (
        <main className='w-full h-screen bg-gradient-to-r from-[#FAF1F1] from-30% to-[#E5F0FA] px-[5px] pt-[10px] pb-[15px] space-y-[10px]'>
            <div className='w-full flex flex-row items-center justify-between'>
                <div className='w-fit flex flex-row items-center space-x-[12px]'>
                    <p className='font-[800] text-[1.125rem] text-[#1c2b33] font-lato pt-[12px]'>Campaigns</p>
                    <div onClick={() => setAccountActive(!accountActive)} className='cursor-pointer w-fit relative'>
                        <div className='bg-white w-[300px] border border-zinc-400/70 rounded-[6px]'>
                            <div className='flex flex-row items-center justify-between h-[36px] px-[12px]'>
                                <span className='text-[0.875rem] leading-[1.42857px]'>Ad Account 1 - Cartoonised (430804...)</span>
                                <span><FaCaretDown className='size-[16px] text-[#42474F]' /></span>
                            </div>
                        </div>
                        {
                            accountActive &&
                            <div className='w-full absolute bg-white top-11 z-50 rounded-[6px] shadow border border-zinc-400/70'>
                                <div className='flex flex-row w-full bg-white rounded-t-[6px] border border-blue-400 p-1'>
                                    <MdSearch className='h-[24px] w-[24px]' />
                                    <input type="text" className='w-full px-[12px] h-[24px]' placeholder='Search for a business asset' />
                                </div>
                                <div className='bg-white px-2 py-[4px] w-full h-full flex flex-col rounded-b-[6px]'>
                                    <div className='bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[50px]'>
                                        <div className='h-[24px] w-[24px] bg-white relative rounded-full border border-zinc-400/70'>
                                            <div className='h-[12px] w-[12px] bg-[#1877F2] rounded-full absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                                        </div>
                                        <div className='h-auto w-auto'>
                                            <p className='text-[0.875rem] font-[600] tracking-normal leading-normal text-roboto text-[#1c2b33]'>Company Name</p>
                                            <p className='text-[0.875rem] tracking-normal leading-normal text-roboto text-gray-500 font-medium'>Ad Account ID: 123135455646</p>
                                        </div>
                                    </div>
                                    <div className='hover:bg-[#ECF3FF] border border-zinc-400/70 rounded-[4px] flex items-center justify-center cursor-pointer py-[16px] mt-[12px]'>
                                        <p className='font-[700] text-black'>See more Ad Accounts</p>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className='w-fit flex flex-row space-x-[6px] items-center'>
                    <p className='text-[0.875rem] font-[300] tracking-[0.03em] leading-[1.42857] text-roboto text-[#1c2b33] mr-[10px]'>Updated just now</p>
                    <div className='cursor-pointer border border-zinc-400/70 rounded px-[10px] py-[8px] flex items-center justify-center'>
                        <TfiReload className='h-[20px] w-[16px]' />
                    </div>
                    <div className='cursor-pointer border border-zinc-400/70 rounded py-[8px] px-[12px] flex flex-row items-center justify-center text-gray-700'>
                        <FaTrashCan className='h-[20px] w-[16px] mr-[8px]' /> <p className='font-[600]'>Discard Drafts</p>
                    </div>
                    <div className='cursor-pointer rounded py-[16px] px-[12px] flex flex-row items-center justify-center text-white bg-[#0A78BE]'>
                        <p className='font-[600]'>Review and publish (7)</p>
                    </div>
                    <div className='cursor-pointer border border-zinc-400/70 rounded py-[8px] px-[12px] flex flex-row items-center justify-center text-gray-700'>
                        <HiDotsHorizontal className='h-[20px] w-[16px]' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-between '>
                <div className='flex flex-row items-center justify-between space-x-[10px]'>
                    <div className='flex flex-row items-center justify-center px-[8px] py-[4px] cursor-pointer bg-white border border-[#067BAA] rounded hover:bg-[#C3DCF5]'>
                        <MdSearch className='h-[28px] w-[24px] text-[#067BAA]' />
                    </div>
                    <div className='cursor-pointer flex flex-row items-center justify-center py-[8px] px-[12px] bg-white border border-[#067BAA] rounded font-semibold hover:bg-[#C3DCF5]'>
                        <img src={allAds} alt='' className='h-[20px] w-[16px] mr-[8px]' /> <p className='text-[#067BAA] tracking-tight font-[800]'>All ads</p>
                    </div>
                    <div className='flex flex-row items-center justify-center px-[12px] py-[8px] rounded hover:bg-black/5 cursor-pointer '>
                        <MdAdd className='h-[20px] w-[18px] text-slate-700 mr-1' /> <p className='font-[600]'>More views</p>
                    </div>
                </div>
                <div className='cursor-pointer hover:bg-black/5 flex flex-row justify-center items-center bg-transparent text-[14px] font-semibold rounded border-[1.5px] border-gray-300 '>
                    <img src={month} alt='' className='h-[20px] w-[16px] text-gray-500 mx-[12px]' />
                    <div className='flex flex-row items-center justify-between h-[36px]'>
                        <span className='text-[0.875rem] leading-[1.42857px]'>1st Jan 2023 - 23rd Dec 2023</span>
                        <span className='mx-[12px]'><FaCaretDown className='size-[16px] text-[#42474F]' /></span>
                    </div>
                </div>
            </div>
            <div className='w-full px-[12px] py-[1px] bg-white rounded text-inter shadow-lg shadow-gray-200 border border-zinc-400/70'>
                <input type="text" placeholder='Search by name, Id or metrics' className='focus:outline-blue-400 outline-[1px] px-[12px] focus:shadow-inner shadow-blue-500 py-[8px] w-[300px] rounded-full' />
            </div>
            <div className=''>
                <div className='px-[8px] w-full flex flex-row space-x-[10px]'>
                    <div onClick={() => setActive(0)} className={`cursor-pointer rounded-t-md w-[210px] h-[45px] flex flex-row items-center p-2 ${active == 0 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-105' : 'bg-[#F9FBFC] shadow-[1.5px_-1px_4px_0px_rgba(1,1,1,0.15)] scale-100'} `}>
                        <img src={campaigns} alt='' className='h-[20px] w-[20px] mx-[8px]' /> <p className='font-[800] text-[15px] text-[#1c2b33] font-lato'>Campaigns</p>
                    </div>
                    <div onClick={() => setActive(1)} className={`cursor-pointer rounded-t-md w-[210px] h-[45px] flex flex-row items-center p-2 ${active == 1 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-105' : 'bg-[#F9FBFC] shadow-[1.5px_-1px_4px_0px_rgba(1,1,1,0.15)] scale-100'} `}>
                        <img src={adSet} alt='' className='h-[20px] w-[20px] mx-[8px]' /> <p className='font-[800] text-[15px] text-[#1c2b33] font-lato'>Ad sets</p>
                    </div>
                    <div onClick={() => setActive(2)} className={`cursor-pointer rounded-t-md w-[210px] h-[45px] flex flex-row items-center p-2 ${active == 2 ? 'shadow-[3px_-2px_8px_0px_rgba(1,1,1,0.15)] bg-white scale-y-105' : 'bg-[#F9FBFC] shadow-[1.5px_-1px_4px_0px_rgba(1,1,1,0.15)] scale-100'}`}>
                        <img src={ads} alt='' className='h-[20px] w-[20px] mx-[8px]' /> <p className='text-[#067BAA] font-[800] text-[15px] font-lato'>Ads</p>
                    </div>
                </div>
                {
                    active == 2 ?
                        <>
                            <div className='flex flex-col space-y-[10px]  rounded-b-lg shadow-md shadow-gray-400/30  py-2 bg-white rounded-lg'>
                                <div className='flex flex-row items-center space-x-[10px] justify-between'>
                                    <div className='flex flex-row items-center space-x-[10px]'>
                                        <div className='flex flex-row items-center space-x-[10px] border-r px-2'>
                                            <div className='w-fit cursor-pointer border border-[#0E7A5A] bg-[#0E7A5A] rounded py-[8px] px-[12px] flex flex-row items-center justify-center text-white'>
                                                <MdAdd className='h-[20px] w-[16px] text-white mr-[4px]' /> <p className='text-white font-[600]'>Create</p>
                                            </div>
                                            <CustomSelect text={"Duplicate"} icon={<img src={duplicate} alt='' className='h-[20px] w-[16px] mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                            <CustomSelect text={"Edit"} icon={<img src={edit} alt='' className='h-[20px] w-[16px] mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                        </div>
                                        <div className='flex flex-row items-center space-x-[10px]'>
                                            <div className='w-fit cursor-pointer border border-zinc-400/70 bg-white rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-700 text-base'>
                                                <img src={test} alt='' className='h-[20px] w-[16px] mr-1' /> A/B Test
                                            </div>
                                            <div className='flex flex-row items-center justify-between px-[12px] py-[8px] rounded hover:bg-black/5 cursor-pointer space-x-[12px]'>
                                                <p className='font-[600]'>More </p>
                                                <FaCaretDown className='size-[16px] text-[#42474F]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-[10px] px-2'>
                                        <div onClick={() => setColumnActive(!columnActive)} className='relative cursor-pointer hover:bg-black/5 flex flex-row justify-center items-center bg-transparent text-[14px] font-semibold rounded border-[1.5px] border-gray-300 '>
                                            <img src={columns} alt='' className='h-[20px] w-[16px] text-gray-500 mx-[12px]' />
                                            <div className='flex flex-row items-center justify-between h-[36px]'>
                                                <span className='text-[0.875rem] leading-[1.42857px]'>Columns:Custom</span>
                                                <span className='mx-[12px]'><FaCaretDown className='size-[16px] text-[#42474F]' /></span>
                                            </div>
                                            {columnActive &&
                                                <div className='w-[300px] absolute bg-white top-11 z-50 right-0 rounded-[6px] shadow shadow-slate-300'>
                                                    <div className='flex flex-row w-full bg-white'>
                                                        <p className='text-[1rem] font-[600] tracking-normal leading-normal text-roboto text-[#1c2b33] px-[12px] py-[2px]'>Recently Used</p>
                                                    </div>
                                                    <div className='bg-white px-1 py-[4px] w-full h-full flex flex-col rounded-b-[6px]'>
                                                        <div className='bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <div className='h-[24px] w-[24px] bg-white relative rounded-full border border-zinc-400/70'>
                                                                <div className='h-[12px] w-[12px] bg-[#1877F2] rounded-full absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                                                            </div>
                                                            <div className='h-auto w-auto '>
                                                                <p className='text-[0.875rem] tracking-normal leading-normal text-roboto text-[#1c2b33]'>Performance</p>
                                                            </div>
                                                        </div>
                                                        <div className='h-[1.5px] bg-gray-200 w-full my-1'></div>
                                                        <div className='flex flex-row w-full bg-white py-[6px]'>
                                                            <p className='text-[1rem] font-[600] tracking-normal leading-normal text-roboto text-[#1c2b33] px-[12px] py-[2px]'>Popular</p>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <div className='h-[24px] w-[24px] bg-white relative rounded-full border border-zinc-400/70'>
                                                                <div className='h-[12px] w-[12px] bg-[#1877F2] rounded-full absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                                                            </div>
                                                            <div className='h-auto w-auto'>
                                                                <p className='text-[0.875rem] tracking-normal leading-normal text-roboto text-[#1c2b33] font-normal'>Performance and Clicks</p>
                                                            </div>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <div className='h-[24px] w-[24px] bg-white relative rounded-full border border-zinc-400/70'>
                                                                <div className='h-[12px] w-[12px] bg-[#1877F2] rounded-full absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                                                            </div>
                                                            <div className='h-auto w-auto'>
                                                                <p className='text-[0.875rem] tracking-normal leading-normal text-roboto text-[#1c2b33] font-normal'>Engagement</p>
                                                            </div>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <div className='h-[24px] w-[24px] bg-white relative rounded-full border border-zinc-400/70'>
                                                                <div className='h-[12px] w-[12px] bg-[#1877F2] rounded-full absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                                                            </div>
                                                            <div className='h-auto w-auto'>
                                                                <p className='text-[0.875rem] tracking-normal leading-normal text-roboto text-[#1c2b33] font-normal'>Delivery</p>
                                                            </div>
                                                        </div>
                                                        <div className='h-[1.5px] bg-gray-200 w-full my-1'></div>
                                                        <div className='hover:bg-[#ECF3FF] border border-zinc-400/70 rounded-[4px] flex items-center justify-center cursor-pointer py-[16px] mt-[12px]'>
                                                            <p className='font-[700] text-black hover:bg-[#ECF3FF]'>Customise Colums</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div onClick={() => setBreakDownActive(!breakDownActive)} className='relative cursor-pointer hover:bg-black/5 flex flex-row justify-center items-center bg-transparent text-[14px] font-semibold rounded border-[1.5px] border-gray-300 '>
                                            <img src={breakdown} alt='' className='h-[20px] w-[16px] text-gray-500 mx-[12px]' />
                                            <div className='flex flex-row items-center justify-between h-[36px]'>
                                                <span className='text-[0.875rem] leading-[1.42857px]'>Breakdown</span>
                                                <span className='mx-[12px]'><FaCaretDown className='size-[16px] text-[#42474F]' /></span>
                                            </div>
                                            {breakDownActive &&
                                                <div className='w-[230px] absolute bg-white top-11 z-50 left-0 rounded-[6px] shadow shadow-slate-300 p-2'>
                                                    <div className='flex flex-row w-full bg-white border border-blue-400 p-1 rounded-[4px]'>
                                                        <MdSearch className='h-[24px] w-[24px]' />
                                                        <input type="text" className='w-full px-[12px] h-[24px] rounded-[4px]' placeholder='Search ' />
                                                    </div>
                                                    <div className='bg-white py-[4px] w-full h-full flex flex-col rounded-b-[6px]'>
                                                        <div className='flex flex-row w-full bg-white py-[6px]'>
                                                            <p className='text-[1rem] font-[600] tracking-normal leading-normal text-roboto text-[#1c2b33] px-[12px] py-[2px]'>Popular</p>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <input type="checkbox" className='h-[24px] w-[24px] focus:outline-none bg-white relative rounded-full border border-zinc-400/70 mr-1' />
                                                            <label htmlFor="" className='font-normal text-black'>Day</label>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <input type="checkbox" className='h-[24px] w-[24px] focus:outline-none bg-white relative rounded-full border border-zinc-400/70 mr-1' />
                                                            <label htmlFor="" className='font-normal text-black'>Age</label>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <input type="checkbox" className='h-[24px] w-[24px] focus:outline-none bg-white relative rounded-full border border-zinc-400/70 mr-1' />
                                                            <label htmlFor="" className='font-normal text-black'>Placement</label>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <input type="checkbox" className='h-[24px] w-[24px] focus:outline-none bg-white relative rounded-full border border-zinc-400/70 mr-1' />
                                                            <label htmlFor="" className='font-normal text-black'>Country</label>
                                                        </div>
                                                        <div className='hover:bg-[#ECF3FF] p-2 flex flex-row items-center rounded-md space-x-[4px] h-[40px]'>
                                                            <input type="checkbox" className='h-[24px] w-[24px] focus:outline-none bg-white relative rounded-full border border-zinc-400/70 mr-1' />
                                                            <label htmlFor="" className='font-normal text-black'>Platform</label>
                                                        </div>
                                                        <div className='h-[1.5px] bg-gray-200 w-full my-1'></div>
                                                        <div className='hover:bg-[#ECF3FF] border border-zinc-400/70 rounded-[4px] flex items-center justify-center cursor-pointer py-[16px] mt-[12px]'>
                                                            <p className='font-[700] text-black hover:bg-[#ECF3FF]'>Custom Breakdown</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        <div onClick={() => setReportActive(!reportActive)} className='relative cursor-pointer hover:bg-black/5 flex flex-row justify-center items-center bg-transparent text-[14px] font-semibold rounded border-[1.5px] border-gray-300 '>
                                            <img src={book} alt='' className='h-[20px] w-[16px] text-gray-500 mx-[12px]' />
                                            <div className='flex flex-row items-center justify-between h-[36px]'>
                                                <span className='mx-[12px]'><FaCaretDown className='size-[16px] text-[#42474F]' /></span>
                                            </div>
                                            {reportActive &&
                                                <div className='w-auto absolute bg-white top-11 z-50 right-0 rounded-[6px] shadow shadow-slate-300 p-2'>
                                                    <div className='flex flex-row w-full bg-white'>
                                                        <p className='text-[1rem] font-[600] tracking-normal leading-normal text-roboto text-[#1c2b33] pb-[8px]'>Ads Reporting</p>
                                                    </div>
                                                    <div className='flex flex-row items-center space-x-[12px] w-full bg-white py-[12px] px-[8px] rounded-[4px] hover:bg-[#ECF3FF]'>
                                                        <MdAdd className='h-[20px] w-[16px]' />
                                                        <p className='font-normal text-black'> Create new report</p>
                                                    </div>
                                                    <div className='flex flex-row items-center space-x-[12px] w-full bg-white py-[12px] px-[8px] rounded-[4px] hover:bg-[#ECF3FF]'>
                                                        <MdSearch className='h-[20px] w-[16px]' />
                                                        <p className='font-normal text-black text-nowrap'> View Ad Creative Performance</p>
                                                    </div>
                                                    <div className='flex flex-row items-center space-x-[12px] w-full bg-white py-[12px] px-[8px] rounded-[4px] hover:bg-[#ECF3FF]'>
                                                        <img src={duplicate} className='h-[20px] w-[16px]' />
                                                        <p className='font-normal text-black'> Try Report Templates</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <CustomSelect icon={<img src={export2} alt='' className='h-[20px] w-[16px] text-gray-700 mr-1' />} options={["Option 1", "Option 2", "Option 3"]} />
                                        <div className='cursor-pointer hover:bg-black/5  border border-zinc-400/70 rounded py-[6px] px-3 flex flex-row items-center justify-center text-gray-700 text-base'>
                                            <img src={charts} alt='' className='h-[20px] w-[16px] mr-2' /> Charts
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
                            <div className='flex flex-row items-center justify-center  rounded-b-lg shadow-md shadow-gray-400/30  py-2 bg-white rounded-lg h-[70vh]'>
                                <p className='font-900 font-lato'>NO DATA HERE</p>
                            </div>
                        </>
                }
                {/* Git hub is not working */}
            </div>
        </main>
    )
}

export default MainComponent