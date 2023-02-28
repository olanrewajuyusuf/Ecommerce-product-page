import Sneakers from "./sneakers.jsx";
import Contents from "./contentPage.jsx";
import Mini from "./miniProduct.jsx";
import LightBox from "./lightbox.jsx";
import { products } from "./products.js";
import { useState, useEffect } from "react";

function MainPage({
  value,
  handleChange,
  addValue,
  decreaseValue,
  handleCart,
}) {
  const [lightbox, setLightbox] = useState(false);
  const [product, setProduct] = useState(products[0].image);
  const [border, setBorder] = useState(false);

  let over = document.getElementsByClassName("overlay");
  // console.log(over);
  for (let i = 0; i < over.length; i++) {
    if (product === "images/image-product-1.jpg") {
      over[0].style.display = "block";
    } else {
      over[0].style.display = "none";
    }

    if (product === "images/image-product-2.jpg") {
      over[1].style.display = "block";
    } else {
      over[1].style.display = "none";
    }

    if (product === "images/image-product-3.jpg") {
      over[2].style.display = "block";
    } else {
      over[2].style.display = "none";
    }

    if (product === "images/image-product-4.jpg") {
      over[3].style.display = "block";
    } else {
      over[3].style.display = "none";
    }
  }

  for (let i = 0; i < over.length; i++) {
    over[i].addEventListener("mousein", function () {
      over[i].style.display = "block";
    });
  }

  useEffect(() => {
    for (let i = 0; i < over.length; i++) {
      if (product === "images/image-product-1.jpg") {
        over[0].style.display = "block";
      }
    }
  }, [over, product]);

  // change big product image function
  const changeProduct = (id) => {
    if (id === 1) {
      setProduct("images/image-product-1.jpg");
      setBorder(true);
    } else if (id === 2) {
      setProduct("images/image-product-2.jpg");
      setBorder(true);
    } else if (id === 3) {
      setProduct("images/image-product-3.jpg");
      setBorder(true);
    } else if (id === 4) {
      setProduct("images/image-product-4.jpg");
      setBorder(true);
    }
  };

  const handlePlus = () => {
    if (product === "images/image-product-1.jpg") {
      setProduct("images/image-product-2.jpg");
    } else if (product === "images/image-product-2.jpg") {
      setProduct("images/image-product-3.jpg");
    } else if (product === "images/image-product-3.jpg") {
      setProduct("images/image-product-4.jpg");
    }
  };
  const handleMinus = () => {
    if (product === "images/image-product-4.jpg") {
      setProduct("images/image-product-3.jpg");
    } else if (product === "images/image-product-3.jpg") {
      setProduct("images/image-product-2.jpg");
    } else if (product === "images/image-product-2.jpg") {
      setProduct("images/image-product-1.jpg");
    }
  };

  const handleClick = () => {
    setLightbox(true);
  };

  return (
    <main id="main">
      <div style={{ marginTop: 90 }}>
        <Sneakers
          handleClick={handleClick}
          product={product}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
        <Mini changeProduct={changeProduct} border={border} />
      </div>
      <Contents
        value={value}
        handleChange={handleChange}
        addValue={addValue}
        decreaseValue={decreaseValue}
        handleCart={handleCart}
      />
      {lightbox && (
        <LightBox
          product={product}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
      )}
    </main>
  );
}

export default MainPage;
