import Header from "../component/Header";
import Footer from "../component/Footer";
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import AllIngredients from "../component/AllIngredients";

const Ingredients = () => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        (async () => {
            const ingredientsData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            const ingredientsDataResponse = await ingredientsData.json()
            setIngredients(ingredientsDataResponse.drinks)
        })();
    }, [])

    return (
        <>
            {ingredients ? (
                <MainContext.Provider value={ingredients}>
                    <Header/>
                    <AllIngredients/>
                    <Footer/>
                </MainContext.Provider>
            ) : (
                <>
                    <Header />
                    <img className="spinner" src={"https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Ingredients