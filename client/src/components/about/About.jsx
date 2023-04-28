import { ComponentText as text } from "../../constants/text";
import { AboutCard } from "./"

const About = () => {
    const Text = text.about
    const cardArray = [ '01', '02', '03' ]
    const cards = cardArray.map((item, index) => <AboutCard key={item} card={index} indicator={item} />)
    return ( 
        <section className="section-container bg-white xs:py-20">
            <div className="block-container xs:centered-col lg:flex-row lg:items-start gap-y-6">
                <article className="centered-col space-y-8 xs:w-full lg:w-3/5 lg:items-start lg:pr-4">
                    <h2 className="subtitle">{Text.title}</h2>
                    <h4 className="content">{Text.content}</h4>
                </article>
                <div className="flex flex-col gap-y-8 xs:w-full lg:w-3/5">
                    {cards}
                </div>
            </div>
        </section>
     );
}
 
export default About;