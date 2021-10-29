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
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burgue",
      category: "sanduíches",
      price: 16,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "sanduíches",
      price: 18,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Combo Kenzie",
      category: "combos",
      price: 26,
      img: "https://mcdco.vteximg.com.br/arquivos/ids/157474-1000-1000/McCombo%E2%84%A2-Grande-McBacon%E2%84%A2-Triple.png?v=637289650327100000",
    },
    {
      id: 5,
      name: "Fanta",
      category: "bebidas",
      price: 5,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 6,
      name: "Coca Cola",
      category: "bebidas",
      price: 7,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 7,
      name: "McShake Ovomaltine",
      category: "sobremesas",
      price: 10,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
    {
      id: 8,
      name: "Top Sundae",
      category: "sobremesas",
      price: 10,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
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
