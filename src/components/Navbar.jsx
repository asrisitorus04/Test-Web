import { FiMail } from "react-icons/fi"
import { BsBell } from "react-icons/bs"
import { MdArrowDropDown } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import { FaSearch } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:h-16 items-center justify-between mb-10 text-secondary">
            {/* Left section */}
            <div className="flex items-center w-10/12 sm:w-4/12 mt-5 sm:mt-0">
                <TfiMenuAlt size={30}/>
                <div className="flex items-center w-full">
                    <input placeholder="Search" className="bg-transparent border-b-[3px] border-secondary  w-full focus:outline-none focus:border-b-[4px] p-2 ml-5 " type="search" />
                    <FaSearch size={20} />
                </div>
            </div>
            {/* Right section */}
            <div className="flex items-center w-full sm:w-5/12 md:w-7/12 justify-evenly">
                <div className="relative">
                    <BsBell size={22} />
                    <div className="bg-[#b64f53] text-white rounded-full w-5 h-5 text-xs flex justify-center items-center absolute -right-4 -top-3">3</div>
                </div>
                <div className="relative">
                    <FiMail size={22} />
                    <div className="bg-[#513bab] text-white rounded-full w-5 h-5 text-xs flex justify-center items-center absolute -right-5 -top-3">6</div>
                </div>
                {/* Language */}
                <div className="flex items-center w-1/4 justify-around">
                    <img className="rounded-full" src="https://toppng.com/uploads/preview/uk-round-flag-11563596900h0bvrmnyb2.png" width={22} height={30} />
                    <span className="text-lg text-white">English</span>
                    <MdArrowDropDown size={20} />
                </div>
                {/* Profile */}
                <div className="flex items-center">
                    <img src="https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" className="rounded-full" width={50} height={50} />
                    <MdArrowDropDown size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar