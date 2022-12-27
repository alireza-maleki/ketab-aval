import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { getData } from "../redux/action";
import ProductItems from "../dataitems/ProductItems";
import ScrollToTop from "../scrolltotop/ScrollToTop";

import Loading from "../loading/Loading";


const GetData = () => {

    const dispatch = useDispatch();

    const { data, loading } = useSelector((state) => state.data);
    // const { loading } = useSelector((state) => state.loading);


    // const [dataFetch, setDataFetch] = useState([]);
    // const [errorFetch, setErrorFetch] = useState('');

    // const getDataProduct = async () => {
    //     try {
    //         const { data } = await axios.get("https://fakestoreapi.com/products");
    //         console.log(data)
    //         setDataFetch(data)
    //     } catch (error) {
    //         setErrorFetch(error.message);
    //     }
    // }

    useEffect(() => {
        dispatch(getData());
    }, [])

    console.log(data)

    return (
        <Fragment>
            {loading ? <Loading /> :
                <>
                    {
                        data.map((event) => (
                            <ProductItems
                                title={event.title}
                                description={event.description}
                                image={event.image}
                                id={event.id}
                                price={event.price}
                                category={event.category}
                                key={event.id}
                            />
                        ))
                    }
                </>
            }
        </Fragment>
    )

}

export default GetData;