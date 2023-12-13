import Header from "../component/Header";
import Footer from "../component/Footer";
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";

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
                    <Header/>
                    <Footer/>
                </MainContext.Provider>
            ) : (
                <>
                    <Header />
                    <img className={"spinner"} alt={"spinner"} src={"/images.spinner.gif"}/>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Glasses