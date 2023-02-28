// import Sneakers from "./sneakers";
import Mini from "./miniProduct.jsx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const closeStyles = {
  color: "white",
  fontSize: 30,
  margin: "-10px 0 20px 35vw",
  cursor: "pointer",
};
function LightBox({ product, handleMinus, handlePlus }) {
  const [closeModal, setCLoseModal] = useState(true);
  return (
    <>
      {closeModal && (
        <div className="lightbox-modal">
          <IoClose style={closeStyles} onClick={() => setCLoseModal(false)} />
          <div
            style={{
              width: "58%",
            }}
          >
            <div className="lightbox" style={{ margin: "0px 0 0 5vw" }}>
              <div className="sneakers">
                <img src={product} alt="Sneakers" className="sneaker" />
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
              {/* <Sneakers /> */}
            </div>
            <div style={{ width: "70%", marginLeft: "10vw" }}>
              <Mini />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LightBox;
