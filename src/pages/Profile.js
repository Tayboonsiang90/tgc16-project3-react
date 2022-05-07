import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";

export default function Profile() {
    let userContext = useContext(UserContext);

    useEffect(() => {
        userContext.updateUser();
    }, []);

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
                                    <h4 className="fw-bold mb-0"></h4>
                                    <p className="text-muted"></p>
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
                <h2 className="mt-2">Your Current Art Holdings </h2>
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
                                          <td>Details</td>
                                      </tr>
                                  ))
                                : ""}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
