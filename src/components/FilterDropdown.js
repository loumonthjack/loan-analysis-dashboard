import React from "react";
import Dropdown from './Dropdown';

const FilterDropdowns = ({ filters, uniqueDropdownOptions, handleFilterChange }) => {
    return Object.keys(filters).map(key => (
        <Dropdown
            key={key}
            options={uniqueDropdownOptions[key]}
            value={filters[key]}
            onChange={handleFilterChange(key)}
            placeholder={`Select ${key.slice(0, 1).toUpperCase()}${key.slice(1)}`}
        />
    ));
};

export default FilterDropdowns;