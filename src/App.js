import "./App.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import SubmittedForm from "./pages/FormSubmitted";
import PostPage from "./pages/PostPage";
import ProductContext from "./ProductContext.js";
import React, { useState } from "react";

// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: "ACME Anvils",
            cost: 9.99,
        },
        {
            id: 2,
            product_name: "ACME Hammers",
            cost: 19.99,
        },
        {
            id: 3,
            product_name: "ACME Screwdrivers",
            cost: 29.99,
        },
    ]);

    const context = {
        products: () => {
            return this.state.products;
        },
    };

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/contact" element={<ContactUs />} />

                    <Route path="/form-submitted" element={<SubmittedForm />} />

                    <Route exact path="/posts" element={<PostPage />} />
                </Routes>
            </Router>
            <ProductContext.Provider value={context}>
                <React.Fragment>// more code here later</React.Fragment>
            </ProductContext.Provider>
        </>
    );
}

export default App;
