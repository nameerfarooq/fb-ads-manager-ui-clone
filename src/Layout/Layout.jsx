import Leftbar from '../Components/Leftbar.jsx'
import Rightbar from '../Components/Rightbar.jsx'
import MainComponent from '../Components/MainComponent.jsx'

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