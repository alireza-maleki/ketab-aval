
import react, { useState } from "react";

import classes from "./Header2.module.css";
// import navbarIcon from "../../public/images/";

import DynamicHeader from "../dynamicheader/DynamicHeader";


const Header2 = () => {

    const [showHeader, setShowHeader] = useState(false);

    const headerHandler = () => {
        setShowHeader((prev) => !prev);

        { <DynamicHeader onshow={showHeader} /> }
        console.log('show')
    }


    return (
        <div className={classes.container}>
            <div className={classes.controls}>
                <div className={classes.logo}>
                    <p>دسته بندی مشاغل</p>
                    <button onClick={headerHandler}>
                        <img src="/images/hamberger.png" />
                    </button>
                    <a><h3>کتاب اول</h3></a>
                </div>
                <div className={classes.formInput}>
                    <form>
                        {/* <img src={"./images/arrow.png"}/> */}
                        <input
                            placeholder="شهر،محله،منطقه،خیابان و ..."
                            className={classes.inputOne} type="text" />
                        <span>در</span>
                        <input
                            placeholder="فعالیت شغلی،نام کسب و کار، خدمات و محصولات ..."
                            className={classes.inputTwo} type="text" />
                    </form>
                </div>
                <div className={classes.search}>
                    <img src={"./images/search.png"} />
                </div>
                <div className={classes.jobs}>
                    <div>
                        <img src={"./images/plus.png"} />
                    </div>
                    <div>
                        <h4>ثبت اطلاعات شغلی</h4>
                        <p>15 روز آکهی رایگان</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header2;