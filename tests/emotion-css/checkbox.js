import React from 'react';
import {css} from 'emotion';

const labelStyle = css`
  padding: 0;
  white-space: nowrap;
  color: black;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  cursor: normal;
`;

const labelDisabledStyle = css`
  color: gray;
  cursor: not-allowed;
`;

const inputStyle = css`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opactiy: 0;
`;

const wrapStyle = css`
  display: flex;
  flex-wrap: nowrap;
`;

const boxStyle = css`
  box-sizing: border-box;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 0;
  background-color: white;
`;

const boxCheckedStyle = css`
  border-width: 0px;
  background-color: green;
`;

const boxDisabledStyle = css`
  border-width: 0px;
  background-color: gray;
`;

const checkStyle = css`
  box-sizing: border-box;
  position: absolute;
  top: 4px;
  left: 7px;
  width: 6px;
  height: 10px;
  transform: rotate(35deg);

  border-color: white;
  border-style: solid;
  border-top: 0;
  border-left: 0;
  border-right-width: 2px;
  border-bottom-width: 2px;
`;

export default ({text, checked, onChange, disabled}) => (
  <label 
    className={`${labelStyle} ${disabled && labelDisabledStyle}`}
  >
    <input 
      className={inputStyle}
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
      disabled={disabled}
    />
    <div className={wrapStyle}>
      <div 
        className={`${boxStyle} 
                    ${checked && boxCheckedStyle} 
                    ${disabled && boxDisabledStyle}`}
      >
        {checked ?
          <div className={checkStyle}/> : null
        }
      </div>
      <div>{text}</div>
    </div>
  </label>
);

