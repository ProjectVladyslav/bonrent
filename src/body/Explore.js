import Cube from "../img/cube.png"
import '../../node_modules/animate.css/animate.css';

function Explore() {
    return (
        <section id="section1">
            <div className="flex lg:flex-row flex-col pt-20" >

                <div className="lg:w-5/12 w-11/12 mt-10 lg:mt-40 flex lg:content-center flex-col mx-auto lg:mx-0">
                    <p className="text-5xl lg:text-7xl font-bold lg:ml-[150px]">FIND A HIGH
                        QUALITY BIKE
                        AND RENT NOW</p>
                    <p className="lg:ml-[150px] mt-8 text-2xl">lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <div className=" lg:ml-[150px] mt-7 space-x-5">
                        <button className="bg-red-500 border-solid border-2 border-red-500 text-white px-6 py-2 hover:bg-white hover:text-red-500">EXPLORE BIKE</button>
                        <button className="bg-white border-solid border-2 border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white">ABOUT US</button>
                    </div>
                </div>
                <div className="lg:w-7/12 w-12/12">
                    <img className="w-full animate__animated animate__lightSpeedInRight" src={Cube} alt="" />
                    <div className="shadow-black-500 absolute -mt-[150px] ml-[15px] lg:-mt-[320px] lg:ml-[260px] px-5 lg:px-10  flex flex-row space-x-10 py-5 lg:py-10 bg-white w-11/12 md:w-[65%] lg:w-[29%] animate__animated animate__delay-2s animate__zoomIn">
                        <div className="w-6/12">
                            <p className="text-md md:text-xl text-gray-500 font-semibold">POPULAR BIKES</p>
                            <p className="text-md  md:text-3xl mt-2 text-black font-semibold">Road Bike - 252</p>
                        </div>
                        <div className="w-6/12">
                            <p className="text-md  md:text-xl text-gray-500 font-semibold">Price</p>
                            <p className="text-md  md:text-3xl mt-2 text-red-500 font-semibold">20$ / Day</p>
                        </div>
                    </div>
                </div>

            </div> </section>
    )
}

export default Explore