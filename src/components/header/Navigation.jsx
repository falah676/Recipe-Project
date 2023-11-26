import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-6 text-white text-lg font-normal">
                <li className="cursor-pointer"><Link to="home" spy={true} smooth={true}  duration={500} delay={100} >Home</Link></li>
                <li className="cursor-pointer"><Link to="menu" spy={true} smooth={true} duration={500} delay={100} >Menu</Link></li>
                <li className="cursor-pointer"><Link to="CategoriesHome" spy={true} smooth={true} duration={1000} delay={100} >Categories</Link></li>
                <li className="cursor-pointer"><Link to="country" spy={true} smooth={true} duration={1500} delay={100} >Country</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation;