import axios from "axios";

import { useState, useEffect } from "react";
import { ProductsListStyled } from "./styles";

import ProductCard from "../ProductCard";

import { useProducts } from "../../providers/products";
import { useProductsFilter } from "../../providers/productFilter";

function ProductsList() {
  const { productsList, handleProducts } = useProducts();

  const { filterValue, isFilter } = useProductsFilter();

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <ProductsListStyled>
      <ul>
        {productsList
          .filter((product) =>
            isFilter
              ? product.name
                  .toLowerCase()
                  .includes(filterValue.toLowerCase()) ||
                product.category
                  .toLowerCase()
                  .includes(filterValue.toLowerCase())
              : true
          )
          .map((product, index) => (
            <li key={index}>
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </ProductsListStyled>
  );
}

export default ProductsList;
