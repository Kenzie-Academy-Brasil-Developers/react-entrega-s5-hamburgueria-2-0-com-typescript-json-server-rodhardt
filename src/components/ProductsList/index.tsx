import axios from "axios";

import { useState, useEffect } from "react";
import { ProductsListStyled } from "./styles";

import ProductCard from "../ProductCard";

function ProductsList() {
  const [productsList, setProductsList] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "sanduíches",
      price: 14,
      img: "burg.png",
    },
    {
      id: 2,
      name: "X-Burgue",
      category: "sanduíches",
      price: 16,
      img: "x-burg.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "sanduíches",
      price: 18,
      img: "bigkenzie.png",
    },
    {
      id: 4,
      name: "Combo Kenzie",
      category: "combos",
      price: 26,
      img: "combo.png",
    },
    {
      id: 5,
      name: "Fanta",
      category: "bebidas",
      price: 5,
      img: "fanta.png",
    },
    {
      id: 6,
      name: "Coca Cola",
      category: "bebidas",
      price: 7,
      img: "coca.png",
    },
    {
      id: 7,
      name: "McShake Ovomaltine",
      category: "sobremesas",
      price: 10,
      img: "ovomaltine.png",
    },
    {
      id: 8,
      name: "Top Sundae",
      category: "sobremesas",
      price: 10,
      img: "sundae.png",
    },
  ]);

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
