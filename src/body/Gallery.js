
import Photo1 from "../img/1.png"
import Photo2 from "../img/2.png"
import Photo3 from "../img/3.png"
import Photo4 from "../img/4.png"
import Photo5 from "../img/5.png"

function Gallery() {
    return (
        <>
            <section id="section5">
                <div className="container mx-auto mt-[100px] lg:px-[180px]">
                    <h1 className="text-center mb-[80px] font-bold text-[#04162E] text-5xl uppercase ">Our Gallery</h1>

                    <div className="flex flex-wrap justify-center md:justify-between">

                        <div className="w-10/12 lg:w-auto flex flex-col items-end md:flex-row xl:flex-col mb-4 space-y-5 mx-auto space-x-5 ml-9">
                            <img src={Photo1} alt="image1" className="mb-4 md:mb-0 mx-auto lg:mx-0 hover:transform hover:scale-125" />
                            <img src={Photo3} alt="image2" className="mx-auto lg:mx-0 hover:transform hover:scale-125" />
                        </div>

                        <div className="w-10/12 lg:w-auto flex flex-col items-center ml-0 md:ml-8 mb-4 md:mb-0 space-y-2 ">

                            <img src={Photo2} alt="image3" className="mb-4 md:mb-0 mx-auto lg:mx-0 hover:transform hover:scale-125" />

                            <div className="flex md:flex-row flex-col space-x-5">
                                <img src={Photo4} alt="image4" className="mr-4 md:mr-0 mx-auto lg:mx-0 hover:transform hover:scale-125" />
                                <img src={Photo5} alt="image5" className="mx-auto lg:mx-0 hover:transform hover:scale-125" />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Gallery