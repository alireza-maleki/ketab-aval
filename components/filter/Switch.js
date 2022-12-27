import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels(props) {
    return (
        <FormGroup>
            <FormControlLabel control={<Switch />} label={props.label} />
            {/* <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
        </FormGroup>
    );
}