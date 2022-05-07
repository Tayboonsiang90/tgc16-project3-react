import UserContext from "./UserContext";
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
let API_URL = "http://localhost:4000/api/";

export default class UserProvider extends React.Component {
    state = {
        user: "",
    };

    async componentDidMount() {
        console.log("Component did mount in context");
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
    }

    render = () => {
        const context = {
            user: this.state.user,
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
