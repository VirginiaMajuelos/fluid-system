import React from "react";
import "./InputSearch.css";

const InputSearch = () => {
  return (
    <form>
      <label for="search" class="sr-only">
        Nombre del componente
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        class="fs--inputSearch"
        aria-label="Buscar"
      />
    </form>
  );
};

export default InputSearch;
