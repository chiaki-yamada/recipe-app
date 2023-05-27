import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Pescatarian() {
  const [pescatarian, setPescatarian] = useState([]);

  useEffect(() => {
    getPescatarian();
  }, []);

  const getPescatarian = async () => {
    
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=pescatarian&number=10`);
      const data = await api.json();
      console.log(data);

      setPescatarian(data.recipes);
      console.log(data.recipes);

    // const check = localStorage.getItem('popular');
    // if (check) {
    //   setPopluar(JSON.parse(check));
    // } else {
    //   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=popular&number=10`);
    //   const data = await api.json();

    //   localStorage.setItem('popular', JSON.stringify(data.recipes));
    //   setPopluar(data.recipes);
    //   console.log(data.recipes);

    // }
  };

  return (
    <div className='wrapper'>
      <h3>Pescatarian Picks</h3>

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
        {pescatarian.map((recipe) => {
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

export default Pescatarian;