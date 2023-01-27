import Sneakers from "./sneakers.jsx";
import Contents from "./contentPage.jsx";
import Mini from "./miniProduct.jsx";
import LightBox from "./lightbox.jsx";
import { lightBox, products } from "./products.js";
import { useState } from "react";

function MainPage({
  value,
  handleChange,
  addValue,
  decreaseValue,
  handleCart,
}) {
  const [lightbox, setLightbox] = useState(false);
  const [product, setProducts] = useState(products[0]);
  const [light, setLight] = useState("images/image-product-1-thumbnail.jpg");

  const changeProduct = () => {
    console.log("hello");
    if (light === "images/image-product-1-thumbnail.jpg") {
      setProducts("images/image-product-1.jpg");
      setLight("images/image-product-2-thumbnail.jpg");
    } else if (light === "images/image-product-2-thumbnail.jpg") {
      setProducts("images/image-product-2.jpg");
      setLight("images/image-product-3-thumbnail.jpg");
    } else if (light === "images/image-product-3-thumbnail.jpg") {
      setProducts("images/image-product-3.jpg");
      setLight("images/image-product-4-thumbnail.jpg");
    } else {
      setProducts("images/image-product-4.jpg");
      setLight("images/image-product-1-thumbnail.jpg");
    }
  };

  const handlePlus = () => {
    if (product === "images/image-product-1.jpg") {
      setProducts("images/image-product-2.jpg");
    } else if (product === "images/image-product-2.jpg") {
      setProducts("images/image-product-3.jpg");
    } else if (product === "images/image-product-3.jpg") {
      setProducts("images/image-product-4.jpg");
    }
  };
  const handleMinus = () => {
    if (product === "images/image-product-4.jpg") {
      setProducts("images/image-product-3.jpg");
    } else if (product === "images/image-product-3.jpg") {
      setProducts("images/image-product-2.jpg");
    } else if (product === "images/image-product-2.jpg") {
      setProducts("images/image-product-1.jpg");
    }
  };

  const handleClick = () => {
    setLightbox(true);
  };

  return (
    <main>
      <div style={{ marginTop: 90 }}>
        <Sneakers
          handleClick={handleClick}
          product={product}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
        <Mini changeProduct={changeProduct} />
      </div>
      <Contents
        value={value}
        handleChange={handleChange}
        addValue={addValue}
        decreaseValue={decreaseValue}
        handleCart={handleCart}
      />
      {lightbox && <LightBox />}
    </main>
  );
}

export default MainPage;
