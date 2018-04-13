import React from 'react';
import styled from 'styled-components';

import Checkbox from './checkbox';
import Select from './select';
import Name from './name';

const MQ_WIDTH = 800;

// NOTE: This has to be separate from Group because Group is a dynamic style and its generated
// class name will change based on the props passed. This breaks `& + &` selectors when two 
// siblings receive different props.
const Spacer = styled.div`
  & + & {
    margin-top: 10px;

    @media (max-width: ${MQ_WIDTH}px) {
      margin-top: 5px;
    }
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px;

  border: 1px solid #eee;
  background-color: ${props => props.isSelected ? '#ded' : '#fff'};

  @media (max-width: ${MQ_WIDTH}px) {
    flex-direction: column;
    border-left: 0;
    border-right: 0;
  }
`;

const LeftColumn = styled.div`
  @media (max-width: ${MQ_WIDTH}px) {
    margin-bottom: 5px;
  }
`;

export default ({index, name, roles, boxes, isSelected, options, onChange}) => (
  <Spacer>
    <Group isSelected={isSelected}>
      <LeftColumn>
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
      </LeftColumn>
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
    </Group>
  </Spacer>
);

