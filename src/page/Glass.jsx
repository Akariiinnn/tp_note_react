import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext} from "../context/MainContext";
import ShowCocktails from "../component/AllCocktails.jsx"
import Layout from "../component/Layout";

const Glass = () => {

    const {glass} = useParams()

    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
        (async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replace("_", "\/")}`
            const cocktailsByGlassData = await fetch(url)
            const cocktailsByGlassDataResponse = await cocktailsByGlassData.json()
            setCocktails(cocktailsByGlassDataResponse.drinks)
        })()
    }, [glass]);

    return (
        <>
            {cocktails ? (
                <MainContext.Provider value={cocktails}>
                    <Layout>
                        <ShowCocktails/>
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

export default Glass