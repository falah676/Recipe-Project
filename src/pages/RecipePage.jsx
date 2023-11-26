import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftAsideRecipe from "../components/RecipeComponents/LeftAsideRecipe";
import RightAsideRecipe from "../components/RecipeComponents/RightAsideRecipe";
import { RecipeDetails } from "../utils/data";
import ReactLoading from 'react-loading'
import { useContext } from "react";
import { InternetContext } from "../context/CulinerContext";
import Swal from "sweetalert2";

const RecipePage = () => {
    const { id } = useParams();
    const [dataRecipe, setDataRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const checkInternet = useContext(InternetContext)


    const getIdYoutube = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    };

    useEffect(() => {
        if (checkInternet) {
            const fetchRecipe = async () => {
                try {
                    const data = await RecipeDetails(id);
                    setDataRecipe(data);
                    setIsLoading(false)
                } catch (error) {
                    console.error("Error fetching recipe:", error);
                    setIsLoading(false);
                }
            }
    
            fetchRecipe();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry, we currently do not have Internet access.',
            })
            setIsLoading(false)
        }
    }, [checkInternet, id]);

    if (isLoading) {
        return <div className="bg-category-img bg-center bg-no-repeat bg-cover rotate-180">
            <div className="h-screen flex justify-center items-center backdrop-brightness-[.60]">
            <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />
            </div>
        </div>
    }
    return (
        <section className='h-auto bg-category-img bg-center bg-no-repeat bg-cover text-white rotate-180'>
            <div className="w-full h-full backdrop-brightness-[.60] pt-32 pb-12 lg:py-32">
                <div className="container rotate-180 lg:px-6">
                    {dataRecipe.map((recipe) => (
                        <div key={recipe.idMeal} className="px-5">
                            <div className="flex flex-col items-center lg:flex-row lg:gap-10">
                                <RightAsideRecipe data={recipe} />
                                <LeftAsideRecipe data={recipe} />
                            </div>
                            <p className="mt-8 font-poppins text-sm text-justify">{recipe.strInstructions}</p>
                            <h5 className="font-poppins md:text-base text-xs mb-3 mt-8">Tags: {recipe.strTags  ? recipe.strTags.split(',').map((tag) => `#${tag.trim()}`).join(', ') : '-'}</h5>
                            <p className="flex flex-col text-xs md:flex-row md:gap-1 md:text-base">Source: {recipe.strSource ?  <a className="underline" href={recipe.strSource} target="_new">{recipe.strSource}</a> : <p>-</p>}</p>
                            <div className="flex flex-col gap-9 items-center pt-20 h-fit">
                                <h2 className="font-poppins font-semibold text-3xl">Watch Tutorial</h2>
                                <iframe className="lg:w-[560px] lg:h-[400px] " src={`//www.youtube.com/embed/${getIdYoutube(recipe.strYoutube)}`} allowFullScreen></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default RecipePage;
