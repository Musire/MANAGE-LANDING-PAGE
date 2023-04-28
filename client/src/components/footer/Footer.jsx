import logo from "../../assets/white-logo.svg"
import { ComponentText as text} from "../../constants/text";
import { GrFacebook, GrYoutube, GrTwitter, GrPinterest, GrInstagram, GrPin } from "react-icons/gr";

const Footer = () => {
    const Text = text.footer
    const linkArray = Object.values(Text.links)
    const links = linkArray.map(item => <li key={item} >{item}</li>)
    return ( 
        <section className="section-container bg-royalblue">
            <div className="block-container grid xs:grid-cols-1 xs:grid-rows-4 lg:grid-cols-5 lg:grid-rows-2 lg:gap-y-8 xs:py-10 lg:py-0 lg:w-11/12 lg:gap-x-4 xs:place-items-center">
                <form className="xs:spaced lg:justify-evenly w-full lg:col-start-4 lg:col-span-2">
                    <input type="text" className="form-input" placeholder={Text.search} />
                    <button className="form-button">{Text.button}</button>
                </form>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-8 w-full px-8 lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-2">
                    {links}
                </ul>
                <ul className="spaced xs:w-full lg:w-40 px-2 lg:col-start-1 lg:row-start-1">
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