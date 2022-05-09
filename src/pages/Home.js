import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container">
                <section className="py-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex">
                            <div className="my-auto">
                                <h2 className="mb-4 fs-1 fw-bold">Art Gallery - A home for fractionalized art ownership</h2>
                                <p className="mb-4 text-muted lh-lg">
                                    At Art Gallery, we believe fine art ownership can be for everybody, not just for the rich. Our mission is to provide more people with opportunities to invest in the arts easily, and for art owners to unlock the full potential of their artwork by tapping into a
                                    larger liquidity market.
                                </p>
                                <Link to="/collection" className="btn btn-primary">
                                    View the Collections
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0 pt-3 pt-lg-0">
                            <ul className="px-lg-5 list-unstyled">
                                <li className="d-flex mb-5">
                                    <div className="pe-4">
                                        <span className="d-flex align-items-center justify-content-center bg-light text-primary rounded-circle fs-3" style={{ width: "64px", height: "64px" }}>
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">Deposit your Fine Art in our vault</h4>
                                        <p className="text-muted lh-lg">During the deposit process, you will be asked how many shares do you want to generate. Your art will be securely stored in our vault. </p>
                                    </div>
                                </li>
                                <li className="d-flex mb-5">
                                    <div className="pe-4">
                                        <span className="d-flex align-items-center justify-content-center bg-light text-primary rounded-circle fs-3" style={{ width: "64px", height: "64px" }}>
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">Buy and Sell shares of Fine Art</h4>
                                        <p className="text-muted lh-lg">Investors can buy or sell their shares on a direct listing, or our various auctions. </p>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="pe-4">
                                        <span className="d-flex align-items-center justify-content-center bg-light text-primary rounded-circle fs-3" style={{ width: "64px", height: "64px" }}>
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">Redemption of Fine Art</h4>
                                        <p className="text-muted lh-lg">When a stakeholder reaches critical majority of an Art ownership, he can trigger a shareholder vote to buyout the remaining shares. When he has 100% ownership of the Art, he can redeem it from the vault. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
