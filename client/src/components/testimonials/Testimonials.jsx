import { Slider } from ".";
import { ComponentText as text } from "../../constants/text"

const Testimonials = () => {
    const Text = text.testimonials
    return ( 
        <section className="bg-transparent section-container">
            <div className="py-16 testimonial-wrapper">
                <h2 className="text-center subtitle">{Text.title}</h2>
                <Slider max={4} />              
            </div>
        </section>
     );
}
 
export default Testimonials;