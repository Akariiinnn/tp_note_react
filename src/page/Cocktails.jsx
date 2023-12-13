import Header from "../component/Header";
import Footer from "../component/Footer";
import AllCocktails from "../component/AllCocktails.jsx"
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";

const Cocktails = () => {

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async() => {
            const cocktailsData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            const cocktailsDataResponse = await cocktailsData.json()
            setCocktails(cocktailsDataResponse.drinks)
        })()
    }, []);

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

export default Cocktails