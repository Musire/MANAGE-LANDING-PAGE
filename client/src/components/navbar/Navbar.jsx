import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return ( 
        <nav className="w-full h-20 bg-white centered">
            <section className="w-5/6 h-full spaced">
                <div className="bg-img bg-contain bg-logo h-10 w-40" />
                <ul className="spaced w-1/2 xs:hidden lg:flex">
                    <Link className="navbar-link">Pricing</Link>
                    <Link className="navbar-link">Product</Link>
                    <Link className="navbar-link">About Us</Link>
                    <Link className="navbar-link">Careers</Link>
                    <Link className="navbar-link">Community</Link>
                </ul>
                <button className="hero-button xs:hidden lg:flex">Get Started</button>
                <button onClick={toggleOpen} className="bg-img bg-contain bg-icon-menu h-8 w-8 lg:hidden"></button>
            </section>
            <section className={`bg-white absolute top-20 left-0 h-[calc(100vh-5rem)] slow-transition flex flex-col overflow-hidden  ${isOpen ? 'w-3/4' : 'w-0'}`}>
                <ul className={`spaced-col xs:flex lg:hidden gap-y-8 p-8 w-full ${isOpen ? 'opacity-1' : 'opacity-0'} `}>
                    <Link className="sidebar-link">Pricing</Link>
                    <Link className="sidebar-link">Product</Link>
                    <Link className="sidebar-link">About Us</Link>
                    <Link className="sidebar-link">Careers</Link>
                    <Link className="sidebar-link">Community</Link>
                </ul>
            </section>
        </nav>
     );
}
 
export default Navbar;