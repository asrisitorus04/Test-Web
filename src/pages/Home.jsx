import { useEffect, useState } from "react"
import { TbAntennaBars5 } from "react-icons/tb"
import { FaWallet } from "react-icons/fa"
import { AiTwotonePlusCircle, AiOutlineSwap, AiOutlineDownload, AiFillFile } from "react-icons/ai"
import { BsFillSunFill, BsFillMoonFill, BsCloud } from "react-icons/bs"

import Card from "../components/Card"
import { useApi } from "../utils/hooks/useApi"
import Chart from "../components/Chart"

const BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=-6.1862&longitude=106.8063&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,visibility,windspeed_10m,temperature_80m"

const Home = () => {

    const celcius = ["17", "23", "27", "32", "36"]
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        useApi("get", BASE_URL)
            .then(res => {
                setData(res.hourly)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            {loading ? <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 rounded-full bg-white animate-bounce"></div>
                <div className="w-16 h-16 rounded-full bg-white animate-bounce"></div>
                <div className="w-20 h-20 rounded-full bg-white animate-bounce"></div>
            </div> :
                <div className="sm:flex justify-between ">
                    {/* Left side */}
                    <div className="lg:w-4/12 p-5 bg-primary-800 text-secondary rounded-xl w-full lg:mr-10 sm:mr-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-1">Weather</h2>
                                <h5 className="text-xs">{data.time[108]}</h5>
                            </div>
                            <TbAntennaBars5 size={20} color="green" />
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <div className="flex w-5/12 justify-around items-center">
                                <AiTwotonePlusCircle />
                                <BsFillSunFill size={20} />
                                <BsCloud size={20} />
                                <BsFillMoonFill size={20} />
                            </div>
                            <h1 className="text-4xl relative font-bold text-white">{data.temperature_2m[108]}<span className="text-xs absolute top-2">&#176;C</span></h1>
                        </div>
                        <div className="flex justify-between mt-12 pl-2 pr-4">
                            {celcius.map((list, index) => {
                                return (
                                    <span className="relative" key={index}>{list}<span className="absolute top-0">&#176;C</span></span>
                                )
                            })}
                        </div>
                        <div className="bg-white z-10 rounded-full h-2 mt-6">
                            <div className="bg-gradient-to-r from-[#485eb8] to-[#784fc8] rounded-full h-2 w-8/12"></div>
                        </div>
                        <div className="my-8">
                            <span className="text-xs">Details</span>
                            <Card data={data} />
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="sm:w-4/6 mt-6 sm:mt-0">
                        {/* Top section */}
                        <div className="text-secondary bg-primary-800 rounded-xl p-5">
                            <h2 className="sm:text-xl font-semibold text-white mb-1">Earnings</h2>
                            <h5 className="text-xs">EARNINGS</h5>
                            <h1 className="sm:text-4xl text-xl relative font-bold text-white text-right my-5">$123.34</h1>
                            <div className="lg:flex mb-6">
                                <div className="w-full lg:w-8/12">
                                    <Chart tem={data} />
                                </div>
                                <div className=" lg:w-4/12">
                                    <span className="text-lg text-white font-semibold text-right"><span className="text-success">+42%</span> since last week</span>
                                    <div>
                                        <div className="bg-primary-500 p-5 text-center mt-6 w-full lg:w-8/12 sm:ml-auto">11800 ETH</div>
                                        <div className="bg-primary-500 p-5 text-center mt-3 sm:ml-auto lg:w-8/12">16800 SNT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom section */}
                        <div className="lg:grid grid-cols-2 mt-6 gap-6">
                            {/* Left side */}
                            <div className=" p-5 text-secondary grid grid-rows-2 bg-primary-800 rounded-xl">
                                <div className="flex items-center h-fit justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white mb-1">Current Balance</h2>
                                        <h5 className="text-xs">TODAY</h5>
                                    </div>
                                    <button className="hover:bg-btn-500 cursor-pointer flex h-fit p-2 bg-btn text-white rounded shadow-md shadow-btn"><AiOutlineSwap size={22} className="mr-2" />Send Money</button>
                                </div>
                                <div className="grid grid-cols-2 h-24">
                                    <div className="text-3xl flex items-center text-white">$2438,55</div>
                                    <div className="grid grid-rows-2">
                                        <div>
                                            <span>Income</span>
                                            <span className="text-success"> +$3567</span>
                                        </div>
                                        <div className="flex items-end">
                                            <span>Expenses</span>
                                            <span className="text-danger ml-1"> -$3567</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="mt-5 lg:mt-0 p-5 text-secondary flex flex-col bg-primary-800 rounded-xl">
                                <div className="flex items-center h-fit mb-5 justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white mb-1">Withdraw Funds</h2>
                                        <h5 className="text-xs">TODAY</h5>
                                    </div>
                                    <button className="flex h-fit p-2 bg-btn text-white rounded shadow-md shadow-btn hover:bg-btn-500"><AiOutlineDownload size={22} className="mr-2" />Withdraw</button>
                                </div>
                                <div className="grid grid-rows-2 mb-2">
                                    <div className="flex justify-between items-center border-b-2 pb-5 mt-5 border-secondary">
                                        <span className="flex items-center"><FaWallet className="mr-2" />Amount: </span>
                                        <span className="text-white flex items-center">$1,000,000</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b-2 border-secondary pb-5 mt-5">
                                        <span className="flex items-center"><AiFillFile className="mr-2" />Confirmation N: </span>
                                        <span className="text-white flex items-center">394849304832456</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Home