import { ProductCardStyled } from "./styles";

import { useProducts } from "../../providers/products";
import { useState, useEffect } from "react";

function ProductCard({ product }: any) {
  const { cart, addCart } = useProducts();

  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setCurrentQuantity(
        cart[0].order.reduce((acm, cv) => {
          return cv.productId === product.id ? acm + cv.quantity : acm;
        }, 0)
      );
    } else {
      setCurrentQuantity(0);
    }
  }, [cart]);

  return (
    <ProductCardStyled>
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <h4>{product.name}</h4>
      <p>{product.category}</p>
      <h5>R$ {product.price.toFixed(2)}</h5>
      <button
        onClick={() => {
          addCart(product.id, currentQuantity + 1);
          setCurrentQuantity(currentQuantity + 1);
        }}
      >
        Adicionar
      </button>
    </ProductCardStyled>
  );
}

export default ProductCard;
