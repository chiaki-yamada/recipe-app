import { FaPizzaSlice } from 'react-icons/fa'
import { GiTacos, GiChopsticks, GiPretzel } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div>
      <NavLink to={"/cuisine/German"}>
        <GiPretzel />
        <h4>German</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/Mexican"}>
        <GiTacos />
        <h4>Mexican</h4>
      </NavLink>

    </div>
  )
}

export default Category