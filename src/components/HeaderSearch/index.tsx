import { SearchStyled } from "./styles";

import { useState } from "react";

function HeaderSearch() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchStyled>
      <input
        value={searchInput}
        placeholder="Pesquisar"
        onChange={(evt) => setSearchInput(evt.target.value)}
      >
        <div className="icon-container"></div>
      </input>
    </SearchStyled>
  );
}

export default HeaderSearch;
