import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CardFood = ({ data }) => {
    const truncate = (str) => {
        if( str.length > 10 ){
            return `${str.substring(0,9)}...`
            }else{
                return str;
            }
    }
    return (
        <Link to={`/recipe/${data.idMeal}`}>
        <div className="bg-green-700 p-1 shadow-lg w-[12rem] h-[13rem] flex flex-col rounded-3xl items-center justify-between">
            <img className="h-[10rem] rounded-3xl object-cover" src={data.strMealThumb} alt="image thumbnail" />
            <h2 className="text-xl text-white font-base mb-3">{truncate(data.strMeal)}</h2>
        </div>
        </Link>
    )
}
CardFood.propTypes = {
    data: PropTypes.object.isRequired
}
export default CardFood;