import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { ProductData } from "../../assets/types/product";

import { useAuth } from "../authentication";
import { CartData } from "../../assets/types/cart";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  productsList: ProductData[];
  cart: CartData[];
  isLoadingCart: boolean;
  handleProducts: () => void;
  currentCart: () => void;
  addCart: (itemId: number, quantity: number) => void;
  removeCart: (itemId: number) => void;
  completeCart: () => void;
  deleteCart: () => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsList, setProductsList] = useState<ProductData[]>(
    [] as ProductData[]
  );
  const { authToken, userId } = useAuth();
  const [cartId, setCartId] = useState<number>();

  const [cart, setCart] = useState<CartData[]>([] as CartData[]);

  const [isLoadingCart, setIsLoadingCart] = useState<boolean>(false);

  const handleProducts = () => {
    axios
      .get("https://hamburgueria-rodhadt.herokuapp.com/products/")
      .then((response) => setProductsList([...response.data]))
      .catch((err) => console.log(err));
  };

  const currentCart = () => {
    axios
      .get(
        `https://hamburgueria-rodhadt.herokuapp.com/carts?userId=${userId}&status=progress`
      )
      .then((response) => {
        setCart([...response.data]);
        setCartId(response.data[0].id);
      })
      .catch((err) => console.log(err));
  };

  const addCart = (itemId: number, quantity: number) => {
    if (cart.length > 0) {
      const modifiedCart = [
        {
          userId: cart[0].userId,
          status: "progress",
          order: cart[0].order.every((food) => food.productId !== itemId)
            ? [...cart[0].order, { productId: itemId, quantity: quantity }]
            : cart[0].order.map((food) => {
                return {
                  productId: food.productId,
                  quantity:
                    food.productId === itemId ? quantity : food.quantity,
                };
              }),
          id: cartId,
        },
      ];
      setCart(modifiedCart as CartData[]);
      axios
        .patch(
          `https://hamburgueria-rodhadt.herokuapp.com/carts/${cartId}`,
          modifiedCart[0],
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => console.log("cart atualizado"))
        .catch((err) => console.log(err));
    } else {
      setIsLoadingCart(true);
      const newCart = [
        {
          userId: userId,
          status: "progress",
          order: [{ productId: itemId, quantity: quantity }],
        },
      ];
      setCart(newCart as CartData[]);
      axios
        .post(`https://hamburgueria-rodhadt.herokuapp.com/carts/`, newCart[0], {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setIsLoadingCart(false);
          setCartId(response.data.id);
        })
        .catch((err) => {
          console.log(err);
          setIsLoadingCart(false);
        });
    }
  };

  const removeCart = (itemId: number) => {
    if (cart[0].order.length === 1) {
      deleteCart();
    } else {
      const modifiedCart = [
        {
          userId: cart[0].userId,
          status: "progress",
          order: [
            ...cart[0].order.filter((product) => product.productId !== itemId),
          ],
          id: cartId,
        },
      ];
      setCart(modifiedCart);
      axios
        .patch(
          `https://hamburgueria-rodhadt.herokuapp.com/carts/${cartId}`,
          modifiedCart[0],
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => console.log("cart atualizado"))
        .catch((err) => console.log(err));
    }
  };

  const completeCart = () => {
    const modifiedCart = [
      {
        userId: cart[0].userId,
        status: "complete",
        order: cart[0].order,
        id: cartId,
      },
    ];
    setCart([]);
    axios
      .patch(
        `https://hamburgueria-rodhadt.herokuapp.com/carts/${cartId}`,
        modifiedCart[0],
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      )
      .then((response) => console.log("cart atualizado"))
      .catch((err) => console.log(err));
  };

  const deleteCart = () => {
    setCart([]);
    axios
      .delete(`https://hamburgueria-rodhadt.herokuapp.com/carts/${cartId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => console.log("cart atualizado"))
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        cart,
        isLoadingCart,
        handleProducts,
        currentCart,
        addCart,
        removeCart,
        completeCart,
        deleteCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
