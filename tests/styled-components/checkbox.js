import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 0;
  white-space: nowrap;
  color: ${({disabled}) => disabled ? 'gray' : 'black'};
  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'normal'};
`;

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opactiy: 0;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Box = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  cursor: pointer;
  border-width: ${({checked, disabled}) => checked || disabled ? '0px' : '1px'};
  border-style: solid;
  border-color: gray;
  border-radius: 0;
  background-color: ${({checked, disabled}) => {
    if (disabled) return 'gray';
    if (checked) return 'green';
    return 'white';
  }};
`;

const Check = styled.div`
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

