import { Navbar, Hero, About, Testimonials, Contact, Footer} from "./"


const LandingPage = () => {
    return ( 
        <div className="w-screen h-auto min-h-screen overflow-x-hidden centered-col">
            <div className=" bg-white bg-no-repeat bg-tablet-pink xs:bg-[length:100%_50%] lg:bg-[length:45%_100%] xs:bg-[right_-5rem_top_-5rem]  lg:bg-[right_-5rem_top_-5rem]">
                <Navbar />
                <Hero />
            </div>
            <div className="bg-white bg-no-repeat lg:bg-tablet-pink bg-[length:45%_60%] bg-[left_-15rem_bottom_12rem]">
                <About />
                <Testimonials />
            </div>
            <Contact />
            <Footer />
        </div>
     );
}
 
export default LandingPage;