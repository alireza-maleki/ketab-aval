import React from 'react';

import classes from "./Tabligh.module.css";

import Detail from "./Detail";
import Filter from '../filter/Filter';

const Tabligh = () => {
    return (
        <div className={classes.tabligh}>
            <div className={classes.pic}>
                <img src="/images/tabligh.jpg" />
            </div>
            <div className={classes.filtered}>
                <Detail />
                <Filter />
            </div>
        </div>
    )
}

export default Tabligh