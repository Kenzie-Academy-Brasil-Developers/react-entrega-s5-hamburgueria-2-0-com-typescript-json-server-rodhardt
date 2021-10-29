export {};

// import { createContext, useContext, useState, ReactNode } from "react";
// import axios from "axios";
// import { ProductData } from "../../assets/types/product";

// interface ProductsProviderProps {
//   children: ReactNode;
// }

// interface ProductsProviderData {

// }

// const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);

// export const ProductsProvider = ({ children }: ProductsProviderProps) => {

//   const [productsList, setProductsList] = useState([])

//   const handleProducts = () => {
//     axios.get("https://hamburgueria-rodhadt.herokuapp.com/products/")
//     .then((response) => setProductsList(response.data))
//     .catch((err) => console.log(err))
//   };

//   const signIn = (userData: UserData) => {
//     axios
//       .post("https://hamburgueria-rodhadt.herokuapp.com/signin/", userData)
//       .then((response) => {
//         localStorage.setItem("@burg:token", response.data.accessToken);
//         localStorage.setItem("@burg:id", response.data.user.id);
//         setAuthToken(response.data.accessToken);
//         setUserId(response.data.user.id);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <ProductsContext.Provider
//       value={{
//         productsList
//       }}
//     >
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductsContext);
