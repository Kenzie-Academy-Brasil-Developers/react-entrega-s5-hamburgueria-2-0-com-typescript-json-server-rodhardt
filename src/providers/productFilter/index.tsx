import { createContext, useContext, useState, ReactNode } from "react";

interface ProductsFilterProviderProps {
  children: ReactNode;
}

interface ProductsFilterProviderData {
  filterValue: string;
  setFilterValue: (text: string) => void;
  isFilter: boolean;
  handleFilter: (searchText: string) => void;
  removeFilter: () => void;
}

const ProductsFilterContext = createContext<ProductsFilterProviderData>(
  {} as ProductsFilterProviderData
);

export const ProductsFilterProvider = ({
  children,
}: ProductsFilterProviderProps) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleFilter = (searchText: string) => {
    setFilterValue(searchText);
    if (searchText === "") {
      setIsFilter(false);
    } else {
      setIsFilter(true);
    }
  };

  const removeFilter = () => {
    setFilterValue("");
    setIsFilter(false);
  };

  return (
    <ProductsFilterContext.Provider
      value={{
        filterValue,
        setFilterValue,
        isFilter,
        handleFilter,
        removeFilter,
      }}
    >
      {children}
    </ProductsFilterContext.Provider>
  );
};

export const useProductsFilter = () => useContext(ProductsFilterContext);
