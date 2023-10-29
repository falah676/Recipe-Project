import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import AreasFood from "../components/AreasComponents/AreasFood";
import Categories from "../components/CategoriesHome/CategoriesHome";
import Header from "../components/header/Header"
import NavigationMobile from "../components/header/NavigationMobile";
import Hero from "../components/Hero";
import MenuFood from "../components/MenuFoodHome/MenuFood";
import { CategoryProvider, CountryProvider, MenuProvider } from "../context/CulinerContext";
import { AllMenus, getCategories, getListCountry } from "../utils/data";

const Home = () => {
    const [dataCard, setDataCard] = useState([]);
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState();
    const [isMobile, setIsMobile] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const changeSearchParams = (title) => setSearchParams({ title });
    const [detectScroll, setDetectScroll] = useState(false)
    const keyword = searchParams.get('title');
    const [menu, setMenu] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const [searchValue, setSearchValue] = useState(keyword || "")
    const handleSearch = (e) => {
        const value = e.target.value
        setSearchValue(value);
        changeSearchParams(value)
    }

    const handleClickNav = () => {
        setIsClicked(!isClicked)
    }
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 820) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', () => {
            window.scrollY > 10 ? setDetectScroll(true) : setDetectScroll(false);
        });
    });

    useEffect(() => {
        const getList = async () => {
            try {
                setIsLoading(true)
                const data = await getCategories();
                const menu = await AllMenus();
                const country = await getListCountry();
                console.log(data);
                setMenu(menu);
                setCountry(country);
                setDataCard(data);
                setIsLoading(false)
            } catch (e) {
                console.error("Error fetching recipe:", e);
                setIsLoading(false);
                alert("Please check your connection")
            }
        }
        getList();
    }, []);
    if (isLoading) {
        return (
            <>
                <Header isClicked={isClicked} handlerClick={handleClickNav} isMobile={isMobile} isScrolling={detectScroll} />
                <div className="h-screen bg-hero-img bg-no-repeat bg-cover">
                    <div className="flex justify-center items-center h-full backdrop-brightness-0 backdrop-blur-md bg-white/30">
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
                </div>
            </>
        )
    }
    return (
        <CountryProvider value={{ country }}>
            <MenuProvider value={{ menu }}>
                <CategoryProvider value={{ dataCard }}>
                    <article id="Home">
                        <Header isClicked={isClicked} handlerClick={handleClickNav} isMobile={isMobile} isScrolling={detectScroll} />
                        <NavigationMobile handleClick={handleClickNav} isClicked={isClicked} />
                        {/* <Hero onSearch={handleSearchValue}/> */}
                        <Hero searchValue={searchValue} onChangeSearch={handleSearch} />
                        <MenuFood seachValue={keyword} />
                        <Categories />
                        <AreasFood />
                    </article>
                </CategoryProvider>
            </MenuProvider>
        </CountryProvider>
    )
}
export default Home;