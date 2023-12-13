import "../Page.css"
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {

    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value)

        console.log("value is:", event.target.value)
    }

    return (
        <>
            <header className='header'>
                <nav className={"navbar"}>
                    <Link to={"/"}><h1>Les cocktails de génie</h1></Link>
                    <ul>
                        <Link to={"/nos_cocktails"}>
                            <div className={"link-box"}>
                                <li>Nos Cocktails</li>
                            </div>
                        </Link>
                        < Link to={"/ingredients"}>
                        <div className={"link-box"}>
                            <li>Ingrédients</li>
                        </div>
                        </Link>

                        <Link to={"/categories"}>
                        <div className={"link-box"}>
                            <li>Catégories</li>
                        </div>
                        </Link>
                        <Link to={"/glasses"}>
                        <div className={"link-box"}>
                            <li>Verres</li>
                        </div>
                        </Link>
                    </ul>
                    <form>
                        <input onChange={handleChange} value={message} type='text'
                               placeholder='Rechercher un cocktail'/>
                        <Link to={`/search/${message}`}>
                            <button>Rechercher</button>
                        </Link>
                    </form>
                </nav>
                <div className={"header-space"}></div>
            </header>
        </>
    )
}

export default Header