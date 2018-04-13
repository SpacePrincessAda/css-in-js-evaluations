import React from 'react';
import {css} from 'emotion';

const labelStyle = css({
  padding: 0,
  whiteSpace: 'nowrap',
  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
  cursor: 'normal',
});

const labelDisabledStyle = css({
  color: 'gray',
  cursor: 'not-allowed',
});

const inputStyle = css({
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
  opactiy: 0,
});

const wrapStyle = css({
  display: 'flex',
  flexWrap: 'nowrap',
});

const boxStyle = css({
  boxSizing: 'border-box',
  position: 'relative',
  width: '20px',
  height: '20px',
  marginRight: '10px',

  cursor: 'pointer',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray',
  borderRadius: 0,
  backgroundColor: 'white',
});

const boxCheckedStyle = css({
  borderWidth: 0,
  backgroundColor: 'green',
});

const boxDisabledStyle = css({
  borderWidth: 0,
  backgroundColor: 'gray',
});

const checkStyle = css({
  boxSizing: 'border-box',
  position: 'absolute',
  top: '4px',
  left: '7px',
  width: '6px',
  height: '10px',
  transform: 'rotate(35deg)',

  borderColor: 'white',
  borderStyle: 'solid',
  borderTop: 0,
  borderLeft: 0,
  borderRightWidth: '2px',
  borderBottomWidth: '2px',
});

export default ({text, checked, onChange, disabled}) => (
  <label 
    className={css(labelStyle, disabled && labelDisabledStyle)}
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
        className={css(boxStyle,
                       checked && boxCheckedStyle,
                       disabled && boxDisabledStyle)}
      >
        {checked ?
          <div className={checkStyle}/> : null
        }
      </div>
      <div>{text}</div>
    </div>
  </label>
);

