import React from 'react';

import Checkbox from './checkbox';
import Select from './select';
import Name from './name';

import './group.css';

const Group = ({index, name, roles, boxes, isSelected, options, onChange}) => (
  <div className={`group ${isSelected && 'group__selected'}`}>
    <div className="group-left">
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

export default Group;

