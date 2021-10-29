import { CartStyled } from "./styles";

import { useState, useEffect } from "react";
import axios from "axios";

import { ProductData } from "../../assets/types/product";
import { CartData } from "../../assets/types/cart";

import { useAuth } from "../../providers/authentication";

function Cart() {
  const { authToken } = useAuth();

  const [showCart, setShowCart] = useState<boolean>(true);
  const [cart, setCart] = useState<CartData[]>([
    {
      userId: 2,
      status: "progress",
      order: [
        { productId: 3, quantity: 2 },
        { productId: 5, quantity: 1 },
        { productId: 6, quantity: 1 },
        { productId: 7, quantity: 2 },
      ],
    },
  ]);

  const [productInfo, setProductInfo] = useState<ProductData[]>(
    [] as ProductData[]
  );

  useEffect(() => {
    const idList = cart[0].order.reduce((acm, cv) => {
      return `${acm}id=${cv.productId}&`;
    }, "");
    axios
      .get(`https://hamburgueria-rodhadt.herokuapp.com/products?${idList}`)
      .then((response) => setProductInfo([...response.data]))
      .catch((err) => console.log(err));
  }, [cart[0].order.length]);

  const productBuild = (index: any) => {
    const productComplete = { index };
    return productComplete;
  };

  return (
    <>
      {showCart ? (
        <CartStyled>
          <div className="opacity" onClick={() => setShowCart(false)}></div>
          <div className="cart">
            <header>
              <h2>Cart</h2>
              <button onClick={() => setShowCart(false)}>X</button>
            </header>
            <div>
              {productInfo.map((info, i) => (
                <div key={i}>
                  {info.name} {info.id}
                </div>
              ))}
            </div>
          </div>
        </CartStyled>
      ) : null}
    </>
  );
}

export default Cart;
