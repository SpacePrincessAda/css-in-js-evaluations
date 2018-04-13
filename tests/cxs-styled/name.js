import React from 'react';
import cxs from 'cxs/component';

const Name = cxs('div')({
  marginBottom: '10px',

  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
});

export default ({name}) => <Name>{name}</Name>;

