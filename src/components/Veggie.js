import React from 'react'
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
  
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`);
      const data = await api.json();

      setVeggie(data.recipes);
      console.log(data.recipes);
    
    // const check = localStorage.getItem('veggie');
    // if (check) {
    //   setVeggie(JSON.parse(check));
    // } else {
    //   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`);
    //   const data = await api.json();

    //   localStorage.setItem('veggie', JSON.stringify(data.recipes));
    //   setVeggie(data.recipes);
    //   console.log(data.recipes);
    // }
  };


  return (
    <div className='wrapper'>
      <h3>Vegetarian Picks</h3>

      <Splide options={{
        gap: '1rem',
        drag: 'free',
        perPage: 4,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
        }
      }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className='card'>
                <Link to={"/recipe/" + recipe.id}>
                  <img className='card-img' src={recipe.image} alt={recipe.title} />
                  <p className='card-title'>{recipe.title}</p>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

    </div>
  )
}

export default Veggie;