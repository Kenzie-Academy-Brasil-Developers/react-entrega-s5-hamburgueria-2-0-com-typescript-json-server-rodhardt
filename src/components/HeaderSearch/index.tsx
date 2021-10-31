import { SearchStyled } from "./styles";

import { FaSearch } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

import { useProductsFilter } from "../../providers/productFilter";

interface HeaderSearchProps {
  className: string;
  setIsSearching: (boolean: boolean) => void;
}

function HeaderSearch({ className, setIsSearching }: HeaderSearchProps) {
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
