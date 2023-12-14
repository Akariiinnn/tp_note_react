import React, {useContext} from "react";
import {MainContext} from "../context/MainContext";
import CocktailCard from "./CocktailCard";
import {Link} from "react-router-dom";

const AllCategories = () => {

    const categories = useContext(MainContext);

    return (
        <>
            <h2 style={{marginLeft: "2%"}}>Every categories</h2>
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
                        <CocktailCard cocktail={{
                            strDrink: "...",
                            strDrinkThumb: "/images/Pulse-1s-200px.gif",
                            strInstructions: "..."
                        }}/>
                    </section>
                )}
            </section>
        </>
    )

}

export default AllCategories