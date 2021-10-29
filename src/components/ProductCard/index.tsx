import { ProductCardStyled } from "./styles";

function ProductCard({ product }: any) {
  return (
    <ProductCardStyled>
      <img src={`../../../public/images/${product.img}`} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.category}</p>
      <h5>{product.price}</h5>
      <button>Adicionar</button>
    </ProductCardStyled>
  );
}

export default ProductCard;
