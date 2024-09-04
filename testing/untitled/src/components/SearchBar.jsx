import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default SearchBar;