import UserContext from "./UserContext";
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
let API_URL = "https://tgc16-project3-express.herokuapp.com/api/";

export default class UserProvider extends React.Component {
    state = {
        user: "",
        cart: "",
    };

    async componentDidMount() {
        console.log("Component did mount in context");
        // Initially, get the access token on every reload
        let token = localStorage.getItem("accessToken");
        if (token) {
            let tokenExpiry = jwt_decode(token).exp;
            let currentUnixTime = Math.round(new Date().getTime() / 1000);
            if (currentUnixTime >= tokenExpiry) {
                console.log("Access token has expired. Getting a new token now.");
                // Token has expired, need to refresh
                const refreshToken = localStorage.getItem("refreshToken");
                let refreshResponse = await axios.post(API_URL + "users/refresh", {
                    refreshToken: refreshToken,
                });
                localStorage.setItem("accessToken", refreshResponse.data.accessToken);
                token = refreshResponse.data.accessToken;
            }
            let response = await axios.get(API_URL + "users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({
                user: response.data,
            });

            let response1 = await axios.get(API_URL + "cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({
                cart: response1.data,
            });
        }
        // Now retrieve the cart on every reload
    }

    render = () => {
        const context = {
            user: this.state.user,
            cart: this.state.cart,
            updateUser: () => {
                const internalFunction = async () => {
                    console.log("Calling update user");
                    let token = localStorage.getItem("accessToken");
                    if (token) {
                        let tokenExpiry = jwt_decode(token).exp;
                        let currentUnixTime = Math.round(new Date().getTime() / 1000);
                        if (currentUnixTime >= tokenExpiry) {
                            console.log("Access token has expired. Getting a new token now.");
                            // Token has expired, need to refresh
                            const refreshToken = localStorage.getItem("refreshToken");
                            let refreshResponse = await axios.post(API_URL + "users/refresh", {
                                refreshToken: refreshToken,
                            });
                            localStorage.setItem("accessToken", refreshResponse.data.accessToken);
                            token = refreshResponse.data.accessToken;
                        }
                        let response = await axios.get(API_URL + "users/profile", {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        this.setState({
                            user: response.data,
                        });
                    }
                };

                internalFunction();
            },
            updateCart: () => {
                const internalFunction = async () => {
                    console.log("Calling update cart");
                    let token = localStorage.getItem("accessToken");
                    if (token) {
                        let tokenExpiry = jwt_decode(token).exp;
                        let currentUnixTime = Math.round(new Date().getTime() / 1000);
                        if (currentUnixTime >= tokenExpiry) {
                            console.log("Access token has expired. Getting a new token now.");
                            // Token has expired, need to refresh
                            const refreshToken = localStorage.getItem("refreshToken");
                            let refreshResponse = await axios.post(API_URL + "users/refresh", {
                                refreshToken: refreshToken,
                            });
                            localStorage.setItem("accessToken", refreshResponse.data.accessToken);
                            token = refreshResponse.data.accessToken;
                        }
                        let response1 = await axios.get(API_URL + "cart", {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        this.setState({
                            cart: response1.data,
                        });
                    }
                };

                internalFunction();
            },
            logoutUser: () => {
                localStorage.setItem("accessToken", "");
                localStorage.setItem("refreshToken", "");
                this.setState({
                    user: "",
                });
            },
        };
        return <UserContext.Provider value={context}>{this.props.children}</UserContext.Provider>;
    };
}
