import { RiDeleteBin5Line } from "react-icons/ri";

function Cart(props) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {!props.cartValue ? (
          <p style={{ color: "hsl(219, 9%, 45%)", fontWeight: "bold" }}>
            Your cart is empty.
          </p>
        ) : (
          <div className="cart-card" style={{ width: "100%" }}>
            <div className="card">
              <img src="images/image-product-1-thumbnail.jpg" alt="#" />
              <div className="account">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {props.value}
                  <span>${125.0 * props.value}.00</span>
                </p>
              </div>
              <RiDeleteBin5Line
                className="delete"
                onClick={props.removeProduct}
              />
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
