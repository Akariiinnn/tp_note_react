import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import AllGlasses from "../component/AllGlasses";
import Layout from "../component/Layout";

const Glasses = () => {

    const [glasses, setGlasses] = useState(null);

    useEffect(() => {
        (async () => {
            const glassesData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
            const glassesDataResponse = await glassesData.json()
            setGlasses(glassesDataResponse.drinks)
        })()
    }, []);

    return (
        <>
            {glasses ? (
                <MainContext.Provider value={glasses}>
                    <Layout>
                    <AllGlasses />
                    </Layout>
                </MainContext.Provider>
            ) : (
                <>
                    <Layout>
                    <img className="spinner" src={"/images/Pulse-1s-200px.gif"} alt={"loading"}/>
                    </Layout>
                </>
            )}
        </>
    )
}

export default Glasses