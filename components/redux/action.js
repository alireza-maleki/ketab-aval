import axios from "axios";

export const getData = () => async (dispatch, getState) => {

    dispatch({ type: 'loading', payload: true });

    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        dispatch({ type: 'data', payload: [...data] })
    } catch (error) {
        dispatch({ type: 'error', payload: error.message });
        console.log(error.message)
    }

}
