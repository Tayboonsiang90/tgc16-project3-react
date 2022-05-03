import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const navigate = useNavigate();

    function submitForm() {
        navigate("/form-submitted");
    }

    const [formState, setFormState] = useState({
        fullname: "",
        email: "",
    });

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullname"></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <input type="button" onClick={submitForm} value="Submit Form"></input>
                </div>
            </div>
        </React.Fragment>
    );
}
