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
      <input placeholder="Pesquise" />
      <div>
        <FaSearch />
      </div>
      <div>
        <FaShoppingCart onClick={() => setShowCart(true)} />
      </div>
      <div>
        <FaSignOutAlt onClick={() => logout()} />
      </div>
    </HeaderStyled>
  );
}

export default Header;
