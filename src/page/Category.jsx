import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext} from "../context/MainContext";
import AllCocktails from "../component/AllCocktails.jsx"
import Layout from "../component/Layout";

const Category = () => {

    const {category} = useParams()

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replace("_", " \/ " )}`
            console.log(url)
            const cocktailsByCategoryData = await fetch(url)
            const cocktailsByCategoryDataResponse = await cocktailsByCategoryData.json()
            setCocktails(cocktailsByCategoryDataResponse.drinks)
        })()
    }, [category]);

    return (
        <>
            {cocktails ? (
                <MainContext.Provider value={cocktails}>
                    <Layout>
                    <AllCocktails/>
                    </Layout>
                </MainContext.Provider>
            ) : (
                <>
                    <Layout>
                    <img className="spinner" src={"/images/Pulse-1s-200px.gif"} alt={"loading"}/>
                    </Layout>
                </>
            )}
        </>
    )

}

export default Category