import react, { useState } from "react";
import CustomizedAccordions from "../acordian/CustomizedAccordions";

import classes from "./SearchFilter.module.css";


const SearchFilter = () => {

    const [filterSearch, setFilterSearch] = useState(false);

    // const filterHandler = () => {
    //     setFilter(!filter);
    //     console.log('toggle')
    // }

    // const toggleHandler = () => {
    //     setFilterSearch(true)
    //     console.log('toggle')
    // }

    return (
        <div className={classes.filter}>
            <h2>مهندسی در تهران</h2>
            <div className={classes.detail}>
                <button>امکانات بیشتر صفحه </button>
            </div>
            {/* <CustomizedAccordions /> */}
            <div className={filterSearch ? classes.hiden : ''} >
                <div className={classes.search}>
                    <button>فیلتر جستجو</button>
                    <button>اشتراک گذاری</button>
                </div>
                <div className={classes.page}>
                    <h5>راهنمای صفحه</h5>
                    <button>کسب و کار های معتبر</button>
                    <button>سایر نتایج جستجو</button>
                    <button>خدمات و محصولات مربوط با این جستجو</button>
                </div>
            </div>
        </div>
    )

}

export default SearchFilter;