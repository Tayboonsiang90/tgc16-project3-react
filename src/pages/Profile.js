import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";
import axios from "axios";
let API_URL = "http://localhost:4000/api/";

export default function Profile() {
    let userContext = useContext(UserContext);

    const [listings, setListingsState] = useState("");
    const [message, setMessage] = useState({
        msg: "",
    });
    const [updateModal, setUpdateModal] = useState({
        price: 0,
        share: 0,
        id: 0,
    });

    let updateFormState = (e) => {
        let val = Number(e.target.value);
        setUpdateModal({
            ...updateModal,
            [e.target.name]: val,
        });
    };

    useEffect(() => {
        const helperFunc = async () => {
            await userContext.updateUser();
            let token = localStorage.getItem("accessToken");
            let response = await axios.get(API_URL + "listings/fixed_price_listings", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setListingsState(response.data);
        };
        helperFunc();
    }, []);

    let updateListing = async (e) => {
        userContext.updateUser();
        let token = localStorage.getItem("accessToken");
        await axios
            .put(
                API_URL + "listings/fixed_price_listings/" + updateModal.id,
                {
                    share: updateModal.share,
                    price: updateModal.price,
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
        const helperFunc = async () => {
            let response = await axios.get(API_URL + "listings/fixed_price_listings", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setListingsState(response.data);
        };
        helperFunc();
    };

    let deleteListing = async (e) => {
        userContext.updateUser();
        let token = localStorage.getItem("accessToken");
        await axios
            .delete(API_URL + "listings/fixed_price_listings/" + e, {
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
        const helperFunc = async () => {
            let response = await axios.get(API_URL + "listings/fixed_price_listings", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setListingsState(response.data);
        };
        helperFunc();
    };

    return (
        <>
            <section className="container">
                {/* <p>{JSON.stringify(userContext.user)}</p> */}
                {/* Welcome Message  */}
                <h1 className="mt-8">Welcome back, {userContext.user.username} </h1>
                {/* Information Dashboard  */}
                <div className="py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="fw-bold mb-0">{new Date(userContext.user.date_created).toLocaleDateString()}</h4>
                                    <p className="text-muted">Date Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="fw-bold mb-0">{userContext.user ? userContext.user.arts.length : 0}</h4>
                                    <p className="text-muted">Art Owned Currently</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="fw-bold mb-0">{listings ? listings.length : 0}</h4>
                                    <p className="text-muted">Listings Posted</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="fw-bold mb-0"></h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Welcome Message  */}
                <h2 className="mt-2">Your Art Holdings </h2>
                {/* Balances Table  */}
                <div className="bg-white px-4 pb-3 rounded shadow-sm">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Art</th>
                                <th>Preview</th>
                                <th>Shares Owned</th>
                                <th>Shares In Order</th>
                                <th>Shares Available</th>
                                <th>% of Total Shares Owned</th>
                                <th>Details</th>
                                <th>Sell your Shares</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userContext.user
                                ? userContext.user.arts.map((p) => (
                                      <tr key={p.id}>
                                          <td>{p.id}</td>
                                          <td className="d-flex align-items-center">
                                              {/* <img className="img-fluid" src="metis-assets/logos/react.svg" alt=""> */}
                                              <div className="ps-3">
                                                  <p className="mb-0 fw-bold">
                                                      {p.name}, {p.year}
                                                  </p>
                                                  <div className="text-decoration-none"></div>
                                              </div>
                                          </td>
                                          <td className="fw-bold">
                                              <img className="img-fluid img-thumbnail" src={`${p.image_url}`} alt="Art"></img>
                                          </td>
                                          <td>
                                              <p className="mb-0 fw-bold me-2">{p._pivot_total_share}</p>
                                          </td>
                                          <td>
                                              <p className="mb-0 fw-bold me-2">{p._pivot_share_in_order}</p>
                                          </td>
                                          <td>
                                              <p className="mb-0 fw-bold me-2">{p._pivot_total_share - p._pivot_share_in_order}</p>
                                          </td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <p className="mb-0 fw-bold me-2">{((p._pivot_total_share / p.total_share) * 100).toFixed(1)}%</p>
                                                  <div className="progress w-50" style={{ height: "6px" }}>
                                                      <div className="progress-bar" role="progressbar" style={{ width: `${(p._pivot_total_share / p.total_share) * 100}%` }}></div>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>
                                              <Link to={"/art/" + p.id}>Details</Link>
                                          </td>
                                          <td>
                                              <Link to={"/art/" + p.id}>Create Listing</Link>
                                          </td>
                                      </tr>
                                  ))
                                : ""}
                        </tbody>
                    </table>
                </div>
                <h2 className="mt-2">Your Current Listings </h2>
                {/* Listings Table  */}
                <div className="bg-white px-4 pb-3 rounded shadow-sm">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Art</th>
                                <th>Preview</th>
                                <th>Shares Listed</th>
                                <th>Price Per Share</th>
                                <th>Date Created</th>
                                <th>Update Listing</th>
                                <th>Cancel Listing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings
                                ? listings.map((p) => (
                                      <>
                                          <tr key={p.id}>
                                              <td>{p.id}</td>
                                              <td className="d-flex align-items-center">
                                                  <div className="ps-3">
                                                      <p className="mb-0 fw-bold">
                                                          {p.art.name}, {p.art.year}
                                                      </p>
                                                      <div className="text-decoration-none"></div>
                                                  </div>
                                              </td>
                                              <td className="fw-bold">
                                                  <img className="img-fluid img-thumbnail" src={`${p.art.image_url}`} alt="Art"></img>
                                              </td>
                                              <td>
                                                  <p className="mb-0 fw-bold me-2">{p.share}</p>
                                              </td>
                                              <td>
                                                  <p className="mb-0 fw-bold me-2">${p.price}</p>
                                              </td>
                                              <td>
                                                  <p className="mb-0 fw-bold me-2">{new Date(p.date_created).toLocaleDateString()}</p>
                                              </td>
                                              <td>
                                                  <div
                                                      className="btn btn-secondary"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#updateModal"
                                                      onClick={() => {
                                                          setUpdateModal({
                                                              price: p.price,
                                                              share: p.share,
                                                              id: p.id,
                                                          });
                                                      }}
                                                  >
                                                      Update Listing
                                                  </div>
                                              </td>
                                              <td>
                                                  <div
                                                      className="btn btn-secondary"
                                                      onClick={() => {
                                                          deleteListing(p.id);
                                                      }}
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#deleteModal"
                                                  >
                                                      Cancel
                                                  </div>
                                              </td>
                                          </tr>
                                      </>
                                  ))
                                : ""}
                        </tbody>
                    </table>
                </div>
            </section>
            <div className="modal fade" id="deleteModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex justify-content-between">
                            {JSON.stringify(message.msg)}
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="updateModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex justify-content-between">
                            Shares Listed
                            <input
                                className="form-control px-2 py-4 text-center text-md-end border-0"
                                style={{ width: "135px" }}
                                value={updateModal.share}
                                name="share"
                                type="number"
                                onChange={(e) => {
                                    updateFormState(e);
                                }}
                            ></input>
                            Price Per Share
                            <input
                                className="form-control px-2 py-4 text-center text-md-end border-0"
                                style={{ width: "135px" }}
                                value={updateModal.price}
                                name="price"
                                type="number"
                                onChange={(e) => {
                                    updateFormState(e);
                                }}
                            ></input>
                            <div className="btn btn-secondary" onClick={updateListing}>
                                Update
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
