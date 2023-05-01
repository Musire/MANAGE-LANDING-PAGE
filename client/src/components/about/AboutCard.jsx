import { ComponentText as text } from "../../constants/text";

const AboutCard = ({ card, indicator }) => {
    const Text = text.about.cards[card]
    return ( 
        <article className="flex flex-col w-full gap-y-4">
            <div className="flex gap-4 rounded-s-3xl xs:items-center lg:items-start xs:bg-lightred lg:bg-transparent">
                <div className="card-indicator">{indicator}</div>
                <h3 className="w-full card-subtitle ">{Text.title}</h3>
            </div>
            <p className="card-content">{Text.content}</p>
        </article>
     );
}
 
export default AboutCard;