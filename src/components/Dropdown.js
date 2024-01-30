import React from 'react';
const Dropdown = ({ options, value, onChange, placeholder }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    <option value="">{placeholder}</option>
    {options.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);
export default Dropdown;
