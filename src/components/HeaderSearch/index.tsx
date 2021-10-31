import { SearchStyled } from "./styles";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

function HeaderSearch({ className, setIsSearching }: any) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchStyled className={className}>
      <input
        value={searchInput}
        placeholder="Pesquisar"
        onChange={(evt) => setSearchInput(evt.target.value)}
      ></input>
      <div className="icon-container">
        <div className="search-start">
          <FaSearch />
        </div>
        <div onClick={() => setIsSearching(false)} className="search-cancel">
          <MdOutlineDeleteSweep />
        </div>
      </div>
    </SearchStyled>
  );
}

export default HeaderSearch;
