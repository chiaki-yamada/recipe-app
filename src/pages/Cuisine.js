import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipe = await data.json();
    setCuisine(recipe.results);
  };

  useEffect(() => {
    getCuisine(params.cuisine);
    console.log(params.cuisine);
  }, [params.cuisine]);

  return (
    <div className='wrapper'>
      <div className='grid'>
        {cuisine.map((item) => {
          return (
            <div key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img className='sorted-img' src={item.image} alt={item.title} />
                <h4 className='sorted-title'>{item.title}</h4>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cuisine