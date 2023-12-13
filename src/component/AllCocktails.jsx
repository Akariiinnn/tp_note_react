import {MainContext} from "../context/MainContext";
import {useContext} from "react";
import CocktailCard from "./CocktailCard";

const AllCocktails = () => {

    const cocktails = useContext(MainContext);

    return (
        <section className={"all-cocktails"}>
            {cocktails ? (
                cocktails.map((cocktail, index) => (
                        <CocktailCard cocktail={cocktail}/>
                ))
            ) : (
                <section className={"all-cocktails"}>
                <CocktailCard cocktail={{strDrink: "...", strDrinkThumb: "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif", strInstructions: "..."}}/>
                </section>
            )}
        </section>
    )
}

export default AllCocktails