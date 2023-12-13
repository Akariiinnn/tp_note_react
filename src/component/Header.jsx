import "../Page.css"
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <>
            <header className='header'>
                <nav className={"navbar"}>
                    <Link to={"/"}><h1>Les cocktails de génie</h1></Link>
                    <ul>
                        <li><Link to={"/nos_cocktails"}>Nos Cocktails</Link></li>
                        <li><Link to={"/ingredients"}>Ingrédients</Link></li>
                        <li><Link to={"/categories"}>Catégories</Link></li>
                        <li><Link to={"/verres"}>Verres</Link></li>
                    </ul>
                    <form>
                        <input type='text' placeholder='Rechercher une recette' />
                        <button type='submit'>Rechercher</button>
                    </form>
                </nav>
            </header>
        </>
)
}

export default Header