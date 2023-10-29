import { Link } from "react-scroll"
import PropTypes from "prop-types"
const NavigationMobile = ({isClicked, handleClick}) => {
  return (
    <div className={`w-full h-screen fixed ${isClicked ?'top-20' :'top-full'} transition-all ease-in-out duration-300 z-10 bg-white`}>
      <nav>
        <ul className="flex flex-col items-center justify-between px-4 py-8 gap-5 text-xl
        font-medium tracking-wide uppercase ">
          <li><Link onClick={handleClick} smooth={true} to="home" className="text-black ">Home</Link></li>
          <li><Link onClick={handleClick} smooth={true} to="menu" className="text-black ">Our Menu</Link></li>
          <li><Link onClick={handleClick} smooth={true} to="CategoriesHome" className="text-black ">Categories</Link></li>
          <li><Link onClick={handleClick} smooth={true} to="country" className="text-black ">Country</Link></li>
          
        </ul>
      </nav>
    </div>
  )
}
NavigationMobile.propTypes = {
  isClicked:PropTypes.bool.isRequired,
  handleClick:PropTypes.func.isRequired
  }
export default NavigationMobile
