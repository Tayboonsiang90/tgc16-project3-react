import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
let API_URL = "https://tgc16-project3-express.herokuapp.com/api/";

export default function Signup() {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        repeat_password: "",
        first_name: "",
        last_name: "",
        contact_number: "",
        country_id: 0,
    });

    const [countryState, setCountryState] = useState({
        country: [],
    });

    useEffect(() => {
        const countries = async () => {
            let response = await axios.get(API_URL + "countries");
            setCountryState({ country: response.data });
        };

        countries();
    }, []);

    const [errorState, setErrorState] = useState({
        errorMessage: "",
        display: "d-none",
    });

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const registerUser = async () => {
        try {
            await axios.post(API_URL + "users/register", formState);
            navigate("/login");
        } catch (e) {
            setErrorState({
                errorMessage: e.response.data.error,
                display: "",
            });
        }
    };

    return (
        <React.Fragment>
            <section className="py-20 bg-light overflow-hidden">
                <div className="position-relative container">
                    <div className="position-relative mw-4xl mx-auto">
                        <div className="position-absolute top-50 start-0 end-0 translate-middle-y bg-info-light ms-n6 me-n6" style={{ height: "90%" }}></div>
                        <div className="position-relative py-16 pt-md-16 pb-md-20 px-4 px-sm-8 bg-white">
                            <div className="mw-lg mx-auto text-center">
                                <div className="d-inline-block h6 mb-4" href="#">
                                    <img className="img-fluid" src={require("../assets/logo.jpg")} alt=""></img>
                                </div>
                                <h2 className="mb-8">Create an account</h2>
                                <div className={"alert alert-danger " + errorState.display}>{errorState.errorMessage}</div>
                                <form>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="text"
                                        name="username"
                                        value={formState.username}
                                        onChange={updateFormField}
                                        placeholder="Username"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="text"
                                        name="email"
                                        value={formState.email}
                                        onChange={updateFormField}
                                        placeholder="Email"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="password"
                                        name="password"
                                        value={formState.password}
                                        onChange={updateFormField}
                                        placeholder="Password"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="password"
                                        name="repeat_password"
                                        value={formState.repeat_password}
                                        onChange={updateFormField}
                                        placeholder="Repeat password"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="text"
                                        name="first_name"
                                        value={formState.first_name}
                                        onChange={updateFormField}
                                        placeholder="First Name"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="text"
                                        name="last_name"
                                        value={formState.last_name}
                                        onChange={updateFormField}
                                        placeholder="Last Name"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="number"
                                        name="contact_number"
                                        value={formState.contact_number}
                                        onChange={updateFormField}
                                        placeholder="Contact Number"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <select className="form-select py-4 px-8 border mb-8" name="country_id" value={formState.country_id} onChange={updateFormField}>
                                        <option value={0} key={0}>
                                            Country
                                        </option>
                                        {countryState.country.map((p) => (
                                            <option value={p.id} key={p.id}>
                                                {p.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="form-check" htmlFor="">
                                        <input className="form-check-input" type="checkbox"></input>
                                        <label className="form-check-label">By signing up, you agree to our Terms, Data Policy and Cookies.</label>
                                    </div>
                                    <div className="mt-12 mt-md-16 btn btn-dark" onClick={registerUser}>
                                        Create Account
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
