import {Link} from "react-router-dom";

const CocktailCard = ({cocktail}) => {

    return (
        <Link to={`/drinks/${cocktail.idDrink}`} className={"highlighted"}>
            <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink}/>
            <h2 className="card-title">{cocktail.strDrink}</h2>
        </Link>
    )
}

export default CocktailCard