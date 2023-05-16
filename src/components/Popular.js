import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopluar] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    setPopluar(data.recipes);
  }
  return (
    <div className='wrapper'>
      <h3>Popular Picks</h3>

      <Splide options={{
        gap: '1rem',
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

        {popular.map((recipe) => {
          return (
            <SplideSlide>
              <div className='card'>
                <p>{recipe.title}</p>
                <img className='card-img' src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

    </div>
  )
}

export default Popular;