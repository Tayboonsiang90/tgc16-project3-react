import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext.js";

let API_URL = "http://localhost:4000/api/";

export default function Cart() {
    let userContext = useContext(UserContext);

    const [quantity, setQuantityState] = useState({});
    const [message, setMessage] = useState({
        msg: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            let tempObj = {};
            for (let i of userContext.cart) {
                tempObj[i.fixed_price_listing_id] = i.quantity;
            }
            setQuantityState(tempObj);
        };
        fetchProduct();
    }, [userContext.cart]);

    let updateFormState = (e, max) => {
        let val = Number(e.target.value);
        if (val >= 0 && val <= max) {
            setQuantityState({
                ...quantity,
                [e.target.name]: val,
            });
        }
    };

    let updateCart = (e) => {
        let helperFunc = async () => {
            let cartId = e.target.getAttribute("name");
            if (quantity[cartId] === 0) {
                setMessage({ msg: "FAILED: You can't change the cart quantity to 0." });
                return;
            }

            await userContext.updateUser();
            let token = localStorage.getItem("accessToken");
            await axios
                .put(
                    API_URL + "cart/" + cartId,
                    {
                        quantity: quantity[cartId],
                    },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((response) => {
                    setMessage({ msg: response.data.message });
                })
                .catch((e) => {
                    setMessage({ msg: e });
                });
            await userContext.updateCart();
        };

        helperFunc();
    };

    let deleteCart = (e) => {
        let helperFunc = async () => {
            let cartId = e.target.getAttribute("name");
            if (quantity[cartId] === 0) {
                setMessage({ msg: "FAILED: You can't change the cart quantity to 0." });
                return;
            }

            await userContext.updateUser();
            let token = localStorage.getItem("accessToken");
            await axios
                .delete(API_URL + "cart/" + cartId, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setMessage({ msg: response.data.message });
                })
                .catch((e) => {
                    setMessage({ msg: e });
                });
            await userContext.updateCart();
        };

        helperFunc();
    };

    let calculateTotal = () => {
        let sum = 0;
        for (let i of userContext.cart) {
            sum += i.fixedPriceListing.price * i.quantity;
        }
        return sum;
    };

    return (
        <>
            <section className="py-20 bg-light overflow-hidden">
                <div className="container">
                    <div className="p-8 p-lg-20 bg-white">
                        <h2 className="mb-8 mb-md-20">Your cart</h2>
                        <div className="row align-items-center">
                            <div className="col-12 col-xl-8 mb-8 mb-xl-0">
                                <div className="d-none d-lg-flex row">
                                    <div className="col-12 col-lg-4">
                                        <h4 className="mb-6 text-secondary" style={{ fontSize: "16px" }}>
                                            Description
                                        </h4>
                                    </div>
                                    <div className="col-12 col-lg-2">
                                        <h4 className="mb-6 text-secondary" style={{ fontSize: "16px" }}>
                                            Price
                                        </h4>
                                    </div>
                                    <div className="col-12 col-lg-2 text-center">
                                        <h4 className="mb-6 text-secondary" style={{ fontSize: "16px" }}>
                                            Quantity
                                        </h4>
                                    </div>
                                    <div className="col-12 col-lg-1 text-end">
                                        <h4 className="mb-6 text-secondary" style={{ fontSize: "16px" }}>
                                            Subtotal
                                        </h4>
                                    </div>
                                    <div className="col-12 col-lg-3 text-end">
                                        <h4 className="mb-6 text-secondary" style={{ fontSize: "16px" }}>
                                            Update
                                        </h4>
                                    </div>
                                </div>
                                <div className="mb-12 py-6 border-top border-bottom">
                                    {userContext.cart
                                        ? userContext.cart.map((p) => (
                                              <React.Fragment key={p.id}>
                                                  <div className="row align-items-center mb-6 mb-md-3">
                                                      <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-0">
                                                          <div className="row align-items-center">
                                                              <div className="col-12 col-md-4 mb-3">
                                                                  <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "96px", height: "128px" }}>
                                                                      <img className="img-fluid" style={{ objectFit: "contain" }} src={p.fixedPriceListing.art.image_url} alt=""></img>
                                                                  </div>
                                                              </div>
                                                              <div className="col-6">
                                                                  <h3 className="mb-2 lead fw-bold">{p.fixedPriceListing.art.name}</h3>
                                                                  <p className="mb-0 text-secondary">{p.fixedPriceListing.art.name}</p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="d-none d-lg-block col-lg-2">
                                                          <p className="mb-0 lead fw-bold text-info">${Number(p.fixedPriceListing.price).toFixed(2)}</p>
                                                      </div>
                                                      <div className="col-auto col-md-2">
                                                          <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">
                                                              <input
                                                                  className="form-control px-2 py-4 text-center text-md-end border-0"
                                                                  style={{ width: "48px" }}
                                                                  type="number"
                                                                  value={quantity[p.fixed_price_listing_id]}
                                                                  name={p.fixed_price_listing_id}
                                                                  onChange={(e) => {
                                                                      updateFormState(e, p.fixedPriceListing.share);
                                                                  }}
                                                              ></input>
                                                          </div>
                                                      </div>
                                                      <div className="col-auto col-md-1 text-end">
                                                          <p className="lead fw-bold text-info">${(p.fixedPriceListing.price * p.quantity).toFixed(2)}</p>
                                                      </div>
                                                      <div className="col-auto btn btn-success" name={p.fixed_price_listing_id} onClick={updateCart} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                          Update
                                                      </div>
                                                      <div className="col-auto btn btn-danger" name={p.fixed_price_listing_id} onClick={deleteCart} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                          Delete
                                                      </div>
                                                  </div>
                                              </React.Fragment>
                                          ))
                                        : ""}
                                </div>
                            </div>
                            <div className="col-12 col-xl-4">
                                <div className="p-6 p-md-12 bg-info">
                                    <div className="d-flex mb-10 justify-content-between align-items-center">
                                        <span className="lead fw-bold text-white">Order total</span>
                                        <span className="lead fw-bold text-white">${calculateTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="btn btn-primary w-100 text-uppercase" href="#">
                                        Go to Checkout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex justify-content-between">
                            {JSON.stringify(message.msg)}
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
