import { CartStyled } from "../Cart/styles";
import { ProductData } from "../../assets/types/product";

import { useState } from "react";

function CartCard({ product }: ProductData) {
  return (
    <CartStyled>
      <h3>Oi</h3>
      <h4>olá</h4>
    </CartStyled>
  );
}

export default CartCard;
