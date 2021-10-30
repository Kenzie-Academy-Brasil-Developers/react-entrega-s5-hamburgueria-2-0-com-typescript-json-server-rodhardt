import { CartStyled } from "./styles";

import { useState, useEffect } from "react";
import axios from "axios";

import { ProductData } from "../../assets/types/product";
import { CartData } from "../../assets/types/cart";

import { useAuth } from "../../providers/authentication";
import { useProducts } from "../../providers/products";

import CartCard from "../CartCard";

function Cart({ setShowCart }: any) {
  const { authToken } = useAuth();
  const { cart, currentCart, addCart, removeCart, completeCart, deleteCart } =
    useProducts();

  const [productInfo, setProductInfo] = useState<ProductData[]>(
    [] as ProductData[]
  );

  const [cartMessage, setCartMessage] = useState(
    "Parece que seu carrinho está vazio :("
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    currentCart();
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const idList =
      cart.length > 0
        ? cart[0].order.reduce((acm, cv) => {
            return `${acm}id=${cv.productId}&`;
          }, "")
        : "";
    axios
      .get(`https://hamburgueria-rodhadt.herokuapp.com/products?${idList}`)
      .then((response) => {
        setProductInfo([...productInfo, ...response.data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [cart]);

  useEffect(() => {});

  const productBuild = (currentId: number, quantity: number) => {
    let productComplete = productInfo.filter(
      (product) => product.id === currentId
    )[0];
    return { ...productComplete, productId: currentId, quantity: quantity };
  };

  const handleShowCart = () => {
    setShowCart(false);
    setCartMessage("Parece que seu carrinho está vazio :(");
  };

  return (
    <CartStyled>
      <div className="opacity" onClick={() => handleShowCart()}></div>
      <div className="cart">
        <header>
          <h2>Cart</h2>
          <button onClick={() => handleShowCart()}>X</button>
        </header>
        <div>
          <ul>
            {isLoading ? (
              <p>Carregando...</p>
            ) : cart.length > 0 ? (
              cart[0].order.map((product, index) => (
                <li key={index}>
                  <CartCard
                    product={productBuild(product.productId, product.quantity)}
                  />
                </li>
              ))
            ) : (
              <p>{cartMessage}</p>
            )}
          </ul>
        </div>
        {isLoading ? null : cart.length > 0 ? (
          <div>
            <p>
              Total
              <span>
                R$
                {` ${
                  cart[0].order
                    .reduce((acm, cv) => {
                      const productBuilt = productBuild(
                        cv.productId,
                        cv.quantity
                      );
                      return acm + productBuilt.price * productBuilt.quantity;
                    }, 0)
                    .toFixed(2) || 0
                }`}
              </span>
            </p>

            <div className="buttons-container">
              <button onClick={() => deleteCart()}>Remover todos</button>
              <button
                onClick={() => {
                  completeCart();
                  setCartMessage(
                    "Obrigado! Em breve chegará seu delicioso lanche! :)"
                  );
                }}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </CartStyled>
  );
}

export default Cart;
