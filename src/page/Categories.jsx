import Header from "../component/Header";
import Footer from "../component/Footer";
import AllCategories  from "../component/AllCategories.jsx"
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const CategoriesData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const CategoriesDataResponse = await CategoriesData.json()
            setCategories(CategoriesDataResponse.drinks)
        })();
    }, [])

    return (
        <>
            {categories ? (
                <MainContext.Provider value={categories}>
                    <Header/>
                    <AllCategories/>
                    <Footer/>
                </MainContext.Provider>
            ) : (
                <>
                    <Header />
                    <img className="spinner" src={"https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Categories