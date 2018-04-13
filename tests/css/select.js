import React from 'react';

import './select.css';

const Select = ({value, options, onChange, hasError, disabled, inline, name}) => (
  <select
    className={`select ${inline && 'select__inline'} ${disabled && 'select__disabled'}`}
    value={value}
    onChange={onChange}
    disabled={disabled}
    name={name}
  >
    {options.map(([value, label], index) => (
      <option key={value} value={value}>{label}</option>
    ))}
  </select>
);

export default Select;

