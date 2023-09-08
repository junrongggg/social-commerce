import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Feed } from "./pages/Feed.js";
import { ProductPage } from "./pages/product.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	const notify = () => toast("You have a new follower!")
	return(
		<div className="App">
			<Router>
				{/* Navigation Bar */}
				<Navbar></Navbar>
				<Routes>
					{/* Feed Route */}
					<Route path="/" element={<Feed />}/>
	
					{/* Product Route */}
					<Route path="/product" element={<ProductPage />}/>
				</Routes>
			</Router>
			<div>
				<button onClick = {notify}>Follow!</button>
				<ToastContainer/>
			</div>
		</div>
	);
}

export default App;
