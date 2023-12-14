import AllCategories  from "../component/AllCategories.jsx"
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import Layout from "../component/Layout";

const Categories = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const CategoriesData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const CategoriesDataResponse = await CategoriesData.json()
            setCategories(CategoriesDataResponse.drinks)
        })();
    }, [])

    return (
        <>
            {categories ? (
                <MainContext.Provider value={categories}>
                    <Layout>
                    <AllCategories/>
                    </Layout>
                </MainContext.Provider>
            ) : (
                <>
                    <Layout>
                    <img className="spinner" src={"https://media.tenor.comOn7kvXhzml4AAAAi/loading-gif.gif"} alt={"loading"}/>
                    </Layout>
                </>
            )}
        </>
    )
}

export default Categories