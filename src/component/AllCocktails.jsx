import {MainContext} from "../context/MainContext";
import {useContext} from "react";
import CocktailCard from "./CocktailCard";

const AllCocktails = () => {

    const cocktails = useContext(MainContext);

    const loadingArray = Array(12).fill({
        strDrink: "...",
        strDrinkThumb: "/images/Pulse-1s-200px.gif",
        strInstructions: "..."
    })

    return (
        <>
            <h2 style={{marginLeft: "2%"}}>All of our cocktails</h2>
            <section className={"all-cocktails"}>
                {cocktails ? (
                    cocktails.map((cocktail, index) => (
                        <CocktailCard cocktail={cocktail}/>
                    ))
                ) : (
                    <>
                        {loadingArray.map((cocktail) => (
                            <CocktailCard cocktail={cocktail}/>
                        ))}
                    </>
                )}
            </section>
        </>
    )
}

export default AllCocktails