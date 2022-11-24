import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealByID} from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getMealByID(id).then(data => {
            setRecipe(data.meals[0])
        })
    }, [id])

    return <>
        {!recipe.idMeal ? <Preloader/> : (
            <div className="recipie">
                <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <h1>{recipe.strMeal}</h1>
                <h6>Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                <p>{recipe.strInstructions}</p>

                <table className="centered">
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{
                                            recipe[`strMeasure${key.slice(13)}`]
                                        }</td>
                                    </tr>
                                )
                            }

                            return null
                        })
                    }
                    </tbody>
                </table>

                {recipe.strYoutube ? (
                    <div className="row">
                        <h5 style={{margin: '2rem 0 1.rem'}}>Video Recipe</h5>
                        <iframe
                            title={id}
                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                            frameBorder="0"
                            allowFullScreen={true}/>
                    </div>
                ) : null}
            </div>
        )}
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
    </>
}

export default Recipe