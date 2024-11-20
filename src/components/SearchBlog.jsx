import React from "react";

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => { 

    const handlePress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
        
    }
  return (
    <div className="w-full flex">
      <input
       value={search}
        onChange={handleSearchChange}
        type="text"
        onKeyPress={handlePress}
        className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
        placeholder="Hotels with rooftops pools"
      />
      <button
      onClick={handleSearch}
       className="bg-[#1E73BE] px-4 py-2 text-white">Search</button>
    </div>
  );
};

export default SearchBlog;