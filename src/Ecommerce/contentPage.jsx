import { BsCart3 } from "react-icons/bs";
// import { useState } from "react";

function Contents(props) {
  const { value, handleChange, addValue, decreaseValue, handleCart } = props;

  return (
    <article className="content">
      <section>
        <strong>SNEAKER COMPANY</strong>
        <h1>Fall Limited Edition Sneaker</h1>
        <p style={{ color: "hsl(220, 14%, 75%)" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outter sole, they'll withstand everything
          the weather can offer.
        </p>
      </section>
      <section>
        <div className="price-tag">
          <div className="price">
            <h2>$125.00</h2>
            <span>50%</span>
          </div>
          <span style={{ color: "hsl(220, 14%, 75%)", fontWeight: "bold" }}>
            <s>$250.00</s>
          </span>
        </div>
        <form>
          <div className="counters">
            <img
              src="images/icon-minus.svg"
              alt="#"
              className="minus"
              onClick={decreaseValue}
              style={{ cursor: "pointer", padding: 10 }}
            />
            <input type="text" value={value} onChange={handleChange} />
            <img
              src="images/icon-plus.svg"
              alt="#"
              className="plus"
              onClick={addValue}
              style={{ cursor: "pointer", padding: 10 }}
            />
          </div>
          <button type="submit" onClick={handleCart}>
            <BsCart3 style={{ marginRight: 10 }} />
            Add to cart
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contents;
