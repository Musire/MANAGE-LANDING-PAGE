import { Navbar, Hero, About, Testimonials, Contact, Footer} from "./"


const LandingPage = () => {
    return ( 
        <div className="centered-col w-screen min-h-screen h-auto">
            <Navbar />
            <Hero />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
     );
}
 
export default LandingPage;