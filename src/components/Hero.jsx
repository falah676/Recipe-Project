import { BiSearch } from "react-icons/bi"
import PropTypes from "prop-types";
import {scroller} from "react-scroll";

const Hero = ({ searchValue, onChangeSearch }) => {
    const scrollToMenu = (e) => {
        e.preventDefault();
        scroller.scrollTo('menu', {
            delay: 100,
            smooth: true,
            spy: true
          });

    }
    return (
        <section className="bg-hero-img bg-no-repeat bg-cover h-screen bg-center" id="home">
            <div className="flex flex-col gap-10 justify-center items-center h-full backdrop-brightness-[.40]">
                <div className="title-hero">
                    <h1 className="font-butter-food text-white text-7xl text-center sm:text-9xl">Let&rsquo;s Cook </h1>
                </div>
                <div className="w-96 md:px-0 px-11">
                    <form onSubmit={scrollToMenu}>
                        <div className=" w-full flex py-2 px-3 justify-center items-center backdrop-blur-md bg-white/30">
                            <input type="text" name="title" className="bg-transparent placeholder:text-center placeholder:text-white outline-none w-full font-semibold text-white" placeholder="Find a recipe" value={searchValue} onChange={onChangeSearch} />
                            <label htmlFor="title"><BiSearch size={25} color="black" /></label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
Hero.propTypes = {
    searchValue: PropTypes.string.isRequired,
    onChangeSearch: PropTypes.func.isRequired
};
export default Hero;