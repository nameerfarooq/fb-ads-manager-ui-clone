import React from 'react'
import Leftbar from '../Components/leftbar'
import Rightbar from '../Components/Rightbar'
import MainComponent from '../Components/MainComponent'

const Layout = () => {
    return (
        <main className="">
            <div className="flex flex-row w-full h-screen">
                <div className="w-[3.5%]">
                    <Leftbar />
                </div>
                <div className="w-[93.5%]">
                    <MainComponent />
                </div>
                <div className="w-[3%]">
                    <Rightbar />
                </div>
            </div>
        </main>
    )
}

export default Layout