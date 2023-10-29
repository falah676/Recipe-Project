import PropTypes from "prop-types"
const RightAsideRecipe = (data) => {
    const recipe = data.data
    return(
        <div className='flex flex-col items-center mb-8 lg:mb-0 max-w-[200px] lg:max-w-lg h-fit rounded-lg'>
        <img src={recipe.strMealThumb} alt="image product" className='w-full h-full' />
        {
            recipe.strImageSource ?
            <p className="text-white text-sm font-light">Source Image: {recipe.strImageSource}</p>
            :
            <></>
        }
      </div>
    )
}
RightAsideRecipe.propTypes = {
    data:PropTypes.object.isRequired
}
export default RightAsideRecipe;