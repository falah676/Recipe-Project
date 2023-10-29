import PropTypes from "prop-types"
const HamburgerIcon = ({isClicked, handlerClickNav}) => {
  return (
    <div className="block" onClick={handlerClickNav}>
      <div className={`my-[5px] mx-auto bg-white block w-7 transition-all ease-in-out duration-[350ms] ${isClicked ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'} h-[2px]`}></div>
      <div className={`my-[5px] mx-auto bg-white block w-7 transition-all ease-in-out duration-[350ms] ${isClicked ? 'opacity-0' : 'opacity-100'} h-[2px]`}></div>
      <div className={`my-[5px] mx-auto bg-white block w-7 transition-all ease-in-out duration-[350ms] ${isClicked ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'} h-[2px]`}></div>
      </div>
  )
}
HamburgerIcon.propTypes ={
    isClicked:PropTypes.bool.isRequired,
    handlerClickNav:PropTypes.func.isRequired
    }
export default HamburgerIcon
