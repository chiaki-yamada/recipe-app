import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`);
    const recipe = await data.json();
    setCuisine(recipe.results);
  };

  useEffect(() => {
    getCuisine(params.cuisine);
    console.log(params.cuisine);
  }, [params.cuisine]);




  return (
    <div>Cuisine</div>
  )
}

export default Cuisine