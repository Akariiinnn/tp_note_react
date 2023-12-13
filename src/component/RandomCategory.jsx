import {useContext} from "react";
import {Link} from "react-router-dom";
import {MainContext} from "../context/MainContext";

const RandomCategory = () => {

    const context = useContext(MainContext)

    const randomCategory = context.categories[Math.floor(Math.random() * context.categories.length)]

    console.log(randomCategory)

    return (

        <section className={"randomCategory-section"}>
            <Link to={"/categories"}><h2>Categorie aléatoire</h2></Link>
            {randomCategory ? (
                <>
                    <section className={"randomCategory"}>
                            <section className={"category"}>
                                <section className={"highlighted"}>
                                    <h2 className="card-title">{randomCategory.strCategory}</h2>
                                </section>
                            </section>
                    </section>
                </>
            ) : (
                <p>Chargement...</p>
            )}
        </section>
    )
}

export default RandomCategory;