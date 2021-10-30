import ProductsList from "../../components/ProductsList";
import Header from "../../components/Header";
import Cart from "../../components/Cart";

import { useAuth } from "../../providers/authentication";
import { useProducts } from "../../providers/products";

import { useState, useEffect } from "react";

function MainPage() {
  const { authenticate } = useAuth();
  const { currentCart } = useProducts();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    authenticate();
    currentCart();
  }, []);

  return (
    <>
      <Header setShowCart={setShowCart} />
      <ProductsList />
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
}

export default MainPage;
