import React, { Fragment } from 'react';

import classes from './DynamicHeader.module.css';

const DynamicHeader = (props) => {
  return (
    <Fragment>
      {
        props.onshow && <div className={classes.dynamic}>
          <div className={classes.header}></div>
        </div>
      }</Fragment>
  )
}

export default DynamicHeader;