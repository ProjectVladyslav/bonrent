import React, { useState, useEffect } from "react";
import Bikes from "../body/Bikes";
import slidesData from "./slidesData.json";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
            );
        }, 6500);

        return () => clearInterval(interval);
    }, []);


    return (

        <div className="slider ">
            <div className="slider-items ">
                {slidesData.map((slide, index) => (
                    <Bikes
                        key={index}
                        id={slide.id}
                        active={index === activeIndex}
                        image={slide.image}
                        title={slide.title}
                        weight={slide.weight}
                        wheel={slide.wheel}
                        chain={slide.chain}
                        price={slide.price}
                        description={slide.description}

                    />

                ))}
            </div>
        </div>

    );
};

export default Slider;