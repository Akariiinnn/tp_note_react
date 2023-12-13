const CocktailCard = ({cocktail}) => {

    return (
        <section className="highlighted">
            <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink}/>
            <h2 className="card-title">{cocktail.strDrink}</h2>
            <p className="card-text">{cocktail.strInstructions}</p>
        </section>
    )
}

export default CocktailCard