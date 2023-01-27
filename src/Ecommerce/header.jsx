import Cart from "./cart.jsx";
import { useState, useEffect } from "react";

function Header(props) {
  // const [size, setSize] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  // fuction to toggle cart
  const handleClick = () => {
    if (cart === false) {
      setCart(true);
    } else {
      setCart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (this.window.innerWidth <= 650) {
        setMenu(false);
      }
    });
    return () => {
      window.removeEventListener("resize", function () {
        setMenu(false);
      });
    };
  }, []);
  // let styles = {
  //   visibility: menu <= 650 ? "hidden" : "unset",
  // };

  // const closeMenu = () => {
  //   if (menu <= 650) {
  //     return (styles.visibility = "hidden");
  //   }
  // };
  // const openMenu = () => {
  //   if (menu <= 650) {
  //     return { visibility: "unset" };
  //   }
  // };
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 650) {
  //     console.log("hello");
  //   }
  // });

  //list items
  const lists = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header>
      <div className="heading">
        <img
          src="images/icon-menu.svg"
          alt="#"
          // onClick={() => setMenu(openMenu)}
          className="menu"
        />
        <img src="images/logo.svg" alt="logo" style={{ marginLeft: 15 }} />
        {menu && (
          <nav>
            <ul>
              <img
                src="images/icon-close.svg"
                alt="#"
                className="menu-close"
                style={{ marginBottom: 15 }}
                onClick={() => setMenu(false)}
              />
              {lists.map((list) => (
                <li key={list}>
                  <a href={list}>{list}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="ava-cart">
        <div className="cart-div">
          <img
            src="images/icon-cart.svg"
            alt="#"
            className="cart-1"
            style={{ marginRight: 20 }}
            onClick={handleClick}
          />
          {props.cartValue && <span className="item-nums">{props.value}</span>}
        </div>

        <img src="images/image-avatar.png" alt="logo" className="avatar" />
      </div>
      {cart && <Cart value={props.value} cartValue={props.cartValue} />}
    </header>
  );
}

export default Header;
