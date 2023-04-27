import { ComponentText as text } from "../../constants/text";

const Contact = () => {
    const Text = text.contact
    return ( 
        <section className="portion-container bg-brightred">
            <div className="block-container centered-col gap-y-6 xs:py-20 ">
                <h1 className="contact-title">{Text.title}</h1>
                <button className="white-button">{Text.button}</button>
            </div>
        </section>
     );
}
 
export default Contact;