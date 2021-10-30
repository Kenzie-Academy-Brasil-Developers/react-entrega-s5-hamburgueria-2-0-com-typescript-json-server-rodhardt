import { HeaderStyled } from "./styles";
import { FaShoppingCart, FaSignOutAlt, FaSearch } from "react-icons/fa";

import { useAuth } from "../../providers/authentication";

function Header({ setShowCart }: any) {
  const { logout } = useAuth();

  return (
    <HeaderStyled>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div className="options">
        <input placeholder="Pesquise" />
        <div className="icons search">
          <FaSearch />
        </div>
        <div className="icons">
          <FaShoppingCart onClick={() => setShowCart(true)} />
        </div>
        <div className="icons">
          <FaSignOutAlt onClick={() => logout()} />
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
