import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CardFood = ({ data }) => {
    const truncate = (str) => {
        if( str.length > 10 ){
            return `${str.substring(0,15)}...`
            }else{
                return str;
            }
    }
    return (
        <Link to={`/recipe/${data.idMeal}`}>
        <div className="bg-green-700 lg:p-1 shadow-lg w-[9rem] h-[11rem] lg:w-[12rem] lg:h-[13rem] flex flex-col rounded-3xl items-center justify-between">
            <img className="h-[8rem] lg:h-[10rem] w-full rounded-3xl object-cover" src={data.strMealThumb} alt="image thumbnail" />
            <h2 className="lg:text-xl text-sm text-white mb-3">{truncate(data.strMeal)}</h2>
        </div>
        </Link>
    )
}
CardFood.propTypes = {
    data: PropTypes.object.isRequired
}
export default CardFood;