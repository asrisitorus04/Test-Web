import { MdWaterDrop } from "react-icons/md"
import { RiSignalTowerLine } from "react-icons/ri"
import { GiMeepleCircle } from "react-icons/gi"
import { TbWind } from "react-icons/tb"
import { BsEye } from "react-icons/bs"
import { FaTemperatureLow } from "react-icons/fa"

const Card = ({data}) => {

    const card = [
        {
            icon: <MdWaterDrop size={24} />,
            name: "Humidity",
            desc: data.relativehumidity_2m[108] + " %"
        },
        {
            icon: <TbWind size={24} />,
            name: "Wind",
            desc: data.windspeed_10m[108] + " Km/h"
        },
        {
            icon: <FaTemperatureLow size={24} />,
            name: "Feels like",
            desc: <span className="relative">{data.temperature_80m[108]}<span className="absolute top-0">&#176;</span></span>
        },
        {
            icon: <BsEye size={24} />,
            name: "Visibility",
            desc: data.visibility[108] + " m"
        },
        {
            icon: <RiSignalTowerLine size={24} />,
            name: "Pressure",
            desc: "24.25 in"
        },
        {
            icon: <GiMeepleCircle size={24} />,
            name: "Dew Point",
            desc: <span className="relative">11<span className="absolute top-0">&#176;</span></span>
        },
    ]

    return (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-6 gap-x-3 mt-4 px-1">
            {card.map((list, index) => {
                return (
                    <div key={index} className="cursor-pointer transition duration-300 hover:bg-[#332b64] bg-primary-500 text-white flex-col flex justify-center items-center py-7 rounded">
                        {list.icon}
                        <span className="text-[#595587] text-sm my-2">{list.name}</span>
                        <span className="font-bold text-sm">{list.desc}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Card