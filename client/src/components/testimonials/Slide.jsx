import { ComponentText as text } from "../../constants/text";

const Slide = ({ slide }) => {
    const Text = text.testimonials.slides[slide]
    const slideImg = {
        0: "bg-avatar-ali",
        1: "bg-avatar-anisha",
        2: "bg-avatar-richard",
        3: "bg-avatar-shanai",
    }
    return ( 
        <div className="centered-col">
            <div className={`bg-img bg-cover w-20 h-20 translate-y-[50%] ${slideImg[slide]}`} />
            <article className="bg-lightgray w-full p-8 xs:text-center centered-col gap-y-4 h-96 pt-8">
                <h3 className="text-royalblue font-semibold text-xl">{Text.name}</h3>
                <p className="content">{Text.content}</p>
            </article>
        </div>
     );
}
 
export default Slide;