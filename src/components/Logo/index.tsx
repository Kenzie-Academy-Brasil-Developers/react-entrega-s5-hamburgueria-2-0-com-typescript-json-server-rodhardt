import { LogoStyled } from "./styles";
import { FiShoppingBag } from "react-icons/fi";

function Logo() {
  return (
    <LogoStyled>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div className="container">
        <div className="icon">
          <FiShoppingBag />
        </div>
        <div className="description">
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os
            <span> melhores </span>
            ingredientes.
          </p>
        </div>
      </div>
      <div className="balls">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LogoStyled>
  );
}

export default Logo;
