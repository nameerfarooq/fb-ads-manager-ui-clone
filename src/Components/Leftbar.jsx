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
import svg11 from '../assets/11.svg'
import svg12 from '../assets/12.svg'
import svg13 from '../assets/13.svg'

const Leftbar = () => {
    return (
        <main className='w-full py-[8px] bg-white h-screen flex flex-col justify-between items-center border-r-[1px] border-gray-300'>
            <div className='w-fit flex flex-col items-center space-y-[27px]'>
                <div className='flex flex-col space-y-[15px] items-center'>
                    <div className='p-[6px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={logo} alt="" className='h-[31px]' />
                    </div>
                    <div className='px-[12px] py-[8px] hover:bg-black/5 cursor-pointer'>
                        <div className='bg-black rounded-[4px] h-[32px] w-[32px] flex items-center justify-center'>
                            <p className='text-md font-black font-poppins text-white'>B</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg11} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full bg-[#e1edf7] h-auto p-[8px] rounded-sm hover:bg-[#c3dcf5] cursor-pointer'>
                        <img src={svg3} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg2} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg4} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg5} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg12} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg1} alt="" className='w-[23px] h-[23px]' />
                    </div>
                </div>
            </div>
            <div className=' w-fit flex flex-col items-center space-y-[30px] border-t-[1px]'>
                <div className='flex flex-col items-center pt-[10px]'>
                    <div className='w-full h-auto p-[8px] bg-[#F2F2F2] cursor-pointer rounded-full'>
                        <MdOutlineQuestionMark className='w-[23px] h-[23px] text-gray-400' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg13} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg7} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg6} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg9} alt="" className='w-[23px] h-[23px]' />
                    </div>
                    <div className='w-full h-auto p-[8px] rounded-sm bg-white hover:bg-[#F2F2F2] cursor-pointer'>
                        <img src={svg8} alt="" className='w-[23px] h-[23px]' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Leftbar