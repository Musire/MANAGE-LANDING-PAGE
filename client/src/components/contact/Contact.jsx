import { ComponentText as text } from "../../constants/text";

const Contact = () => {
    const Text = text.contact
    return ( 
        <section className="portion-container bg-brightred bg-no-repeat bg-desktop xs:bg-cover xs:bg-[40%_50%] lg:bg-contain lg:bg-[110%_0rem]">
            <div className="block-container xs:spaced-col lg:flex-row lg:w-4/5 gap-y-8 xs:py-20 lg:py-0 xs:w-[70%]">
                <h1 className="contact-title">{Text.title}</h1>
                <button className="white-button">{Text.button}</button>
            </div>
        </section>
     );
}
 
export default Contact;