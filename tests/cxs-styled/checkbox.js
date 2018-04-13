import React from 'react';
import cxs from 'cxs/component';

const Label = cxs('label')(props => ({
  padding: 0,
  whiteSpace: 'nowrap',
  color: props.disabled ? 'gray' : 'black',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
  cursor: props.disabled ? 'not-allowed' : 'normal',
}));

const Input = cxs('input')({
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
  opactiy: 0,
});

const InnerWrap = cxs('div')({
  display: 'flex',
  flexWrap: 'nowrap',
});

const Box = cxs('div')(props => {
  let bg = 'white';
  if (props.checked) bg = 'green';
  if (props.disabled) bg = 'gray';
  return {
    boxSizing: 'border-box',
    position: 'relative',
    width: '20px',
    height: '20px',
    marginRight: '10px',

    cursor: 'pointer',
    borderWidth: props.checked || props.disabled ? '0px' : '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 0,
    backgroundColor: bg,
  };
});

const Check = cxs('div')({
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
  <Label disabled={disabled}>
    <Input 
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
      disabled={disabled}
    />
    <InnerWrap>
      <Box disabled={disabled} checked={checked}>
        {checked ?
          <Check/> : null
        }
      </Box>
      <div>{text}</div>
    </InnerWrap>
  </Label>
);

