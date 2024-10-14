import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import "./InputSearch.css";

export const InputSearch = ({
  onSearchChange,
  labelColor = "fs-txt--light",
}) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback(
    debounce((value) => {
      onSearchChange(value);
    }, 300),
    [onSearchChange]
  );

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    handleSearchChange(newSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={labelColor}>Component name:</label>
      <input
        type="text"
        placeholder="Search..."
        className="fs-inputSearch"
        aria-label="Buscar"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};

InputSearch.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  labelColor: PropTypes.string,
};
