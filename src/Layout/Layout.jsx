import Leftbar from '../Components/Leftbar.jsx'
import Rightbar from '../Components/Rightbar.jsx'
import MainComponent from '../Components/MainComponent.jsx'

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