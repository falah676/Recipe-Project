import axios from "axios"

const getCategories = async () => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}categories.php`);
    const data = response.data.categories;
    return data;
}

const CategoryDetails = async (categories) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}filter.php?c=${categories}`);
        const data = res.data.meals;
        return data
    }
    catch (error) {
        console.log('Error', error);
    }
}

const RecipeDetails = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}lookup.php?i=${id}`)
        const data = res.data.meals;
        return data;
    }
    catch (e) {
        console.log("ERROR", e)
    }
}

const AllMenus = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}search.php?s=`)
        const data = res.data.meals
        return data
    } catch (e) {
        console.error("ERROR ALL MENU", e);
    }
}

const getListCountry = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}list.php?a=list}`)
        const data = res.data.meals;
        return data
    } catch (e) {
        console.error("ERROR LIST COUNTRY", e);
    }
}

const getDataByCountry = async (country) => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}filter.php?a=${country}`)
        const data = res.data.meals;
        return data;
    } catch (e) {
        console.error("ERROR GET DATA COUNTRY", e);
    }
}

export {
    getCategories,
    CategoryDetails,
    RecipeDetails,
    AllMenus,
    getListCountry,
    getDataByCountry
}