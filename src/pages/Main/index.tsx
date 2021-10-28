import ProductsList from "../../components/ProductsList";
import Header from "../../components/Header";

import { useAuth } from "../../providers/authentication";

import { useEffect } from "react";

function MainPage() {
  const { authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
}

export default MainPage;
