import "./App.css";
import Header from "./header.jsx";
import MainPage from "./main.js";
import { useState } from "react";

function Ecommerce() {
  const [value, setValue] = useState(0);
  const [cartValue, setCartValue] = useState(false);

  const handleCart = (e) => {
    e.preventDefault();
    if (value > 0) {
      setCartValue(true);
    } else {
      setCartValue(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const addValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };

  return (
    <div className="container">
      <Header value={value} cartValue={cartValue} />
      <MainPage
        value={value}
        handleChange={handleChange}
        addValue={addValue}
        decreaseValue={decreaseValue}
        handleCart={handleCart}
      />
    </div>
  );
}

export default Ecommerce;
