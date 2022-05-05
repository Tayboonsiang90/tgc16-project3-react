import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Imported Templates
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// Imported Pages
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar />
            <div>
                <Router>
                    <Routes>
                        {/* Home route */}
                        <Route path="/" element={<Home />} />
                        {/* Signup route */}
                        <Route path="/signup" element={<Signup />} />
                        {/* Login route */}
                        <Route path="/login" element={<Login />} />
                        {/* Cart route */}
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </>
    );
}

export default App;
