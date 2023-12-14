import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext} from "../context/MainContext";
import SearchedResult from "../component/SearchedResult";
import Layout from "../component/Layout";

const Search = () => {

    const {query} = useParams()
    let [searchedDrinks, setSearchedDrinks] = useState(null)

    useEffect(() => {
        (async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
            console.log(url)
            const queryData = await fetch(url)
            const queryDataResponse = await queryData.json()
            setSearchedDrinks(queryDataResponse.drinks)
        })()
    }, [query]);

    return (
        <>
            <MainContext.Provider value={searchedDrinks}>
                <Layout>
                    <SearchedResult query={query}/>
                </Layout>
            </MainContext.Provider>
        </>
    )
}

export default Search