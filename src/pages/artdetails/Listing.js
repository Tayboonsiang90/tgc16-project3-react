import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

let API_URL = "http://localhost:4000/api/";

export default function Listing(props) {
    const [details, setDetailsState] = useState({ listings: "" });
    const [quantity, setQuantityState] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            let response = await axios.get(API_URL + "listings/fixed_price_listings/art/" + props.id);
            setDetailsState({ listings: response.data });
            let tempObj = {};
            for (let i of response.data) {
                tempObj[i.id] = 0;
            }
            setQuantityState(tempObj);
        };
        fetchProduct();
    }, [props.id]);

    let updateFormState = (e, max) => {
        let val = Number(e.target.value);
        console.log(max)
        if (val >= 0 && val <= max) {
            setQuantityState({
                ...quantity,
                [e.target.name]: Number(e.target.value),
            });
        }
    };

    let addToCart = () => {};

    return (
        <React.Fragment>
            <h1>Listings</h1>
            <div className="bg-white px-4 pb-3 rounded shadow-sm">
                <table className="table table-responsive">
                    <thead>
                        <tr className="text-end">
                            <th>#</th>
                            <th>Shares for Sale</th>
                            <th>Price Per Share</th>
                            <th>Total Listing Value</th>
                            <th>Indicative Value for the Art</th>
                            <th>Seller</th>
                            <th>Date Posted</th>
                            <th>Units to Buy</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.listings ? (
                            details.listings.map((p) => (
                                <React.Fragment key={p.id}>
                                    <tr className="text-end">
                                        <td>{p.id}</td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2 ">{p.share.toLocaleString()}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2">${Number(p.price).toFixed(2).toLocaleString()}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2">${(p.price * p.share).toFixed(2).toLocaleString()}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2">${(p.price * props.ttlShares).toLocaleString()}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2">{p.user.username}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 fw-bold me-2">{new Date(p.date_created).toLocaleString()}</p>
                                        </td>
                                        <td>
                                            <div className="col-auto col-md-2">
                                                <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">
                                                    <button className="btn px-0 py-2">
                                                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.35">
                                                                <rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                    <input
                                                        className="form-control px-2 py-4 text-center text-md-end border-0"
                                                        style={{ width: "48px" }}
                                                        value={quantity[p.id]}
                                                        name={p.id}
                                                        type="number"
                                                        placeholder="0"
                                                        onChange={(e) => {
                                                            updateFormState(e, p.share);
                                                        }}
                                                    ></input>
                                                    <button className="btn px-0 py-2">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.35">
                                                                <rect x="5" width="2" height="12" fill="currentColor"></rect>
                                                                <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="btn btn-secondary" onClick={addToCart}>
                                                Add To Cart
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
