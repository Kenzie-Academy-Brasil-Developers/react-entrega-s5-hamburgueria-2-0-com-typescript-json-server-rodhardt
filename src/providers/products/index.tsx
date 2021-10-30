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

  const [cart, setCart] = useState<CartData[]>([] as CartData[]);

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
      .then((response) => setCart([...response.data]))
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
        },
      ];
      setCart(modifiedCart as CartData[]);
      axios
        .patch(
          `https://hamburgueria-rodhadt.herokuapp.com/carts/${cart[0].id}`,
          modifiedCart[0],
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => console.log("cart atualizado"))
        .catch((err) => console.log(err));
    } else {
      const newCart = [
        {
          userId: cart[0].userId,
          status: "progress",
          order: [{ productId: itemId, quantity: quantity }],
        },
      ];
      setCart(newCart as CartData[]);
      axios
        .post(`https://hamburgueria-rodhadt.herokuapp.com/carts/`, newCart[0], {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) =>
          setCart([{ ...newCart, id: response.data.id }] as any)
        )
        .catch((err) => console.log(err));
    }
  };

  const removeCart = (itemId: number) => {
    const modifiedCart = [
      {
        userId: cart[0].userId,
        status: "progress",
        order: [
          ...cart[0].order.filter((product) => product.productId !== itemId),
        ],
      },
    ];
    setCart(modifiedCart);
    axios
      .patch(
        `https://hamburgueria-rodhadt.herokuapp.com/carts/${cart[0].id}`,
        modifiedCart[0],
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      )
      .then((response) => console.log("cart atualizado"))
      .catch((err) => console.log(err));
  };

  const completeCart = () => {
    const modifiedCart = [
      {
        userId: cart[0].userId,
        status: "complete",
        order: cart[0].order,
      },
    ];
    setCart([]);
    axios
      .patch(
        `https://hamburgueria-rodhadt.herokuapp.com/carts/${cart[0].id}`,
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
      .delete(
        `https://hamburgueria-rodhadt.herokuapp.com/carts/${cart[0].id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      )
      .then((response) => console.log("cart atualizado"))
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        cart,
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
