import { lightBox } from "./products";

function MiniProduct({ changeProduct }) {
  return (
    <div className="mini-images">
      {lightBox.map((image) => (
        <div className="image-container" key={image}>
          <img src={image} alt={image} onClick={changeProduct} />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
}

export default MiniProduct;
