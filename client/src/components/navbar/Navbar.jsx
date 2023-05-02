import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return ( 
        <>
            <nav className="w-full h-20 bg-transparent centered">
                <section className="w-5/6 h-full spaced">
                    <div className="w-40 h-10 bg-contain bg-img bg-logo" />
                    <ul className="w-1/2 spaced xs:hidden lg:flex">
                        <Link className="navbar-link">Pricing</Link>
                        <Link className="navbar-link">Product</Link>
                        <Link className="navbar-link">About Us</Link>
                        <Link className="navbar-link">Careers</Link>
                        <Link className="navbar-link">Community</Link>
                    </ul>
                    <button className="hero-button xs:hidden lg:flex">Get Started</button>
                    <button onClick={toggleOpen} className={`z-50 w-8 h-8 bg-contain bg-img lg:hidden ${isOpen ? 'bg-icon-close' : 'bg-icon-menu'}`} ></button>
                </section>
                
            </nav>
            <section className={`absolute top-0 left-0 xs:h-[330%] md:h-[313%]  bg-gradient-to-b from-gray-800/10 from-10% to-gray-800/30 to-15% easy-transition flex flex-col overflow-hidden w-full p-8 lg:hidden z-40 ${isOpen ? 'block' : 'collapse'}`}>
                <ul className={`bg-white spaced-col xs:flex lg:hidden gap-y-8 px-8 py-16 w-full translate-y-10 h-auto ${isOpen ? 'opacity-1' : 'opacity-0'} `}>
                    <Link className="sidebar-link">Pricing</Link>
                    <Link className="sidebar-link">Product</Link>
                    <Link className="sidebar-link">About Us</Link>
                    <Link className="sidebar-link">Careers</Link>
                    <Link className="sidebar-link">Community</Link>
                </ul>
            </section>
        </>
     );
}
 
export default Navbar;