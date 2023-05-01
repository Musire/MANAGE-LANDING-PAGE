import { useState } from "react";
import { ComponentText as text } from "../../constants/text"
import { Slide, Dots, Dot } from ".";

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

        if (deltaX > 50) {
            setTouchStart(null);
            setCurrentIndex(currentIndex === 0 ? max - 1 : currentIndex - 1);
        } else if (deltaX < -50) {
            setTouchStart(null);
            setCurrentIndex(currentIndex === max - 1 ? 0 : currentIndex + 1);
        }
    };

    const objectArray = Object.values(Text.slides)
    const slides = objectArray.map((item, index) => <Slide current={currentIndex} slide={index} key={item.name} max={max} />)

    return (
        <div className="w-full pb-10 spaced-col">
            <div className="relative xs:w-full lg:w-1/2 xs:h-128 lg:h-96 desktop:w-1/4 desktop:-translate-x-[25%]" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
                {slides}
            </div>
            <Dots >
                {objectArray.map((item, index) => <Dot key={index} dot={index} current={currentIndex} />)}
            </Dots>
            <button className="hero-button xs:hidden lg:block">Get Started</button>
        </div>
     );
}
 
export default Slider;