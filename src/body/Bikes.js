import "./Bikes.css"
import React from 'react';


function Bikes({ active, price, image, title, description, weight, wheel, chain, id }) {

    return (
        <section id="section3">
            <div className="container mx-auto mt-[100px]" >
                <div className="absolute lg:left-[20%] ">
                    <div className={` flex flex-col lg:flex-row slider-item ${active ? "active" : ""}`}>
                        <div className="lg:w-4/12 w-10/12 lg:mx-0 mx-auto mt-10">
                            <img src={image} alt={title} />
                        </div>

                        <div className="slider-item-content lg:w-4/12 ml-10">
                            <h2 className="font-bold text-4xl mt-10 lg:mt-0 ">{title}</h2>
                            <p className="mt-5">{description}</p>
                            <hr className="h-px w-11/12 my-8 bg-gray-200 border-0 dark:bg-gray-400" />
                            <div className="flex flex-row space-x-14 lg:space-x-10 xl:space-x-28 md:space-x-28 md:justify-center lg:justify-start">
                                <div>
                                    <h1 className=" text-gray-500 text-sm uppercase">Weight</h1>
                                    <h1 className="mt-2 font-bold text-black-500 text-lg uppercase">{weight}</h1>
                                </div>
                                <div>
                                    <h1 className=" text-gray-500 text-sm uppercase">Wheel Size</h1>
                                    <h1 className="mt-2 font-bold text-black-500 text-lg uppercase">{wheel}</h1>
                                </div>
                                <div>
                                    <h1 className=" text-gray-500 text-sm uppercase">Chain</h1>
                                    <h1 className="mt-2 font-bold text-black-500 text-lg uppercase">{chain}</h1>
                                </div>
                            </div>
                            <hr className="h-px w-11/12 my-8 bg-gray-200 border-0 dark:bg-gray-400" />
                            {active && (<div className="flex flex-row space-x-16">
                                <button htmlFor="modal-rent" data-key={id} className="bg-red-600 border-red-600 border-2 text-white px-5 py-1 lg:py-2 hover:bg-white hover:text-red-500">RENT NOW </button>
                                <h1 className="my-auto text-gray-500 text-md uppercase">Price: <span className="my-0 text-red-500 text-3xl font-semibold uppercase">{price}/DAY</span></h1>
                            </div>)}
                        </div>

                    </div>
                </div>
            </div>

        </section>


    );
};

export default Bikes