import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import classes from "./Loading.module.css";

export default function CircularIndeterminate() {
    return (
        <div className={classes.loading}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
}