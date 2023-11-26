import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CardCategories = ({data}) => {
    return (
        <Link to={`/category/${data.strCategory}`}>
        <div className="bg-green-700 lg:p-1 shadow-lg w-[9rem] h-[11rem] lg:w-[12rem] lg:h-[13rem] flex flex-col p-1 rounded-3xl items-center justify-between">
            <img className="h-[8rem] lg:h-[10rem]  rounded-3xl object-cover"src={data.strCategoryThumb} alt="image thumbnail" />
            <h2 className="lg:text-xl text-sm text-white mb-3">{data.strCategory}</h2>
        </div>
        </Link>
    )
}

CardCategories.propTypes = {
    data:PropTypes.object.isRequired
}
export default CardCategories;