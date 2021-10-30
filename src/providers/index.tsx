import { ReactNode } from "react";

import { AuthProvider } from "./authentication";
import { ProductsProvider } from "./products";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
