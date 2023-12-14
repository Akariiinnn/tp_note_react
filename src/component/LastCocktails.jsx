import {useContext} from "react";
import {MainContext} from "../context/MainContext";
import CocktailCard from "./CocktailCard";
import {Link} from "react-router-dom";

const LastCocktails = () => {

    const context = useContext(MainContext)

    const lastCocktails = context.cocktails.slice(-4)

    return (
        <section className={"lastCocktails-section"}>
            <Link to={"/our_cocktails"}><h2>Our last cocktails</h2></Link>
            <section className={"lastCocktails"}>
                {lastCocktails.map((cocktail, index) => (
                    <section className={"home_page_cocktail"}>
                        <CocktailCard cocktail={cocktail}/>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default LastCocktails