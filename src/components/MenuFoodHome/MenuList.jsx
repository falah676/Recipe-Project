import { useState } from "react";
import { useContext } from "react"
import { MenuContext } from "../../context/CulinerContext"
import CardFood from "../FoodList/CardFood";
import PropTypes from "prop-types"

const MenuList = ({keyword}) => {
    const { menu } = useContext(MenuContext);
    const [truncate, setTruncate] = useState(true);
    
    const showMore = () => {
        setTruncate(!truncate)
    }
    const cardList = menu.filter((i) => {
        return i.strMeal.toLowerCase().includes(
            (keyword || '').toLowerCase()
            )
        })
        const showAll = cardList.length <= 9;
        const data = showAll ? cardList : truncate ? cardList.slice(0, 8) : cardList;

        return (
          <div className="flex flex-col items-center">
            <div  className="flex justify-center gap-10 flex-wrap flex-row mb-10 p-1 px-3 lg:px-24">
              {data.map((item) => (
                <CardFood key={item.idMeal} data={item} />
              ))}
            </div>
            {!showAll && (
              <button
                className="text-white border border-green-800 py-[5px] px-5 rounded hover:bg-white hover:text-green-800 transition-all duration-300"
                onClick={() => showMore()}
              >
                {truncate ? 'Show More' : 'Show Less'}
              </button>
            )}
          </div>
        );
}
MenuList.propTypes = {
    keyword: PropTypes.string,
}
export default MenuList