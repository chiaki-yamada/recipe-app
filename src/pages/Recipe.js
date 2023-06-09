import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()

    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detail-wrapper">
      <div className="detail-img">
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      
      <div className="detail-info">
        <button className={activeTab === "instructions" ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</button>
        <button className={activeTab === "ingredients" ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</button>

        {activeTab === "instructions" && (
          <div className="recipe-detail">
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="recipe-detail">
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
        
      </div>
    </div>
  )
}

export default Recipe