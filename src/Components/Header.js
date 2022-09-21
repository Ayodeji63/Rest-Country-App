import React, {useContext} from 'react'
import { Context } from '../Context'

const Header = () => {
  const {toggle, theme} = useContext(Context)
  return (
    <div className={`Header ${theme}`}>
      <h2>Where in the world</h2>
      <p onClick={toggle}>
        <span className='icon'>
          {theme === "dark" ? <ion-icon name="sunny"></ion-icon> : <ion-icon name="moon"></ion-icon>}
          </span>
        <span className='text'>
          {theme == "dark" ? "Light Mode" : "Dark Mode"}
          </span>
      </p>
    </div>
  )
}

export default Header