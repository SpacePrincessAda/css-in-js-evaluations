import React from 'react';

import './checkbox.css';

const Checkbox = ({text, checked, onChange, disabled}) => (
  <label className={disabled ? 'checkbox-label checkbox-label__disabled' : 'checkbox-label'}>
    <input 
      type="checkbox" 
      className="checkbox-input"
      checked={checked} 
      onChange={onChange}
      disabled={disabled}
    />
    <div className="checkbox-inner">
      <div className={`checkbox-box 
                     ${checked && 'checkbox-box__checked'}
                     ${disabled && 'checkbox-box__disabled'}`}
      >
        {checked ?
          <div className="checkbox-check"></div> : null
        }
      </div>
      <div>{text}</div>
    </div>
  </label>
);

export default Checkbox;

