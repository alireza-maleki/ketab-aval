import React from 'react';

import classes from './Filter.module.css';

import FilterInput from "./FilterInput";
import Switch from "./Switch";

const Filter = () => {
    return (
        <div className={classes.filter}>
            <div>
                <div className={classes.search}>
                    <p>فیلتر جستجو</p>
                </div>
                <div className={classes.input}>
                    <p>اطلاعات کسب وکار</p>
                    <input type="text" placeholder='نام کسب و کار' className={classes.inputfirst}/>
                    <div className={classes.inputfilter}>
                        <FilterInput />
                    </div>
                    <div>
                        <div className={classes.mediafilter}>

                            <div className={classes.right}>
                                <div>
                                    {/* <span>موبایل دارد</span> */}
                                    <Switch label="موبایل دارد" />
                                </div>
                                <div>
                                    {/* <span>ایمیل دارد</span> */}
                                    <Switch label="ایمیل دارد" />
                                </div>
                                <div>
                                    {/* <span>وب سایت دارد</span> */}
                                    <Switch label="وب سایت دارد" />
                                </div>
                            </div>

                            <div className={classes.left}>
                                <div>
                                    {/* <span>شبکه اجتماعی دارد</span> */}
                                    <Switch label="شبکه اجتماعی دارد" />
                                </div>
                                <div>
                                    {/* <span>عکس دارد</span> */}
                                    <Switch label="عکس دارد" />
                                </div>
                                <div>
                                    {/* <span>لوگو دارد</span> */}
                                    <Switch label="لوگو دارد" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className={classes.setfilter}>
            <button >اعمال فیلتر</button>
            </div>
        </div>
    )
}

export default Filter