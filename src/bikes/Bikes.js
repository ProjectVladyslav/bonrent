
import React, { useState } from "react";
import bikes from "./bikes.json"
import New from "../body/New"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [];
    for (let i = 0; i < bikes.length; i += 3) {
        slides.push(bikes.slice(i, i + 3));
    }

    const handlePrevClick = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const handleNextClick = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div>
            <h1 className="mx-auto text-center font-bold uppercase text-5xl mt-[150px] pb-[100px] text-[#04162E]" > New arrivals</h1 >
            <div className="container mx-auto justify-center flex flex-col md:flex-row md:space-y-0 space-y-40 md:space-x-20 lg:space-x-40">

                {
                    slides[currentSlide].map((product, index) => (
                        <New key={index} bike={product.name} price={product.price} img={product.img} id={product.id} />
                    ))
                }
            </div>
            <div className="flex mx-auto justify-center space-x-5">
                <button onClick={handlePrevClick} className=" mt-8 bg-red-500 border-solid border-2 border-red-500 text-white px-4 py-2 hover:bg-white hover:text-red-500"><i className="fa-solid fa-chevron-left"></i> </button >
                <button onClick={handleNextClick} className=" mt-8 bg-red-500 border-solid border-2 border-red-500 text-white px-4 py-2 hover:bg-white hover:text-red-500"><i className="fa-solid fa-chevron-right"></i></button> </div>
        </div >
    );
};

export default Slider;