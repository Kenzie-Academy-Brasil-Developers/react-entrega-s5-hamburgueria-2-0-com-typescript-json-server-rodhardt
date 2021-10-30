import { CartCardStyled } from "./styles";
import { ProductData } from "../../assets/types/product";

import { useState, useEffect } from "react";

import { useProducts } from "../../providers/products";

import { FaTrash } from "react-icons/fa";

function CartCard({ product }: any) {
  const [quantity, setQuantity] = useState(product.quantity);

  const { cart, addCart, removeCart } = useProducts();

  const handleRemover = () => {
    if (quantity > 1) {
      addCart(product.productId, quantity - 1);
      setQuantity(quantity - 1);
    } else {
      removeCart(product.productId);
    }
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, [cart]);

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
              addCart(product.productId, quantity + 1);
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="icon-container">
        <FaTrash onClick={() => removeCart(product.productId)} />
      </div>
    </CartCardStyled>
  );
}

export default CartCard;
