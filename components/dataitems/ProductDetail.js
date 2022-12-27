
import { getData } from "../redux/action";

import { useDispatch } from "react-redux";

import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {


    const { title, description, image, id, category, price } = props;


    return (
        <li className={classes.summary}>
            <div className={classes.controls}>
                <div className={classes.image}>
                    <img src={image} />
                </div>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <div>
                            <h3>{title}</h3> 
                            <p>{id}</p>
                        </div>
                        <img src="/images/phone.webp" />
                    </div>

                    <p>{description}</p>

                </div>
            </div>
            <div className={classes.category}>
                <p>{category}</p>
                <div className={classes.actions}>
                    <button className={classes.secondbtn}>اطلاعات بیشتر</button>
                    <button className={classes.firstbtn}>مسیر یابی</button>
                </div>
            </div>
            <div className={classes.call}>
                <button>تماس با این کسب و کار</button>
            </div>
        </li>
    )

}


export async function getStaticProps(context) {

    const dispatch = useDispatch();
    const data = dispatch(getData());

    return {
        props: {
            data: data
        }, // will be passed to the page component as props
    }
}


export async function getStaticPaths() {

    const dispatch = useDispatch();
    const data = dispatch(getData());

    const ids = data.map((param) => [{ params: { id: param.id } }])
    return {
        paths: ids,
        fallback: false, // can also be true or 'blocking'
    }
}


export default ProductDetail;