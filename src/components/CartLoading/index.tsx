import { CartLoadingStyled } from "./styles";

import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

function CartLoading() {
  return (
    <CartLoadingStyled>
      <div className="container">
        <h2>Preparando seu carrinho</h2>
        <Box sx={{ width: "260px" }}>
          <LinearProgress />
        </Box>
      </div>
    </CartLoadingStyled>
  );
}

export default CartLoading;
