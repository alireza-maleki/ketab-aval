import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from "../search/SearchFilter.module.css";


export default function SimpleAccordion() {
    return (
        <div className={classes.accordionCustom}>
            <Accordion>
                <div>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div  className={classes.accordionBtn}>
                            <h2>مهندسی در تهران</h2>
                            <div className={classes.detail}>
                                <button>امکانات بیشتر صفحه </button>
                            </div>
                        </div>
                    </AccordionSummary>
                </div>
                <AccordionDetails>
                    <div>
                        <div className={classes.search}>
                            <button>فیلتر جستجو</button>
                            <button>اشتراک گذاری</button>
                        </div>
                        <div className={classes.page}>
                            <h5>راهنمای صفحه</h5>
                            <button>سایر نتایج جستجو</button>
                            <button>کسب و کار های معتبر</button>
                            <button>خدمات و محصولات مربوط با این جستجو</button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}