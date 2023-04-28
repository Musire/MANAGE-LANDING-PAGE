import { Navbar, Hero, About, Testimonials, Contact, Footer} from "./"


const LandingPage = () => {
    return ( 
        <div className="centered-col w-screen min-h-screen h-auto overflow-x-hidden">
            <div className=" bg-white bg-no-repeat bg-tablet-pink bg-[length:700px_800px] xs:bg-[right_-150px_top_-300px] lg:bg-[right_-50px_top_-250px]">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
     );
}
 
export default LandingPage;