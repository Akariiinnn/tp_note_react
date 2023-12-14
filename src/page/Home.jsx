import LastCocktails from "../component/LastCocktails";
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import RandomCategory from "../component/RandomCategory";
import Layout from "../component/Layout";

const Home = () => {

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async () => {
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
                    <Layout>
                        <section className={"home-section"}>
                            <LastCocktails/>
                            <RandomCategory/>
                        </section>
                    </Layout>
                </MainContext.Provider>
            ) : (
                <Layout>
                    <img className="spinner" src={"/images/Pulse-1s-200px.gif"} alt={"loading"}/>
                </Layout>
            )}
        </>

    )
}

export default Home