import { useState } from "react";
import logo from "../../assets/white-logo.svg"
import { ComponentText as text} from "../../constants/text";
import { GrFacebook, GrYoutube, GrTwitter, GrPinterest, GrInstagram, GrPin } from "react-icons/gr";

const Footer = () => {
    const Text = text.footer
    const [sent, setSent] = useState(false)
    const linkArray = Object.values(Text.links)
    const links = linkArray.map(item => <li className="footer-links" key={item} >{item}</li>)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }
    return ( 
        <section className="section-container bg-royalblue">
            <div className="grid block-container xs:grid-cols-1 xs:grid-rows-4 lg:grid-cols-5 lg:grid-rows-2 lg:gap-y-8 xs:py-10 lg:py-0 lg:w-11/12 lg:gap-x-4 xs:place-items-center">
                <div className={`lg:col-start-4 lg:col-span-2 spaced-col gap-y-6 slow-transition ${sent ? 'translate-y-8' : ''}`} >
                    <form onSubmit={handleSubmit} className="w-full xs:spaced lg:justify-evenly gap-x-4" >
                        <input required type="email" className="form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="not recognized email pattern" placeholder={Text.search} />
                        <button type="submit" className="form-button">{Text.button}</button>
                    </form>
                    {sent && <h1 className="text-green-200">Thank You for Subscribing</h1>}
                </div>
                <ul className="grid grid-cols-2 px-8 xs:w-full gap-y-2 gap-x-8 lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-2 place-items-center">
                    {links}
                </ul>
                <ul className="px-2 spaced xs:w-full lg:w-40 lg:col-start-1 lg:row-start-1">
                    <GrFacebook className="social-media"/>
                    <GrYoutube className="social-media"/>
                    <GrTwitter className="social-media"/>
                    <GrPinterest className="social-media"/>
                    <GrInstagram className="social-media"/>
                </ul>
                <img src={logo} alt="logo" className="xs:w-56 lg:w-40 lg:col-start-1 lg:row-start-2" />
                <p className="xs:text-center lg:text-right lg:col-start-4 lg:row-start-2 lg:col-span-2">{Text.copywrite}</p>
            </div>
        </section>
     );
}
 
export default Footer;