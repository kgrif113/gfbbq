import logo from "./assets/logo.png";
import IG from "./assets/IG.png";
import "./App.css";

function App() {
  return (
    <>
      <div id="app">
        <img src={logo} className="logo" alt="Vite logo" />
        <div id="menubar">
          <a href="#startOfMenu">
            <h2>Dishes</h2>
          </a>
          <a href="#location">
            <h2>Location</h2>
          </a>
        </div>
        <h1>Menu</h1>
        <ul>
          <h3 id="startOfMenu">All dishes include 2 sides</h3>
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
          <h3 id="sides">Sides</h3>
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
        <h1 id="location">Location</h1>
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12458.82391475801!2d-77.371845223926!3d38.67862474834301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b657773744d461%3A0xc0d13e659f056b37!2sG%20%26%20F%20Barbeque!5e0!3m2!1sen!2sus!4v1718576386809!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div id="socials">
          <a
            target="_blank"
            id="instagram"
            rel="noreferrer"
            href="https://www.instagram.com/gf_bbq/"
          >
            <img id="instagram" src={IG} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
