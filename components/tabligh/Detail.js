import React from 'react';

import classes from "./Detail.module.css";

const Detail = () => {
    return (
        <div className={classes.between}>
            <div className={classes.detail}>
                <div>
                    <p> :خدمات و محصولات مرتبط با این جستجو</p>
                </div>
                <div className={classes.link}>
                    <a>بازرسی غیر مخرب</a>
                    <a>بازرسی فنی</a>
                    <a>بازرسی وتجهیزات و لوازم غیر مخرب</a>
                    <a>بازرسی جوش</a>
                    <a>سازه های فلزی</a>
                    <a>بازرسی و نظارت</a>
                    <a>مشاوره</a>
                    <a>گروه مهندسی</a>
                    <a>تست های غیر مخرب</a>
                    <a>مهندسی معدن</a>
                    <a>مشاوره</a>
                    <a>تست های غیر مخرب</a>
                    <a>ndt</a>
                    <a>مهندسین مشاوره ساخت</a>
                </div>
            </div>
        </div>
    )
}

export default Detail

