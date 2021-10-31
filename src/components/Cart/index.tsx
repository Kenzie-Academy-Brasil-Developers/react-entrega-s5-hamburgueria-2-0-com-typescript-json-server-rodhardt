import { CartStyled } from "./styles";

import { useState, useEffect } from "react";
import axios from "axios";

import { ProductData } from "../../assets/types/product";

import { useAuth } from "../../providers/authentication";
import { useProducts } from "../../providers/products";

import CartCard from "../CartCard";

import { FaRegSadTear, FaHamburger } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";

interface CartProps {
  setShowCart: (boolean: boolean) => void;
}

function Cart({ setShowCart }: CartProps) {
  const { authToken } = useAuth();
  const { cart, currentCart, addCart, removeCart, completeCart, deleteCart } =
    useProducts();

  const [productInfo, setProductInfo] = useState<ProductData[]>(
    [] as ProductData[]
  );

  const [isEmptyOverComplete, setIsEmptyOverComplete] = useState(true);

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
    setIsEmptyOverComplete(true);
  };

  return (
    <CartStyled>
      <div className="opacity" onClick={() => handleShowCart()}></div>
      <div className="cart">
        <header>
          <h4>Carrinho de compras</h4>
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
              <div className="status-message">
                {isEmptyOverComplete ? (
                  <>
                    <p>
                      Parece que seu carrinho está vazio <FaRegSadTear />
                    </p>
                    <p>Adicione itens</p>
                  </>
                ) : (
                  <>
                    <p>Seu pedido está sendo preparado!</p>
                    <p>
                      <FaHamburger />
                      <RiMotorbikeFill />
                    </p>
                  </>
                )}
              </div>
            )}
          </ul>
        </div>
        {isLoading ? null : cart.length > 0 ? (
          <div>
            <p className="total">
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
              <button className="remove-button" onClick={() => deleteCart()}>
                Remover todos
              </button>
              <button
                className="complete-button"
                onClick={() => {
                  completeCart();
                  setIsEmptyOverComplete(false);
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
