import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {MainContext} from "../context/MainContext";
import SearchedResult from "../component/SearchedResult";

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
            {searchedDrinks ? (
                <MainContext.Provider value={searchedDrinks}>
                    <Header />
                    <SearchedResult />
                    <Footer />
                </MainContext.Provider>
            ) : (
                <>
                    <Header />
                    <SearchedResult />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Search