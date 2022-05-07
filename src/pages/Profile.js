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
                <p>{JSON.stringify(userContext.user)}</p>
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
                {/* Balances Table  */}
                <div className="bg-white px-4 py-3 rounded shadow-sm">
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
                                                  <p className="mb-0 fw-bold">{p.name}</p>
                                                  <div className="text-decoration-none" href="#">
                                                      www.reactjs.org
                                                  </div>
                                              </div>
                                          </td>
                                          <td className="fw-bold"></td>
                                          <td>
                                              <span className="badge py-2 px-3 bg-primary rounded-pill text-uppercase">Pending</span>
                                          </td>
                                          <td>
                                              <div>
                                                  {/* <img className="img-fluid rounded-circle border border-white" style={{height: 35px; width: 35px; object-fit: cover; object-position: top;" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=60"> */}
                                                  {/* <img className="img-fluid rounded-circle border border-white" style={{height: 35px; width: 35px; object-fit: cover; object-position: top; margin-left: -15px;" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=60"> */}
                                                  {/* <img className="img-fluid rounded-circle border border-white" style={{height: 35px; width: 35px; object-fit: cover; object-position: top; margin-left: -15px;" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=60"> */}
                                                  {/* <img className="img-fluid rounded-circle border border-white" style={{height: 35px; width: 35px; object-fit: cover; object-position: top; margin-left: -15px;" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=60"> */}
                                              </div>
                                          </td>
                                          <td></td>
                                          <td>
                                              <div className="d-flex align-items-center">
                                                  <p className="mb-0 fw-bold me-2">50%</p>
                                                  <div className="progress w-50" style={{ height: "6px" }}>
                                                      <div className="progress-bar" role="progressbar" style={{ width: "50%" }}></div>
                                                  </div>
                                              </div>
                                          </td>
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
