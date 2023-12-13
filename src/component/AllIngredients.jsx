import {useContext} from "react";
import {MainContext} from "../context/MainContext";
import {Link} from "react-router-dom";

const AllIngredients = () => {

    const ingredients = useContext(MainContext);

    return (
        <>
            <h2 style={{marginLeft: "2%"}}>Tout les ingrédients</h2>
            <section className={"all-ingredients"}>
                {ingredients ? (
                    ingredients.map((ingredient, index) => (
                        <>
                            <Link to={`/ingredients/${ingredient.strIngredient1.replace("\/", " ")}`}>
                                <section className={"highlighted"}>
                                    <img
                                        src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Medium.png`}
                                        alt={ingredient.strIngredient1}/>
                                    <h2 className="card-title">{ingredient.strIngredient1}</h2>
                                </section>
                            </Link>
                        </>
                    ))
                ) : (
                    <section className={"highlighted"}>
                        <img src={"https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
                        <h2 className="card-title">...</h2>
                    </section>
                )}
            </section>
        </>
    )

}

export default AllIngredients