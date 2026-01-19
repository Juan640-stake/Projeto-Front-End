import React from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-title">{title}</h4>
      
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input 
              type={inputType} 
              name={inputType === 'radio' ? title : option.value}
              value={option.value}
              className="filter-input"
            />
            <span className="filter-label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;