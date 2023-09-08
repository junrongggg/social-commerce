import { useState, useEffect } from "react"
import axios from 'axios'

/** Calling backend URL */
const URL = "http://localhost:5002/feed/";
const URL1 = "http://localhost:5002/discussion/"

export const useGlobalContext = () => {

    const [productsList, setProductsList] = useState([]);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
        getComments();
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

    const getComments = async () => {
        try{
            const response = await axios.get(`${URL1}get-comment`);
            const commentData = response.data;
            setComments(commentData);
        }catch (error){
            setError(error.message);
        }
    }

    const contextValue = {
        getProducts,
        productsList,
        getComments,
        comments
    };

    return (
        contextValue
    )
}