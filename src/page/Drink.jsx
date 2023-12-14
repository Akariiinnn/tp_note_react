import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CocktailDetails from "../component/CocktailDetails";
import Layout from "../component/Layout";

const Drink = () => {

    const [drink, setDrink] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const drinkData = await fetch(url)
            const drinkDataResponse = await drinkData.json()
            setDrink(drinkDataResponse.drinks[0])
        })()
    }, [id]);

    return (
        <>
            {drink ? (
                <>
                    <Layout>
                        <CocktailDetails drink={drink}/>
                    </Layout>
                </>
            ) : (
                <>
                    <Layout>
                        <CocktailDetails drink={{strDrink: "...", strDrinkThumb: "/images/Pulse-1s-200px.gif", strInstructions: "...", strCategory: "..."}}/>
                    </Layout>
                </>
            )}
        </>
    )
}

export default Drink