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
          <div style={{ width: "100%", background: "red" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="images/image-product-1-thumbnail.jpg" alt="#" />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x <span>{props.value}</span>
                  <span>${eval(125.0 * props.value)}</span>
                </p>
              </div>
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
