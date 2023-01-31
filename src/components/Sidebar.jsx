import { useSelector } from "react-redux"
import { MdDashboard, MdToggleOn } from "react-icons/md"
import { SiFormstack } from "react-icons/si"
import { HiMail, HiOutlineFolderOpen } from "react-icons/hi"
import { BsStack } from "react-icons/bs"
import { FaPaintBrush, FaMapMarkerAlt } from "react-icons/fa"
import { RiLayout5Fill, RiLayoutRight2Fill } from "react-icons/ri"
import { CgMenuGridO } from "react-icons/cg"
import { TfiMenuAlt } from "react-icons/tfi"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { update } from "./../utils/redux/navSlicer"

const Sidebar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const nav = useSelector((state) => state.nav.value)

    const classLiActive = `bg-primary-500 text-white cursor-pointer flex align-middle justify-center p-2.5 sm:justify-start`
    const classLi = `hover:bg-primary-500 hover:text-white cursor-pointer flex align-middle justify-center sm:justify-start p-2.5`

    const general = [
        {
            icon: <MdDashboard size={22} />,
            name: "Home"
        },
        {
            icon: <MdDashboard size={22} />,
            name: "Dashboard"
        },
        {
            icon: <SiFormstack size={22} />,
            name: "Forms"
        },
        {
            icon: <HiMail size={22} />,
            name: "Inbox"
        },
        {
            icon: <BsStack size={22} />,
            name: "Stepper"
        },
        {
            icon: <FaPaintBrush size={22} />,
            name: "Ui Elements"
        },
        {
            icon: <RiLayout5Fill size={22} />,
            name: "Layout"
        },
        {
            icon: <CgMenuGridO size={22} />,
            name: "Icons"
        },
    ]

    const layout = [
        {
            icon: <RiLayoutRight2Fill size={24} />,
            name: "Subheaders"
        },
        {
            icon: <TfiMenuAlt size={24} />,
            name: "Builder"
        },
        {
            icon: <MdToggleOn size={24} />,
            name: "General"
        },
    ]

    const components = [
        {
            icon: <HiOutlineFolderOpen size={24} />,
            name: "Tables"
        },
        {
            icon: <FaMapMarkerAlt size={24} />,
            name: "Map"
        },
    ]

    const handlePage = (page) => {
        dispatch(update(page))
        navigate(`/${page}`)
    }

    return (
        <div className="text-[#4e4775] drop-shadow-md">
            {/* Section 1 */}
            <img width={180} className="mx-auto mt-2" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Integration_Testing.jpg" />
            <ul className="mt-2 mb-5">
                {general.map((list, index) => {
                    return (
                        (nav === list.name ? <li onClick={() => handlePage(list.name)} key={index} className={classLiActive}>
                            {list.icon}<span className="pl-4 text-sm hidden sm:block">{list.name}</span>
                        </li> : <li onClick={() => handlePage(list.name)} key={index} className={classLi}>
                            {list.icon}<span className="pl-4 text-sm hidden sm:block sm:justify-start">{list.name}</span>
                        </li>)
                    )
                })}
            </ul>
            {/* Section 2 */}
            <span className="text-center block sm:text-left">LAYOUT</span>
            <ul className="my-5">
                {layout.map((list, index) => {
                    return (nav === list.name ? <li onClick={() => handlePage(list.name)} key={index} className={classLiActive}>
                        {list.icon}<span className="pl-4 text-sm hidden sm:block">{list.name}</span>
                    </li> : <li onClick={() => handlePage(list.name)} key={index} className={classLi}>
                        {list.icon}<span className="pl-4 text-sm hidden sm:block sm:justify-start">{list.name}</span>
                    </li>
                    )
                })}
            </ul>
            {/* Section 3 */}
            <span className="text-[11px] text-center block sm:text-left sm:text-base">COMPONENTS</span>
            <ul className="my-5">
                {components.map((list, index) => {
                    return (nav === list.name ? <li onClick={() => handlePage(list.name)} key={index} className={classLiActive}>
                        {list.icon}<span className="pl-4 text-sm hidden sm:block">{list.name}</span>
                    </li> : <li onClick={() => handlePage(list.name)} key={index} className={classLi}>
                        {list.icon}<span className="pl-4 text-sm hidden sm:block sm:justify-start">{list.name}</span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar