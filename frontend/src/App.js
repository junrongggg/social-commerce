//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Feed.js";
import data from "./feederproduct.js";
//import ProductPage from "./pages/Product.js";
function App() {
  return (<div>
    <Navbar></Navbar>
    <main>
      <h1>Products</h1>
      {
        data.products.map(product =>(
        <div className = "product" key = {product.slug}>
          <img src = {product.image} alt = {product.name}></img>
          <p>
            {product.name}
          </p>
          <p>
            {product.description}
          </p>
          <p>
            {product.price}
          </p>
        </div>))
      }
    </main>
  </div> );

}

export default App;
