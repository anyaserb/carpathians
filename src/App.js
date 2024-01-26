import "./App.css";
import MainScreen from "./components/MainScreen";
import AboutUs from "./components/AboutUs";
import Expectations from "./components/Expectations";
import Route from "./components/Route";
import Advantages from "./components/Advantages";
import Guides from "./components/Guides";
import Preparation from "./components/Preparation";
import { useState } from "react";
import FormOrder from "./components/FormOrder";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const closeBurgerNahdler = () => {
    if (burgerMenu) {
      setBurgerMenu(false);
    }
  };

  return (
    <div onClick={closeBurgerNahdler}>
      <MainScreen burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <AboutUs />
      <Expectations />
      <Route />
      <Advantages />
      <Guides />
      <Preparation />
      <FormOrder />
    </div>
  );
}

export default App;
