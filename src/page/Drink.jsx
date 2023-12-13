import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CocktailDetails from "../component/CocktailDetails";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Drink = () => {

    const [drink, setDrink] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        (async() => {
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
                    <Header />
                    <CocktailDetails drink={drink}/>
                    <Footer />
                </>
            ) : (
                <>
                    <img className="spinner" src={"https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
                </>
            )}
        </>
    )
}

export default Drink