// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Feed } from "./pages/Feed.js";

function App() {

	return(
		<div className="App">
			<Router>
				<Navbar></Navbar>
				<Feed></Feed>
				<Routes>
					{/* <Route path="/feed" element={<Feed />}/> */}
				</Routes>
			</Router>
		</div>
	);
//   return <Feed></Feed>;
}

export default App;
