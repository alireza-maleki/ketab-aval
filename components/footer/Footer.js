
import React from 'react';
import classes from "./Footer.module.css";



const Footer = (props) => {
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.query}>
                    <div className={classes.media}>
                        <img src="/images/logo.png" />
                        <div>
                            <img src="/images/facebook.png" />
                            <img src="/images/twitter.png" />
                            <img src="/images/instagram.png" />
                            <img src="/images/telegram.png" />
                        </div>
                    </div>
                    <div className={classes.links}>
                        <div className={classes.first}>
                            <h4>درباره کتاب اول</h4>
                            <p>درباره کتاب اول</p>
                            <p>تماس با کتاب اول</p>
                            <p>شرایط استفاده</p>
                            <p>حریم شخصی</p>
                        </div>
                        <div className={classes.second}>
                            <h4>کشف کنید</h4>
                            <p>دسته بندی مشاغل</p>
                            <p>دسترسی بانک مشاغل کتاب اول</p>
                        </div>
                        <div className={classes.third}>
                            <h4>صاحبین مشاغل در کتاب اول</h4>
                            <p>ثبت اطلاعات شغلی</p>
                            <p>تبلیغات با کتاب اول</p>
                        </div>
                    </div>
                    <div className={classes.enamad}>
                        <img src="/images/enamad.jfif" />
                        <img src="/images/samandeh.jfif" />
                        <p>1373-1401 © تمامی حقوق برای شرکت کتاب اول محفوظ است</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer