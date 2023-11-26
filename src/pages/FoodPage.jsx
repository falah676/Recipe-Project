import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodList from "../components/FoodList/FoodList";
import { FoodProvider, InternetContext } from "../context/CulinerContext";
import { CategoryDetails } from "../utils/data";
import ReactLoading from "react-loading";
import { useContext } from "react";
import Swal from "sweetalert2";

const FoodPage = () => {
    const checkOnlineStatus = useContext(InternetContext);
    const { name } = useParams();
    const [dataCard, setDataCard] = useState([]);
    const [isLoading, setIsLoading] = useState();
    useEffect(() => {
        const getList = async () => {
            setIsLoading(true)
            if (checkOnlineStatus) {
                try {
                    const data = await CategoryDetails(name);
                    console.log(data);
                    setDataCard(data);
                    setIsLoading(false)
                } catch (e) {
                    console.error("Error fetching recipe:", e);
                    setIsLoading(false);
                    alert("Please check your connection")
                }
            } else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Sorry, we currently do not have Internet access.',
                    })
                setIsLoading(false)
            }
        }
        getList();
    }, [checkOnlineStatus, name]);
    console.log(dataCard);
    if (isLoading) {
        return <div className="h-screen flex bg-category-img bg-no-repeat bg-cover justify-center items-center">
            <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />

        </div>
    }

    return (
        <FoodProvider value={{ dataCard }}>
            <section id="categoies" className="bg-category-img bg-no-repeat bg-cover py-5 min-h-screen">
                <div className="gap-5 text-center flex flex-col items-center">
                    <h1 className="font-semibold text-white text-2xl bg-green-600 py-2 px-10 rounded-lg">{name}</h1>
                    <FoodList />
                </div>
            </section>
        </FoodProvider>
    )
}
export default FoodPage;