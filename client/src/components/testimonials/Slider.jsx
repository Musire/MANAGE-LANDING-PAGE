import { useState } from "react";
import { ComponentText as text } from "../../constants/text"
import { Slide, Dots, Dot } from ".";

const distance = {
    0: "xs:translate-x-[38rem] sm:translate-x-[56rem] md:translate-x-[39rem] desktop:translate-x-[25rem]",
    1: "xs:translate-x-[13rem] sm:translate-x-[31.5rem] md:translate-x-[14rem] desktop:translate-x-[0rem]",
    2: "xs:-translate-x-[12rem] sm:translate-x-[7rem] md:-translate-x-[11rem] desktop:-translate-x-[25rem]",
    3: "xs:-translate-x-[37rem] sm:-translate-x-[17.5rem] md:-translate-x-[36rem] desktop:-translate-x-[50rem]"
}

const Slider = ({ max, view}) => {
    const Text = text.testimonials
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (touchStart === null) {
            return;
        }

        const touchMove = e.touches[0].clientX;
        const deltaX = touchMove - touchStart;

        if (deltaX > 50 ) {
            setTouchStart(null);
            setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
        } else if (deltaX < -50 ) {
            setTouchStart(null);
            setCurrentIndex(currentIndex === max - 1 ? max - 1 : currentIndex + 1);
        }
    };

    const objectArray = Object.values(Text.slides)
    const slides = objectArray.map((item, index) => <Slide view={view} current={currentIndex} slide={index} key={item.name} max={max} />)

    return (
        <div className="xs:w-[400%] md:w-[100rem] pb-10 spaced-col">
            <div className="relative w-full h-128">
                <div className={`w-full absolute left-0 top-0 xs:h-128 lg:h-96  flex flex-row gap-x-4 slow-transition ${distance[currentIndex]}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
                    {slides}
                </div>
            </div>
            <Dots >
                {objectArray.map((item, index) => <Dot key={index} dot={index} current={currentIndex} />)}
            </Dots>
            <button className="hero-button xs:hidden lg:block">Get Started</button>
        </div>
     );
}
 
export default Slider;