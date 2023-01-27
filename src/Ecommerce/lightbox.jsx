import Sneakers from "./sneakers";
import Mini from "./miniProduct.jsx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const closeStyles = {
  color: "white",
  fontSize: 30,
  margin: "-10px 0 20px 35vw",
};
function LightBox() {
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
              <Sneakers />
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
