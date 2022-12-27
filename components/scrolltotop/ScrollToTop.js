
import { useState, useEffect } from 'react';
import classes from "./ScrollToTop.module.css";

import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, []);


    return (
        <>

            {showTopBtn &&
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                    className={classes.scrolltotop}
                >
                    <IoIosArrowUp className={classes.arrowicon}/>
                </button>
            }
        </>
    );

}


export default ScrollToTop;