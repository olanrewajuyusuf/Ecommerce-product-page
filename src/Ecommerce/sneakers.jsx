// import { useState } from "react";
// import { products } from "./products";

function Sneakers({ handleClick, product, handlePlus, handleMinus }) {
  return (
    <article>
      <div className="sneakers">
        <img
          src={product}
          alt="Sneakers"
          className="sneaker"
          onClick={handleClick}
        />
        <div className="next">
          <img
            src="images/icon-next.svg"
            alt="#"
            className="left"
            onClick={handleMinus}
          />
          <img
            src="images/icon-next.svg"
            alt="#"
            className="right"
            onClick={handlePlus}
          />
        </div>
      </div>
    </article>
  );
}

export default Sneakers;
