import illustration from "../../assets/illustration-intro.svg"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero

    return ( 
        <section className="section-container bg-white">
            <div className="block-container">
                <img src={illustration} alt="illustration" className="w-full py-8" />
                <article className="hero-article">
                    <h2 className="section-title">{Text.title}</h2>
                    <h4 className="section-content">{Text.content}</h4>
                    <button className="app-button ">{Text.button}</button>
                </article>
            </div>
        </section>
     );
}
 
export default Hero;