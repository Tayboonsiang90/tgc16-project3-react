import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
    ////
    let stripeFunction = () => {
        console.log(loadStripe)
        var stripe = loadStripe("pk_test_51KpotDGc5H31Xn3fEzUeBFTHMrvWGky6DiogFmxd7o0iDCnXtyIhT3mtSjFdUQVcb17AH6DEo0Yy8ARkLTIrzhPz00HCk8hv7s");
        stripe.redirectToCheckout({
            sessionId: "cs_test_b1TM6FI6E7bllFhuWByYxKFi3QiN6fK3TbitLxQjZPBfcGMtXTsN1wKYb8",
        });
    };
    return <React.Fragment>{stripeFunction()}</React.Fragment>;
}
