import { GiTacos, GiChopsticks, GiPretzel } from 'react-icons/gi'
import { CiPizza } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className='category'>
      <NavLink to={"/cuisine/German"}>
        <GiPretzel className='icon'/>
        <h4>German</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks className='icon'/>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to={"/cuisine/Italian"}>
        <CiPizza className='icon' />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/Mexican"}>
        <GiTacos className='icon' />
        <h4>Mexican</h4>
      </NavLink>

    </div>
  )
}

export default Category