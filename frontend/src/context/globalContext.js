import { useState, useEffect } from "react"
import axios from 'axios'

/** Calling backend URL */
const URL = "http://localhost:5002/feed/";

export const useGlobalContext = () => {

    const [productsList, setProductsList] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts();
    }, []); 

    const getProducts = async () => {
        try {
            const response = await axios.get(`${URL}get-product`);
            const productData = response.data;
            setProductsList(productData);
            
        } catch (error) {
            setError(error.message);
        }
    }

    const contextValue = {
        getProducts,
        productsList
    };

    return (
        contextValue
    )
}