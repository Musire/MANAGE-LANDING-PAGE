import { ComponentText as text } from "../../constants/text";
import { Slide } from ".";

const Testimonials = () => {
    const Text = text.testimonials
    const objectArray = Object.values(Text.slides)
    const slides = objectArray.map((item, index) => <Slide slide={index} key={item.name} />)
    return ( 
        <section className="section-container bg-white">
            <div className="testimonial-wrapper">
                <h2 className="subtitle">{Text.title}</h2>
                <div className="">
                    {slides}
                </div>                
            </div>
        </section>
     );
}
 
export default Testimonials;