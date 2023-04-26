import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return ( 
        <nav className="w-full h-20 bg-white centered">
            <section className="w-5/6 h-full spaced">
                <div className="bg-img bg-contain bg-logo h-10 w-40" />
                <button onClick={toggleOpen} className="bg-img bg-contain bg-icon-menu h-8 w-8"></button>
            </section>
            <section className={`bg-white absolute top-20 left-0 h-[calc(100vh-5rem)] slow-transition ${isOpen ? 'w-3/4' : 'w-0'}`}></section>
        </nav>
     );
}
 
export default Navbar;