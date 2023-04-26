import illustration from "../../assets/illustration-intro.svg"

const Hero = () => {
    return ( 
        <section className="section-container">
            <div className="block-container">
                <img src={illustration} alt="illustration" className="w-full py-8" />
            </div>
        </section>
     );
}
 
export default Hero;