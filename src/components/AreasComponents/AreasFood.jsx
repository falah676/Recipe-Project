import AreasList from "./AreasList"

const AreasFood = () => {
    return (
        <section id='country' className='bg-food h-auto bg-cover bg-no-repeat bg-center'>
            <div className="flex flex-col gap-10 justify-center items-center h-full backdrop-brightness-[.40] p-5">
                <h1 className="font-butter-food text-center mt-10 text-5xl text-white">
                    <span className="text-6xl text-green-600">C</span>ountries
                </h1>
                <AreasList />
            </div>
        </section>
    )
}

export default AreasFood
