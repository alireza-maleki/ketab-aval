import react from "react";
import ProductDetail from "./ProductDetail";

import { useDispatch } from "react-redux";


const ProductItems = (props) => {

    const { title, description, id, image, category, price } = props;

    return (
        <ul>
            <ProductDetail
                title={title}
                description={description}
                id={id}
                image={image}
                category={category}
                price={price}
            />
        </ul>
    )

}

export async function getStaticProps(context) {

    const dispatch = useDispatch()
    const data = dispatch(getData());

    return {
        props: {
            data: data
        }, // will be passed to the page component as props
    }
}

export default ProductItems;