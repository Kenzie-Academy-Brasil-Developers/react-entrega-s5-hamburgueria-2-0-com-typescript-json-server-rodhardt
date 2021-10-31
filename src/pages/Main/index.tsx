import ProductsList from "../../components/ProductsList";
import Header from "../../components/Header";
import Cart from "../../components/Cart";

import { useAuth } from "../../providers/authentication";
import { useProducts } from "../../providers/products";

import { useState, useEffect } from "react";

import CartLoading from "../../components/CartLoading";

function MainPage() {
  const { authenticate } = useAuth();
  const { isLoadingCart, currentCart } = useProducts();
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    authenticate();
    currentCart();
  }, []);

  return (
    <>
      <Header setShowCart={setShowCart} />
      <ProductsList />
      {showCart && <Cart setShowCart={setShowCart} />}
      {isLoadingCart ? <CartLoading /> : null}
    </>
  );
}

export default MainPage;
