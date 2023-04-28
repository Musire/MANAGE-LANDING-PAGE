import { ComponentText as text } from "../../constants/text";

const AboutCard = ({ card, indicator }) => {
    const Text = text.about.cards[card]
    return ( 
        <article className="flex flex-col w-full gap-y-4">
            <div className="xs:bg-lightred lg:bg-transparent rounded-s-3xl flex xs:items-center gap-4 lg:items-start">
                <div className="card-indicator">{indicator}</div>
                <h3 className="card-subtitle">{Text.title}</h3>
            </div>
            <p className="card-content">{Text.content}</p>
        </article>
     );
}
 
export default AboutCard;