import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CardCategories = ({data}) => {
    return (
        <Link to={`/category/${data.strCategory}`}>
        <div className="bg-green-800 shadow-lg w-[12rem] h-[13rem] flex flex-col rounded-3xl items-center justify-between">
            <img className="h-[10rem] rounded-3xl object-cover" src={data.strCategoryThumb} alt="image thumbnail" />
            <h2 className="text-xl text-white font-base mb-3">{data.strCategory}</h2>
        </div>
        </Link>
    )
}

CardCategories.propTypes = {
    data:PropTypes.object.isRequired
}
export default CardCategories;