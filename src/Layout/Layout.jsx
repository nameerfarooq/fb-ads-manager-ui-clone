import React from 'react'
import Leftbar from '../Components/leftbar'
import Rightbar from '../Components/Rightbar'
import MainComponent from '../Components/MainComponent'

const Layout = () => {
    return (
        <main className="">
            <div className="flex flex-row w-full h-screen">
                <div className="w-auto">
                    <Leftbar />
                </div>
                <div className="w-full">
                    <MainComponent />
                </div>
                <div className="w-auto">
                    <Rightbar />
                </div>
            </div>
        </main>
    )
}

export default Layout