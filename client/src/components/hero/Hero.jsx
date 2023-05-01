import illustration from "../../assets/illustration-intro.svg"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero

    return ( 
        <section className="bg-transparent section-container">
            <div className="flex block-container xs:flex-col lg:justify-between lg:flex-row-reverse">
                <img src={illustration} alt="illustration" className="xs:w-full lg:w-[30rem] py-8" />
                <article className="bg-no-repeat hero-article ">
                    <h2 className="title">{Text.title}</h2>
                    <h4 className="content">{Text.content}</h4>
                    <button className="hero-button ">{Text.button}</button>
                </article>
            </div>
        </section>
     );
}
 
export default Hero;