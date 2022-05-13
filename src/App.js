import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

// Imported Templates
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import ArtDetailsPage from "./pages/ArtDetailsPage";
import Checkout from "./pages/Checkout";

// Imported Context
import UserProvider from "./pages/UserProvider";

function App() {
    return (
        <>
            <UserProvider>
                <Navbar />
                <div>
                    <Routes>
                        {/* Home route */}
                        <Route path="/" element={<Home />} />
                        {/* Collection Route */}
                        <Route path="/collection" element={<Collection />} />
                        {/* Signup route */}
                        <Route path="/signup" element={<Signup />} />
                        {/* Login route */}
                        <Route path="/login" element={<Login />} />
                        {/* Cart route */}
                        <Route path="/cart" element={<Cart />} />
                        {/* Profile route */}
                        <Route path="/profile" element={<Profile />} />
                        {/* Art Details  */}
                        <Route path="/art/:artID/*" element={<ArtDetailsPage />} />
                        {/* Checkout  */}
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </UserProvider>
            <Footer />
        </>
    );
}

export default App;
