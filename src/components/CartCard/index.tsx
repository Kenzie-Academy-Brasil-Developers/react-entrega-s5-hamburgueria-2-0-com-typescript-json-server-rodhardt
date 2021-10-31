import { CartCardStyled } from "./styles";

import { useState, useEffect } from "react";

import { useProducts } from "../../providers/products";

import { FaTrash } from "react-icons/fa";

interface CartCardProps {
  product: {
    productId: number;
    id?: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantity: number;
  };
}

function CartCard({ product }: CartCardProps) {
  const [quantity, setQuantity] = useState<number>(product.quantity);

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
