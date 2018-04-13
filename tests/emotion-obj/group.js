import React from 'react';
import {css} from 'emotion';

import Checkbox from './checkbox';
import Select from './select';
import Name from './name';

const MQ_WIDTH = 800;

const groupStyle = css({
  display: 'flex',
  justifyContent: 'space-between',

  padding: 5,

  border: '1px solid #eee',
  backgroundColor: '#fff',

  '& + &': {
    marginTop: 10,
  },

  [`@media (max-width: ${MQ_WIDTH}px)`]: {
    flexDirection: 'column',
    borderLeft: 0,
    borderRight: 0,

    '& + &': {
      marginTop: 5,
    },
  },
});

const groupSelectedStyle = css({
  backgroundColor: '#ded',
});

const groupLeftStyle = css({
  [`@media (max-width: ${MQ_WIDTH}px)`]: {
    marginBottom: 5,
  },
});

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

