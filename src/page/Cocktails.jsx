import AllCocktails from "../component/AllCocktails.jsx"
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import Layout from "../component/Layout";

const Cocktails = () => {

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async () => {
            const cocktailsData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            const cocktailsDataResponse = await cocktailsData.json()
            setCocktails(cocktailsDataResponse.drinks)
        })()
    }, []);

    return (
        <>
            <MainContext.Provider value={cocktails}>
                <Layout>
                    <AllCocktails/>
                </Layout>
            </MainContext.Provider>
        </>
    )
}

export default Cocktails