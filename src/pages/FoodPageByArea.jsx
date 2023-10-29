import { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import FoodList from '../components/FoodList/FoodList';
import { FoodProvider } from '../context/CulinerContext';
import { getDataByCountry } from '../utils/data';

const FoodPageByArea = () => {
    const { country } = useParams();
    const [dataCard, setDataCard] = useState([]);
    const [isLoading, setIsLoading] = useState();
    useEffect(() => {
        const getList = async () => {
            try {
                setIsLoading(true)
                const data = await getDataByCountry(country);
                console.log(data);
                setDataCard(data);
                setIsLoading(false)
            } catch (e) {
                console.error("Error fetching recipe:", e);
                setIsLoading(false);
                alert("Please check your connection")
            }
        }
        getList();
    }, [country]);
    console.log(dataCard);
    if (isLoading) {
        return <div className="h-screen flex bg-category-img bg-no-repeat bg-cover justify-center items-center">
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    return (
        <FoodProvider value={{ dataCard }}>
            <section id="categoies" className="bg-category-img bg-no-repeat bg-cover py-5 min-h-screen">
                <div className="gap-5 text-center flex flex-col items-center">
                    <h1 className="font-semibold text-white text-2xl bg-green-600 py-2 px-10 rounded-lg">{country}</h1>
                    <FoodList />
                </div>
            </section>
        </FoodProvider>
    )
}

export default FoodPageByArea
