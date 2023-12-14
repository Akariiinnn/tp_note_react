import {useContext} from "react";
import {Link} from "react-router-dom";
import {MainContext} from "../context/MainContext";

const RandomCategory = () => {

    const context = useContext(MainContext)

    const randomCategory = context.categories[Math.floor(Math.random() * context.categories.length)]

    return (

        <section className={"randomCategory-section"}>
            <Link to={"/categories"}><h2>Random category</h2></Link>
            {randomCategory ? (
                <>
                    <section className={"randomCategory"}>
                            <section className={"category"}>
                                <Link to={`/categories/${randomCategory.strCategory.replace(" \/ ", "_")}`}>
                                <section className={"highlighted"}>
                                    <h2 className="card-title">{randomCategory.strCategory}</h2>
                                </section>
                                </Link>
                            </section>
                    </section>
                </>
            ) : (
                <p></p>
            )}
        </section>
    )
}

export default RandomCategory;