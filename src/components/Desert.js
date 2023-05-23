import React from 'react'
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


function Desert() {
  const [desert, setDesert] = useState([]);

  useEffect(() => {
    getDesert();
  }, []);

  const getDesert = async () => {
    const check = localStorage.getItem('desert');
    if (check) {
      setDesert(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&type=desert`);
      const data = await api.json();

      localStorage.setItem('desert', JSON.stringify(data.recipes));
      setDesert(data.recipes);
      console.log(data.recipes);
    }
  };


  return (
    <div className='wrapper'>
      <h3>Desert Picks</h3>

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
        {desert.map((recipe) => {
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

export default Desert;