import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="col-12 mb-3">
      <input
        type="text"
        className="form-control w-100"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
