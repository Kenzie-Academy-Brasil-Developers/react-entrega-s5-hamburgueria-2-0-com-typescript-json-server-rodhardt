import ProductsList from "../../components/ProductsList";
import { useAuth } from "../../providers/authentication";

import { useEffect } from "react";

function MainPage() {
  const { authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, []);

  return <ProductsList />;
}

export default MainPage;
