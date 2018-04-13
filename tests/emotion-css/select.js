import React from 'react';
import {css} from 'emotion';

const blackArrows = `url('data:image/svg+xml;charset=utf8,%3csvg viewBox="0 0 4 12" xmlns="http://www.w3.org/2000/svg"%3e%3cpath fill="%23000" d="M2 0L0 4h4z m0 12L0 8h4z"/%3e%3c/svg%3e')`;
const grayArrows = `url('data:image/svg+xml;charset=utf8,%3csvg viewBox="0 0 4 12" xmlns="http://www.w3.org/2000/svg"%3e%3cpath fill="%23666" d="M2 0L0 4h4z m0 12L0 8h4z"/%3e%3c/svg%3e')`;

const style = css`
  display: block;
  width: 100%;
  height: 40px;
  padding: 6px 35px 6px 15px;

  color: #000;
  background-image: ${blackArrows};
  background-color: #eee;
  background-repeat: no-repeat no-repeat;
  background-position: right 10px center;
  background-size: 8px 18px;

  border: 1px solid #999;
  border-radius: 0;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;

  &:focus {
    border: 1px solid #ddd;
    box-shadow: 0 0 3px 0 #999;
    outline-style: none;
  }
`;

const inlineStyle = css`
  display: inline-block;
  width: auto;
`;

const disabledStyle = css`
  cursor: not-allowed;
  color: #666;

  background-image: ${grayArrows};
  background-color: #ddd;
  border: 1px solid #999;
  box-shadow: none;
`;

export default ({value, options, onChange, hasError, disabled, inline, name}) => (
  <select
    className={`${style} ${inline && inlineStyle} ${disabled && disabledStyle}`}
    value={value}
    onChange={onChange}
    disabled={disabled}
    inline={inline}
    name={name}
  >
    {options.map(([value, label], index) => (
      <option key={value} value={value}>{label}</option>
    ))}
  </select>
);

