import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import AllIngredients from "../component/AllIngredients";
import Layout from "../component/Layout";

const Ingredients = () => {

    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            const ingredientsDataResponse = await ingredientsData.json()
            setIngredients(ingredientsDataResponse.drinks)
        })();
    }, [])

    return (

        <MainContext.Provider value={ingredients}>
            {ingredients ? (
                    <Layout>
                    <AllIngredients/>
                    </Layout>
            ) : (
                <Layout>
                    <AllIngredients/>
                </Layout>
            )}
        </MainContext.Provider>
    )
}

export default Ingredients