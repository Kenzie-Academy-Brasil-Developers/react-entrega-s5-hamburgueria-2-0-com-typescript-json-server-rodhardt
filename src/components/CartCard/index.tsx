import { CartCardStyled } from "./styles";
import { ProductData } from "../../assets/types/product";

import { useState } from "react";

import { useProducts } from "../../providers/products";

import { FaTrash } from "react-icons/fa";

function CartCard({ product }: any) {
  const [quantity, setQuantity] = useState(product.quantity);

  const { addCart, removeCart } = useProducts();

  const handleRemover = () => {
    if (quantity > 0) {
      addCart(product.id, quantity - 1);
      setQuantity(quantity - 1);
    }
  };

  return (
    <CartCardStyled>
      <div className="image-container">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="info-container">
        <h5>{product.name}</h5>
        <div className="quantity-buttons">
          <button
            onClick={() => {
              handleRemover();
            }}
          >
            -
          </button>
          <h4>{quantity}</h4>
          <button
            onClick={() => {
              addCart(product.id, quantity + 1);
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="icon-container">
        <FaTrash onClick={() => removeCart(product.id)} />
      </div>
    </CartCardStyled>
  );
}

export default CartCard;
