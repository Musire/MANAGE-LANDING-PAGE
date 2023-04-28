import { Slider } from ".";
import { ComponentText as text } from "../../constants/text"

const Testimonials = () => {
    const Text = text.testimonials
    return ( 
        <section className="section-container bg-white">
            <div className="testimonial-wrapper">
                <h2 className="subtitle">{Text.title}</h2>
                <Slider max={4} view={1} />               
            </div>
        </section>
     );
}
 
export default Testimonials;