import {MainContext} from "../context/MainContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

const AllGlasses = () => {

    const glasses = useContext(MainContext)

    return (
        <>
            <h2 style={{marginLeft: "2%"}}>Tout les verres</h2>
            <section className={"all-glasses"}>
                {glasses ? (
                    glasses.map((glass, index) => (
                        <Link to={`/glasses/${glass.strGlass.replace("\/", " ")}`}>
                        <section className="highlighted">
                            <h2>{glass.strGlass}</h2>
                        </section>
                        </Link>
                    ))
                ) : (
                    <section className={"highlighted"}>
                        <h2>...</h2>
                    </section>
                )}
            </section>
        </>
    )
}

export default AllGlasses;