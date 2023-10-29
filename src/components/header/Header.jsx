import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import HamburgerIcon from "./HamburgerIcon";
const Header = ({isScrolling, isMobile, isClicked, handlerClick}) => {
    return (
        <header className={`${isScrolling ? 'backdrop-blur-lg py-3 lg:px-20': 'bg-transparent'} fixed w-full flex justify-between items-center p-6 px-10 z-10 transition-all ease-in-out `}>
            <h1 className={`font-butter-food font-semibold text-white text-3xl`}><Link to={'/'}>Ngeleh<span className="text-green-600">Cuk&#451;</span></Link></h1>
            {isMobile ? <HamburgerIcon isClicked={isClicked} handlerClickNav={handlerClick}/> : <Navigation />}
            {/* <Navigation /> */}
            {/* <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-6 rounded-full">Log in</button> */}
        </header>
    )
}
Header.propTypes={
    isScrolling:PropTypes.bool.isRequired,
    isMobile:PropTypes.bool.isRequired,
    isClicked:PropTypes.bool.isRequired,
    handlerClick:PropTypes.func.isRequired
    };
export default Header;