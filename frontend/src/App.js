import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Feed } from "./pages/Feed.js";
import { ProductPage } from "./pages/product.js";

function App() {

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
		</div>
	);
}

export default App;
