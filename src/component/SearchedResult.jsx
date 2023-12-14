import {useContext} from "react";
import {MainContext} from "../context/MainContext";
import CocktailCard from "./CocktailCard";

const SearchedResult = ({query}) => {

    const searchedDrinks = useContext(MainContext)

    const loadingArray = Array(12).fill({
        strDrink: "...",
        strDrinkThumb: "/images/Pulse-1s-200px.gif",
        strInstructions: "..."
    })

    return (
        <>
            <div className={"search-header"}>
                <h1 style={{marginLeft: "2%", marginTop: "0", marginBottom: "1%"}}>Results for</h1>
                <h1 style={{marginLeft: "5%", marginTop: "0", marginBottom: "1%", color: "#05386B"}}>{query}</h1>
                <h2 style={{
                    marginLeft: "5%",
                    marginTop: "0",
                    marginBottom: "1%"
                }}>Showing {searchedDrinks ? (searchedDrinks.length) : ("0")} results</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={"header-space"} style={{backgroundColor: "white", width: "100%"}}></div>
                </div>
            </div>
            <section className={"all-cocktails"}>
                {searchedDrinks ? (
                    <>
                        {searchedDrinks.map((drink) => (
                            <CocktailCard cocktail={drink}/>
                        ))}
                    </>
                ) : (
                    <>
                        {loadingArray.map((drink) => (
                            <CocktailCard cocktail={drink}/>
                        ))}
                    </>

                )}

            </section>
        </>
    )
}

export default SearchedResult