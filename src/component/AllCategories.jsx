import React, {useContext} from "react";
import {MainContext} from "../context/MainContext";
import CocktailCard from "./CocktailCard";
import {Link} from "react-router-dom";

const AllCategories = () => {

const categories = useContext(MainContext);

return (
    <section className={"all-categories"}>
        {categories ? (
            categories.map((category) => (
                <Link to={`/categories/${category.strCategory.replace(" \/ ", "_")}`}>
                <section className={"category"}>
                    <section className={"highlighted"}>
                        <h2 className="card-title">{category.strCategory}</h2>
                    </section>
                </section>
                </Link>
            ))
        ) : (
            <section className={"all-cocktails"}>
                <CocktailCard cocktail={{strDrink: "...", strDrinkThumb: "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif", strInstructions: "..."}}/>
            </section>
        )}
    </section>
)

}

export default AllCategories