import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CountryContext } from "../../context/CulinerContext"

const AreasList = () => {
    const { country } = useContext(CountryContext);
    const [truncate, setTruncate] = useState(true);
    console.log(country);
    const urlImage = ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/US_flag_49_stars.svg/2560px-US_flag_49_stars.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Canada_%281964%29.svg/600px-Flag_of_Canada_%281964%29.svg.png', 'https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Egypt_%28variant%29.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/War_Flag_of_the_Philippines.svg/1200px-War_Flag_of_the_Philippines.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png', 'https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png', 'https://cdn.britannica.com/33/1733-004-5BA407D6/FLAG-Ireland.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png', 'https://cdn.britannica.com/20/5120-050-4202E1B8/Flag-Jamaica.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', 'https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Malaya.svg/1280px-Flag_of_Malaya.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Mexico_%281916%E2%80%931934%2C_2%29.svg/1200px-Flag_of_Mexico_%281916%E2%80%931934%2C_2%29.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Morocco_%28Pantone%29.svg', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png', 'https://img.freepik.com/premium-vector/portugal-flag-vector_654626-166.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png', 'https://c4.wallpaperflare.com/wallpaper/698/202/493/thailand-flag-national-symbol-thailand-large-flag-flag-of-thailand-hd-wallpaper-preview.jpg', 'https://cdn.britannica.com/41/3041-004-F1D6DEFC/Flag-Tunisia.jpg', 'https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg', 'data:image/png;base64,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', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png'];
    const data = truncate ? country.slice(0, 8) : country;
    const handleShowMore = () => {
        setTruncate(!truncate);
    }
    return (
        <div className="flex-col flex items-center gap-7">
            <div className="flex flex-wrap gap-10 justify-center">
            {
                data.map((item, index) => (
                    <Link to={`/country/${item.strArea}`} key={index}>
                    <div  className="relative w-56 h-32 group cursor-pointer">
                    <img src={urlImage[index]} alt={`${item.strArea} Flag`} className="group-hover:blur-sm group-hover:brightness-[.5] brightness-90 transition-all ease-in-out w-full h-full" />
                    <div className="absolute top-0 left-0 w-full h-full  scale-0 group-hover:scale-150 transition-transform duration-200 flex justify-center items-center">
                        <p className="text-white">{item.strArea}</p>
                    </div>
                </div>
                    </Link>
                ))
            }
            </div>
            <button
                className="text-white border border-green-800 py-[5px] px-5 rounded hover:bg-white hover:text-green-800 transition-all duration-300"
                onClick={() => handleShowMore()}
              >
                {truncate ? 'Show More' : 'Show Less'}
              </button>
        </div >
    )
}

export default AreasList;
