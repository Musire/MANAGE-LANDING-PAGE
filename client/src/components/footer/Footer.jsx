import logo from "../../assets/white-logo.svg"
import { ComponentText as text} from "../../constants/text";
import { GrFacebook, GrYoutube, GrTwitter, GrPinterest, GrInstagram, GrPin } from "react-icons/gr";

const Footer = () => {
    const Text = text.footer
    const linkArray = Object.values(Text.links)
    const links = linkArray.map(item => <li key={item} >{item}</li>)
    return ( 
        <section className="section-container bg-royalblue">
            <div className="block-container centered-col gap-y-16 xs:py-20">
                <form className="spaced w-full">
                    <input type="text" className="form-input" placeholder={Text.search} />
                    <button className="form-button">{Text.button}</button>
                </form>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-8 w-full px-8">
                    {links}
                </ul>
                <ul className="spaced w-full">
                    <GrFacebook className="social-media"/>
                    <GrYoutube className="social-media"/>
                    <GrTwitter className="social-media"/>
                    <GrPinterest className="social-media"/>
                    <GrInstagram className="social-media"/>
                </ul>
                <img src={logo} alt="logo" className="w-52" />
                <p className="">{Text.copywrite}</p>
            </div>
        </section>
     );
}
 
export default Footer;