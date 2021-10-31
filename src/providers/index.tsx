import { ReactNode } from "react";

import { AuthProvider } from "./authentication";
import { ProductsProvider } from "./products";
import { ProductsFilterProvider } from "./productFilter";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ProductsFilterProvider>{children}</ProductsFilterProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
