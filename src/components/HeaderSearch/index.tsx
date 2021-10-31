import { SearchStyled } from "./styles";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

import { useProductsFilter } from "../../providers/productFilter";
import { useProducts } from "../../providers/products";

function HeaderSearch({ className, setIsSearching }: any) {
  const { filterValue, setFilterValue, handleFilter, removeFilter } =
    useProductsFilter();

  return (
    <SearchStyled className={className}>
      <input
        value={filterValue}
        placeholder="Pesquisar"
        onChange={(evt) => setFilterValue(evt.target.value)}
      ></input>
      <div className="icon-container">
        <div className="search-start">
          <FaSearch onClick={() => handleFilter(filterValue)} />
        </div>
        <div
          onClick={() => {
            setIsSearching(false);
            removeFilter();
          }}
          className="search-cancel"
        >
          <MdOutlineDeleteSweep />
        </div>
      </div>
    </SearchStyled>
  );
}

export default HeaderSearch;
