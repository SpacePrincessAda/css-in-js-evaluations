import React from 'react';
import {css} from 'emotion';

const style = css({
  marginBottom: 10,

  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: 'normal',
});

export default ({name}) => <div className={style}>{name}</div>;

