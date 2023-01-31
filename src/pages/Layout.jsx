import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = ({ children }) => {

    return (
        <div className="flex bg-gradient-to-r from-[#332b64] via-[#1c1353] to-[#19114b]">
            {/* Left side */}
            <div className="min-h-screen w-1/5 bg-primary">
                <Sidebar />
            </div>
            {/* Right side */}
            <div className="w-10/12 px-3 sm:pl-10">
                <Navbar />
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout