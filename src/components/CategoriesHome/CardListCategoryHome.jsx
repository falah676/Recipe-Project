import { useContext } from "react";
import { CategoryContext } from "../../context/CulinerContext";
import CardCategories from "./CardCategoriesHome";
const CardList = () => {
    const { dataCard } = useContext(CategoryContext);

    return (
        <div className="flex flex-col items-center py-6">
            <div className="flex justify-center gap-10 flex-wrap flex-row mb-10 p-1 px-3 lg:px-24">
                {
                    dataCard.map(item => (
                        <CardCategories key={item.idCategory} data={item} />
                    ))
                }
            </div>
        </div>
    )
}
export default CardList;