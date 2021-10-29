import { HeaderStyled } from "./styles";
import { FaShoppingCart, FaSignOutAlt, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <input placeholder="Pesquise" />
      <div>
        <FaSearch />
      </div>
      <div>
        <FaShoppingCart />
      </div>
      <div>
        <FaSignOutAlt />
      </div>
    </HeaderStyled>
  );
}

export default Header;
