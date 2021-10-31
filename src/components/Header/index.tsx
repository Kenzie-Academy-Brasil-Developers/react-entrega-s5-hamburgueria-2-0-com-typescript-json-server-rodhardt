import { HeaderStyled } from "./styles";
import { FaShoppingCart, FaSignOutAlt, FaSearch } from "react-icons/fa";

import { useAuth } from "../../providers/authentication";

import HeaderSearch from "../HeaderSearch";

import { useEffect, useState } from "react";

import { useProducts } from "../../providers/products";

function Header({ setShowCart }: any) {
  const { logout } = useAuth();
  const { cart } = useProducts();

  const [isSearching, setIsSearching] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <HeaderStyled>
      {screenWidth > 500 ? (
        <>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <HeaderSearch
            className="desktop-search"
            setIsSearching={setIsSearching}
          />
          <div className="options">
            <div className="icons">
              <FaShoppingCart
                className="open-cart"
                onClick={() => setShowCart(true)}
              />
              {cart.length > 0 ? (
                <div onClick={() => setShowCart(true)} className="cart-count">
                  {cart[0].order.length}
                </div>
              ) : (
                <div onClick={() => setShowCart(true)} className="cart-count">
                  0
                </div>
              )}
            </div>
            <div className="icons">
              <FaSignOutAlt onClick={() => logout()} />
            </div>
          </div>
        </>
      ) : isSearching ? (
        <HeaderSearch
          className="mobile-search"
          setIsSearching={setIsSearching}
        />
      ) : (
        <>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <div className="options">
            <div className="icons search">
              <FaSearch onClick={() => setIsSearching(true)} />
            </div>
            <div className="icons">
              <FaShoppingCart
                className="open-cart"
                onClick={() => setShowCart(true)}
              />
              {cart.length > 0 ? (
                <div onClick={() => setShowCart(true)} className="cart-count">
                  {cart[0].order.length}
                </div>
              ) : (
                <div onClick={() => setShowCart(true)} className="cart-count">
                  0
                </div>
              )}
            </div>
            <div className="icons">
              <FaSignOutAlt onClick={() => logout()} />
            </div>
          </div>
        </>
      )}
    </HeaderStyled>
  );
}

export default Header;
