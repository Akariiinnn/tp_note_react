import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext} from "../context/MainContext";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ShowCocktails from "../component/AllCocktails.jsx"

const Glass = () => {

    const {glass} = useParams()

    const [cocktails, setCocktails] = useState(null)

    let hasUnderscore = false;

    if(glass.indexOf("_") !== -1){
        hasUnderscore = true;
    }

    useEffect(() => {
        (async() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replace("_", "\/" )}`
            console.log(url)
            const cocktailsByGlassData = await fetch(url)
            const cocktailsByGlassDataResponse = await cocktailsByGlassData.json()
            setCocktails(cocktailsByGlassDataResponse.drinks)
        })()
    }, [glass]);

    return (
        <>
            {cocktails ? (
                <MainContext.Provider value={cocktails}>
                    <Header/>
                    <ShowCocktails/>
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

export default Glass