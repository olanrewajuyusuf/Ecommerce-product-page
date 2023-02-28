import { light } from "./products";
import { useEffect } from "react";

function MiniProduct({ changeProduct, border, miniStyle }) {
  let over = document.getElementsByClassName("overlay");

  // over.forEach((element) => {
  //   element.addEventListener("mouseover", function () {
  //     element.style.display = "block";
  //   });
  // });
  for (let i = 0; i < over.length; i++) {
    over[i].addEventListener("mouseover", function () {
      over[i].style.display = "block";
    });
  }
  useEffect(() => {}, [over]);

  return (
    <div className="mini-images">
      {light.map((x) => {
        const { image, id } = x;
        return (
          <div
            className="image-container"
            key={id}
            onClick={() => changeProduct(id)}
          >
            <img src={image} alt={image} />
            <div className="overlay"></div>
          </div>
        );
      })}
    </div>
  );
}

export default MiniProduct;
