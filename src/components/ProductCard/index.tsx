import { ProductCardStyled } from "./styles";

function ProductCard({ product }: any) {
  return (
    <ProductCardStyled>
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <h4>{product.name}</h4>
      <p>{product.category}</p>
      <h5>{product.price}</h5>
      <button>Adicionar</button>
    </ProductCardStyled>
  );
}

export default ProductCard;
