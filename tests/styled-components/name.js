import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  margin-bottom: 10px;

  color: black;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
`;

export default ({name}) => <Name>{name}</Name>;

