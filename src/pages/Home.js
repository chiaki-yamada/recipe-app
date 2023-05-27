import Veggie from "../components/Veggie";
import Pescatarian from "../components/Pescatarian";
import Dessert from "../components/Dessert";
import React from 'react'

function Home() {
  return (
    <div>
      <Veggie />
      <Pescatarian />    
      <Dessert />
  
    </div>
  )
}

export default Home;