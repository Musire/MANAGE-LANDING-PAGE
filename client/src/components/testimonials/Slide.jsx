import { ComponentText as text } from "../../constants/text"

const slideImg = {
    0: "bg-avatar-anisha",
    1: "bg-avatar-ali",
    2: "bg-avatar-richard",
    3: "bg-avatar-shanai",
}

const distance = {
    true: 'translate-x-[-100%]',
    false: 'translate-x-[100%]'
}

const Slide = ({ current, slide, max }) => {
    const isVisible = current === slide
    const Text = text.testimonials
    const info = Text.slides[slide]
    const status = slide < current && slide !== 0 || slide === max - 1 && current === 0 || slide === 0 && current !== max - 1
    
    return ( 
        <div className={`xs:w-full lg:w-128 slugish-transition centered-col absolute top-0 left-0  ${isVisible ? 'opacity-1 translate-x-0': `opacity-0 ${distance[status]}`}`}>
            <div className={`bg-img bg-cover w-20 h-20 translate-y-[50%] ${slideImg[slide]}`} />
            <article className="w-full p-8 bg-lightgray xs:text-center centered-col gap-y-4 xs:h-96 lg:h-72 lg:pt-20">
                <h3 className="text-xl font-semibold text-royalblue">{info.name}</h3>
                <p className="content">{info.content}</p>
            </article>
        </div>
     );
}
 
export default Slide;