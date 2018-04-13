import React from 'react';
import cxs from 'cxs';

const style = cxs({
  marginBottom: '10px',

  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
});

export default ({name}) => <div className={style}>{name}</div>;

