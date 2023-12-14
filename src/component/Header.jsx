import "../Page.css"
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {

    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value)
    }

    const isInputEmpty = () => {
        return message === ''
    }

    return (
        <>
            <header className='header'>
                <nav className={"navbar"}>
                    <Link to={"/"}><h1>Cocktails from heaven</h1></Link>
                    <ul>
                        <Link to={"/our_cocktails"}>
                            <div className={"link-box"}>
                                <li>Our Cocktails</li>
                            </div>
                        </Link>
                        < Link to={"/ingredients"}>
                            <div className={"link-box"}>
                                <li>Ingredients</li>
                            </div>
                        </Link>

                        <Link to={"/categories"}>
                            <div className={"link-box"}>
                                <li>Categories</li>
                            </div>
                        </Link>
                        <Link to={"/glasses"}>
                            <div className={"link-box"}>
                                <li>Glasses</li>
                            </div>
                        </Link>
                    </ul>
                    <form>
                        <label>
                            <Link to={`/search/${message}`}>
                            <input onChange={handleChange} value={message} type='text'
                                   placeholder='Lookup cocktails'/>
                            </Link>
                        </label>
                        <Link to={`/search/${message}`}>
                            <button disabled={isInputEmpty()}>Search</button>
                        </Link>
                    </form>
                </nav>
                <div className={"header-space"}></div>
            </header>
        </>
    )
}

export default Header