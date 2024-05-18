import axios from "axios";
import { productAction } from "./products";



// ==== fetch products ==== //
export const fetchProduct = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8000/allProduct")
            dispatch(productAction.setProducts(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}



// ==== get product by id ==== //
export const getProductById = (proId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:8000/allProduct/${proId}`)
            dispatch(productAction.setSinglePro(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}



// ====  get data reviews ==== //
export const getReviews = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8000/reviewUser")
            dispatch(productAction.setReviewUser(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}