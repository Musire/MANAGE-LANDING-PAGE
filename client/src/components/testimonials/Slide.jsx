import { ComponentText as text } from "../../constants/text"

const slideImg = {
    0: "bg-avatar-anisha",
    1: "bg-avatar-ali",
    2: "bg-avatar-richard",
    3: "bg-avatar-shanai",
}

const Slide = ({ current, slide, max, view }) => {
    const Text = text.testimonials
    const info = Text.slides[slide]
    
    const conditionOne = slide < current + view
    const conditionTwo = slide >= current
    const isVisible = conditionOne && conditionTwo
    
    return ( 
        <div className={`w-96 slugish-transition centered-col ${isVisible ? 'opacity-1': `opacity-0 `}`}>
            <div className={`bg-img bg-cover w-20 h-20 translate-y-[50%] ${slideImg[slide]}`} />
            <article className="w-full p-8 bg-lightgray xs:text-center centered-col gap-y-4 xs:h-96 lg:h-72 lg:pt-20">
                <h3 className="text-xl font-semibold text-royalblue">{info.name}</h3>
                <p className="content">{info.content}</p>
            </article>
        </div>
     );
}
 
export default Slide;