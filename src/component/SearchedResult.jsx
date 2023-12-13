import {useContext} from "react";
import {MainContext} from "../context/MainContext";
import CocktailCard from "./CocktailCard";

const SearchedResult = () => {

    const searchedDrinks = useContext(MainContext)

    // do the same but better
    const loadingArray = Array(12).fill({
        strDrink: "...",
        strDrinkThumb: "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif",
        strInstructions: "..."
    })

    return (
        <section className={"all-cocktails"}>
            {searchedDrinks ? (
                <>
                    {searchedDrinks.map((drink) => (
                        <CocktailCard cocktail={drink}/>
                    ))}
                </>
            ) : (
                <>
                    {loadingArray.map((drink) => (
                        <CocktailCard cocktail={drink}/>
                    ))}
                </>

            )}
        </section>
    )
}

export default SearchedResult