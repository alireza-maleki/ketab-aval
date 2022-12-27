import react from "react";
import classes from "./Header.module.css";

import Link from "next/link";


const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.controls}>
                <div className={classes.control1}>
                    <ul>
                        <a><li>درباره کتاب اول <span>|</span></li></a>
                        <a><li>تماس با کتاب اول <span>|</span></li></a>
                        <a><li>دسترسی بانک مشاغل کتاب اول <span>|</span></li></a>
                        <a><li>تبلیغات با ما <span>|</span></li></a>
                        <a><li>دسته بندی مشاغل</li></a>
                    </ul>
                </div>
                <div className={classes.control2}>
                    <Link href="/login">
                        <div>
                            <a>ورود</a> / <a>ثبت نام</a>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )

}

export default Header;