import React from 'react';
import {css} from 'emotion';

import Checkbox from './checkbox';
import Select from './select';
import Name from './name';

const MQ_WIDTH = 800;

const groupStyle = css`
  display: flex;
  justify-content: space-between;

  padding: 5px;

  border: 1px solid #eee;
  background-color: #fff;

  & + & {
    margin-top: 10px;
  }

  @media (max-width: ${MQ_WIDTH}px) {
    flex-direction: column;
    border-left: 0;
    border-right: 0;

    & + & {
      margin-top: 5px;
    }
  }
`;

const groupSelectedStyle = css`
  background-color: #ded;
`;

const groupLeftStyle = css`
  @media (max-width: ${MQ_WIDTH}px) {
    margin-bottom: 5px;
  }
`;

export default ({index, name, roles, boxes, isSelected, options, onChange}) => (
  <div className={`${groupStyle} ${isSelected && groupSelectedStyle}`}>
    <div className={groupLeftStyle}>
      <Name name={name}/>
      {roles.map(role =>
        <Select
          name={`role_${index}`}
          value={role.value}
          disabled={role.isDisabled}
          inline={true}
          options={options}
          onChange={onChange}
        />
      )}
    </div>
    <div className="group-right">
      {boxes.map(box => 
        <Checkbox 
          text={box.text}
          checked={box.value}
          disabled={box.isDisabled}
          onChange={onChange}
        />
      )}
    </div>
  </div>
);

