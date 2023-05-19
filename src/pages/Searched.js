import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`);
    const recipe = await data.json();
    setSearchedRecipes(recipe.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);


  return (
    <div className='wrapper'>
      <div className='grid'>
        {searchedRecipes.map((item) => {
          return (
            <div  key={item.id}>
              <img className='sorted-img' src={item.image} alt={item.title} />
              <h4 className='sorted-title'>{item.title}</h4>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default Searched

