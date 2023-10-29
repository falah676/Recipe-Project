import CardListCategoryHome from "./CardListCategoryHome";  

const Categories = () => {
  return (
    <section id="CategoriesHome" className="bg-category-img bg-no-repeat bg-cover bg-center" >
      <div className="flex flex-col gap-10 justify-center items-center h-full backdrop-brightness-[.40]">
        <h1 className="font-butter-food text-center mt-10 text-5xl text-white">
          <span className="text-6xl text-green-600">C</span>ategories
        </h1>
        <CardListCategoryHome />
      </div>
    </section>
  );
};


export default Categories;
