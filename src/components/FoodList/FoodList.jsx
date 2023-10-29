import CardFood from "./CardFood";
import { useContext } from "react";
import { FoodContext } from "../../context/CulinerContext";
const FoodList = () => {
    const {dataCard} = useContext(FoodContext);
    return (
        <div className="flex flex-wrap justify-center w-full gap-6">
              {
                dataCard.map(item => (
                    <CardFood key={item.idMeal} data={item}/>
                ))
            }
        </div>
    )
}
export default FoodList;