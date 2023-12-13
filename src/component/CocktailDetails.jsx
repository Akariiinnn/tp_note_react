const CocktailDetails = ({drink}) => {

    return (
        <div className="cocktail-details">
            <div className="cocktail-details-header">
                <h2 className="card-title">{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                <ul className={"tags"}>
                    <div className={"list-box"}>
                        <li>{drink.strCategory}</li>
                    </div>
                    <div className={"list-box"}>
                        <li>{drink.strAlcoholic}</li>
                    </div>
                    <div className={"list-box"}>
                        <li>{drink.strGlass}</li>
                    </div>
                    <div className={"list-box"}>
                        <li>{drink.strIBA}</li>
                    </div>
                </ul>
                <p>Modifié le {drink.dateModified}</p>
            </div>
            <div className="cocktail-details-body">
                <h3>Ingredients</h3>
                <ul>
                    {Object.keys(drink).map((key) => {
                        if (key.includes("strIngredient") && drink[key]) {
                            return (
                                <li key={key}>{drink[key]} {drink[`strMeasure${key.split("strIngredient").pop()}`]}</li>
                            )
                        }
                        return null;
                    })}
                </ul>
                <h3>Instructions</h3>
                <p>{drink.strInstructions}</p>
            </div>
        </div>

    )

}

export default CocktailDetails