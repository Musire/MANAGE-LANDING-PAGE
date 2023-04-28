import illustration from "../../assets/illustration-intro.svg"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero

    return ( 
        <section className="section-container bg-white">
            <div className="block-container flex xs:flex-col lg:flex-row-reverse">
                <img src={illustration} alt="illustration" className="xs:w-full lg:w-1/2 py-8" />
                <article className="hero-article">
                    <h2 className="title">{Text.title}</h2>
                    <h4 className="content">{Text.content}</h4>
                    <button className="hero-button ">{Text.button}</button>
                </article>
            </div>
        </section>
     );
}
 
export default Hero;