import MenuList from "./MenuList";
import PropTypes from "prop-types"
const MenuFood = ({seachValue}) => {
  return (
    <section id="menu" className="bg-granit bg-center bg-no-repeat bg-cover h-auto">
      <div className="flex flex-col gap-10 justify-center items-center h-full backdrop-brightness-[.40] p-5">
        <h1 className="font-butter-food text-center mt-10 text-5xl text-white">
          <span className="text-6xl text-green-600">M</span>enus
        </h1>
        <MenuList keyword={seachValue}/>
      </div>
    </section>
  )
}
MenuFood.propTypes = {
  seachValue:PropTypes.string,
}
export default MenuFood