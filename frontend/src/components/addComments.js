import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/globalContext.js"; //links the globalContext file

export const CommentForm = () => {

	const { getProducts, productsList } = useGlobalContext();

  const [comment, setComment] = useState({
    username: "",
    comments: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("http://localhost:5002/discussion/add-comment",{ ...comment });

        // alert("Comment Added");
        navigate("/product");

        // Reset the input fields after successful submission
        setComment({
            username: "",
            comments: ""
        });
    } catch (error) {
        console.error(error);
    }
  };

    
    return (
        <div className="container mx-auto mt-10">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700">Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={comment.username}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded w-full"
                    placeholder="Enter the username"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Comments</label>
                    <input
                    type="text"
                    id="comments"
                    name="comments"
                    value={comment.comments}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded w-full"
                    placeholder="Enter the comments"
                    />

                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};