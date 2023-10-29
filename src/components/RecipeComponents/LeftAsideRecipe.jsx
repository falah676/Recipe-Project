// const LeftAsideRecipe = (data) => {
//     const recipe = data.data;

//     const ingredientList = Object.keys(recipe)
//         .filter(key => key.startsWith('strIngredient') && recipe[key])
//         .map(key => <li key={key}>{recipe[key]} {}</li>);

//     return (
//         <div className="left-aside">
//             <h1>Ingredients</h1>
//             <ul>
//                 {ingredientList}
//             </ul>
//             <p>{recipe.strInstructions}</p>
//         </div>
//     );
// }
// export default LeftAsideRecipe;

const LeftAsideRecipe = (data) => {
  const recipe = data.data;

  // Membuat array bahan makanan dan ukuran yang ada
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (recipe[ingredientKey] && recipe[measureKey]) {
      ingredients.push(`${recipe[ingredientKey]} ${recipe[measureKey]}`);
    } else if (recipe[ingredientKey]) {
      ingredients.push(recipe[ingredientKey]);
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div>
          <h1 className="font-butter-food text-center text-3xl lg:text-left lg:text-4xl tracking-wider font-semibold  text-green-100">{recipe.strMeal}</h1>
          <h5 className="tracking-wide lg:mt-3 font-semibold lg:text-lg lg:text-left text-center">
            {recipe.strArea} | {recipe.strCategory} 
          </h5>
        </div>
        <h4 className="font-poppins text-2xl mt-5 font-semibold lg:text-left lg:mb-0 text-center mb-3">Ingredients</h4>
        <div className="lg:py-5 ps-4">
          <ul className="list-disc lg:max-h-56 justify-between flex flex-col w-full flex-wrap lg:items-start items-center">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default LeftAsideRecipe;
