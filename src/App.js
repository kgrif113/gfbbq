import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='app'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <h1>Menu</h1>
    <ul>
      <h3>All dishes include 2 sides</h3>
  <li>Ribs | 2 Large Bones</li>
  <li>Chicken | 1 Leg Quarter</li>
  <li>Pork Chop | 1 Pork Chop</li>
  <li>Pulled Pork | 1 Pulled Pork Sandwich</li>
  <li>Pulled Pork with Coleslaw | 1 Pulled Pork Sandwich</li>
  <li>Brats | 1 Brat</li>
  <li>Hotlink | 1 Hotlink</li>
  <li>Jamaican Jerk Sausage | 1 Jamaican Jerk Sausage</li>
  <li>Jumbo Turkey Leg | 1 Jumbo Turkey Leg</li>
  <li>Regular Turkey Leg | 1 Regular Turkey Leg</li>
  <li>Half Chicken | 1 Half Chicken</li>
  <li>Jerk Rib Tips | Jerk Rib Tips</li>
  <li>Hamburger | 1 Hamburger</li>
  <li>Cheeseburger | 1 Cheeseburger</li>
  <li>Pork Chop and Chicken | 1 Pork Chop, 1 Leg Quarter</li>
  <li>Rib and Chicken | 1 Rib, 1 Leg Quarter</li>
  <li>Rib and Pork Chop | 1 Rib, 1 Pork Chop</li>
  <li>Jerk Wings | 4 Whole Wings</li>
    <h3>Sides</h3>
  <li>Baked Beans</li>
  <li>Corn on the Cob</li>
  <li>Pasta Salad</li>
  <li>Coleslaw</li>
  <li>Collard Greens</li>
  <h3>Individual menu items</h3>
  <li>Potato Salad</li>
  <li>Macaroni-n-Cheese</li>
  <li>Chicken Leg Quarter</li>
  <li>Pork Chop</li>
  <li>Half Chicken</li>
  <li>Jerk Rib Tips</li>
    </ul>
      </div>
    </>
  )
}

export default App
