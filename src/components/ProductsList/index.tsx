import axios from "axios";

import { useState, useEffect } from "react";
import { ProductsListStyled } from "./styles";

import ProductCard from "../ProductCard";

import { useProducts } from "../../providers/products";

function ProductsList() {
  const { productsList, handleProducts } = useProducts();

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <ProductsListStyled>
      <ul>
        {productsList.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </ProductsListStyled>
  );
}

export default ProductsList;
