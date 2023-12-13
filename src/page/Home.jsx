import Header from "../component/Header";
import Footer from "../component/Footer";
import LastCocktails from "../component/LastCocktails";
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import RandomCategory from "../component/RandomCategory";

const Home = () => {

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async() => {
            const cocktailsData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            const cocktailsDataResponse = await cocktailsData.json()
            setCocktails(cocktailsDataResponse.drinks)
        })()
    }, []);

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
            {cocktails && categories ? (
                <MainContext.Provider value={{cocktails, categories}}>
                    <Header/>
                    <section className={"home-section"}>
                        <LastCocktails />
                        <RandomCategory />
                    </section>
                    <Footer/>
                </MainContext.Provider>
            ) : (
                // add a spinner here
                <img className="spinner" src={"https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
            )}
        </>

    )
}

export default Home