import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext} from "../context/MainContext";
import Header from "../component/Header";
import Footer from "../component/Footer";
import AllCocktails from "../component/AllCocktails.jsx"

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
                    <Header/>
                    <AllCocktails/>
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

export default Category