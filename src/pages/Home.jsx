import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import AreasFood from "../components/AreasComponents/AreasFood";
import Categories from "../components/CategoriesHome/CategoriesHome";
import Header from "../components/header/Header"
import NavigationMobile from "../components/header/NavigationMobile";
import Hero from "../components/Hero";
import MenuFood from "../components/MenuFoodHome/MenuFood";
import { CategoryProvider, CountryProvider, InternetContext, MenuProvider } from "../context/CulinerContext";
import { AllMenus, getCategories, getListCountry } from "../utils/data";
import ReactLoading from "react-loading"
import { useContext } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const onlineStatus = useContext(InternetContext)
    const [dataCard, setDataCard] = useState([]);
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState();
    // const [isMobile, setIsMobile] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const changeSearchParams = (title) => setSearchParams({ title });
    const [detectScroll, setDetectScroll] = useState(false)
    const keyword = searchParams.get('title');
    const [menu, setMenu] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const [searchValue, setSearchValue] = useState(keyword || "")
    const isMobile = useMediaQuery({ query: '(max-width: 820px)' })
    const handleSearch = (e) => {
        const value = e.target.value
        setSearchValue(value);
        changeSearchParams(value)
    }
    const handleClickNav = () => {
        setIsClicked(!isClicked)
    }
    //choose the screen size 
    // const handleResize = () => {
    //     if (window.innerWidth < 820) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }
    useEffect(() => {
        // window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', () => {
            window.scrollY > 10 ? setDetectScroll(true) : setDetectScroll(false);
        });
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoading(true)
        const getList = async () => {
            if (onlineStatus) {
                try {
                    const data = await getCategories();
                    const menu = await AllMenus();
                    const country = await getListCountry();
                    console.log(data);
                    setMenu(menu);
                    setCountry(country);
                    setDataCard(data);
                    setIsLoading(false);
                } catch (e) {
                    console.error("Error fetching recipe:", e);
                    setIsLoading(false);
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Sorry, we currently do not have Internet access.',
                })
            }
            setIsLoading(false)
        }
        getList();
    }, [onlineStatus]);
    if (isLoading) {
        return (
            <>
                <Header isClicked={isClicked} handlerClick={handleClickNav} isMobile={isMobile} isScrolling={detectScroll} />
                <div className="h-screen bg-hero-img bg-no-repeat bg-cover">
                    <div className="flex justify-center items-center h-full backdrop-blur-md bg-black/60">
                        <ReactLoading type={'spin'} color={'#4fa94d'} height={'5%'} width={'5%'} />
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