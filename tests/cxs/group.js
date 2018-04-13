import React from 'react';
import cxs from 'cxs';

import Checkbox from './checkbox';
import Select from './select';
import Name from './name';

const MQ_WIDTH = 800;

// NOTE: Other implementations use a `& + &` sibling selector for spacing between groups. As
// cxs does not support this, I'm doing a `:first-child` thing instead. This should be noted
// when comparing frameworks, as sibling selectors can be quite useful.

const groupStyle = cxs({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '5px',

  border: '1px solid #eee',
  backgroundColor: '#fff',

  marginTop: '10px',
  ':first-child': {
    marginTop: 0,
  },

  [`@media (max-width: ${MQ_WIDTH}px)`]: {
    flexDirection: 'column',
    borderLeft: 0,
    borderRight: 0,
    marginTop: '5px',
  },
});

const groupSelectedStyle = cxs({
  backgroundColor: '#ded',
});

const groupLeftStyle = cxs({
  [`@media (max-width: ${MQ_WIDTH}px)`]: {
    marginBottom: '5px',
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

