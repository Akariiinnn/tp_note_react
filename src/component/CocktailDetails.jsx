import {Link} from "react-router-dom";

const CocktailDetails = ({drink}) => {

    return (
        <div className="cocktail-details">
            <div className="cocktail-details-header">
                <h2 className="card-title">{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                <ul className={"tags"}>
                    <Link to={`/categories/${drink.strCategory}`} style={{display: "contents"}}>
                        <div className={"list-box"}>
                            <li>{drink.strCategory}</li>
                        </div>
                    </Link>
                    <div className={"list-box"}>
                        <li>{drink.strAlcoholic}</li>
                    </div>
                    <div className={"list-box"}>
                        <li>{drink.strGlass}</li>
                    </div>
                </ul>
                <p>Modified: {drink.dateModified}</p>
            </div>
            <div className="cocktail-details-body">
                <h2>Ingredients</h2>
                <ul className={"ingredients-list"}>
                    {Object.keys(drink).map((key) => {
                        if (key.includes("strIngredient") && drink[key]) {
                            return (
                                <Link to={`/ingredients/${drink[key]}`}>
                                    <li key={key}>{drink[key]} {drink[`strMeasure${key.split("strIngredient").pop()}`]}</li>
                                </Link>
                            )
                        }
                        return null;
                    })}
                </ul>
                <h2>Instructions</h2>
                <p>{drink.strInstructions}</p>
            </div>
        </div>

    )

}

export default CocktailDetails