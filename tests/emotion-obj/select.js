import React from 'react';
import {css} from 'emotion';

const blackArrows = `url('data:image/svg+xml;charset=utf8,%3csvg viewBox="0 0 4 12" xmlns="http://www.w3.org/2000/svg"%3e%3cpath fill="%23000" d="M2 0L0 4h4z m0 12L0 8h4z"/%3e%3c/svg%3e')`;
const grayArrows = `url('data:image/svg+xml;charset=utf8,%3csvg viewBox="0 0 4 12" xmlns="http://www.w3.org/2000/svg"%3e%3cpath fill="%23666" d="M2 0L0 4h4z m0 12L0 8h4z"/%3e%3c/svg%3e')`;

const style = css({
  display: 'block',
  width: '100%',
  height: '40px',
  padding: '6px 35px 6px 15px',

  color: '#000',

  backgroundImage: blackArrows,
  backgroundColor: '#eee',
  backgroundRepeat: 'no-repeat no-repeat',
  backgroundPosition: 'right 10px center',
  backgroundSize: '8px 18px',

  border: '1px solid #999',
  borderRadius: 0,

  // Remove dropdown styling
  WebkitAppearance: 'none',
  MozAppearance: 'none',

  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',

  ':focus': {
    border: '1px solid #ddd',
    boxShadow: '0 0 3px 0 #999',
    outlineStyle: 'none',
  },
});

const inlineStyle = css({
  display: 'inline-block',
  width: 'auto',
});

const disabledStyle = css({
  cursor: 'not-allowed',
  color: '#666',

  backgroundImage: grayArrows,
  backgroundColor: '#ddd',
  border: '1px solid #999',
  boxShadow: 'none',
});

export default ({value, options, onChange, hasError, disabled, inline, name}) => (
  <select
    className={css(style, inline && inlineStyle, disabled && disabledStyle)}
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

