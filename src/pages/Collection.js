import React, { useState, useEffect } from "react";
import axios from "axios";
let API_URL = "http://localhost:4000/api/";

export default function Collection() {
    // Artwork list
    const [artState, setArtState] = useState({
        art: "",
    });

    useEffect(() => {
        const helperFunction = async () => {
            let response = await axios.get(API_URL + "arts");
            setArtState({ art: response.data });
        };

        helperFunction();
    }, []);

    // Button Trigger
    const [formatState, setFormatState] = useState({
        formatAmazon: "",
        formatOpensea: "d-none",
        buttonAmazon: "bg-white",
        buttonOpensea: "bg-transparent",
    });

    const updateFormatTrigger = (e) => {
        if (formatState.formatAmazon) {
            console.log(" Current state is Amazon. Changing to opensea");
            setFormatState({
                formatAmazon: "",
                formatOpensea: "d-none",
                buttonAmazon: "bg-transparent",
                buttonOpensea: "bg-white",
            });
        } else {
            console.log(" Current state is opensea. Changing to amazon");
            setFormatState({
                formatAmazon: "d-none",
                formatOpensea: "",
                buttonAmazon: "bg-white",
                buttonOpensea: "bg-transparent",
            });
        }
    };

    return (
        <React.Fragment>
            <div className="">
                <section className="py-20 bg-light overflow-hidden">
                    <div className="container">
                        {/* The top most text "Found 125 results for Sports" */}
                        <div className="debug row mb-20 align-items-center justify-content-between">
                            <div className="col-12 col-lg-auto mb-12 mb-xl-0">
                                <h2 className="font-heading">
                                    <span>Found 125 results</span>
                                    <div className="position-relative text-info text-underline">Sports</div>
                                </h2>
                            </div>
                            <div className="col-12 col-lg-auto row align-items-center">
                                <div className="col-12 col-sm-auto mb-4 mb-sm-0 me-5">
                                    <select className="form-select ps-8 py-4 bg-white lead border" name="" id="">
                                        <option value="1">Sort by newest</option>
                                        <option value="2">Sort by price</option>
                                        <option value="3">Sort by most popular</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-auto">
                                    <div className={"debug btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonAmazon} onClick={updateFormatTrigger}>
                                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="8" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="16" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect y="10" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="8" y="10" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="16" y="10" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect y="20" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="8" y="20" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                            <rect x="16" y="20" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                                        </svg>
                                    </div>
                                    <div className={"debug btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonOpensea} onClick={updateFormatTrigger}>
                                        <svg className="text-gray-200 group-hover:text-blue-300" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="8" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="16" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="24" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="8" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="16" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="24" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect y="20" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="8" y="20" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="16" y="20" width="4" height="4" rx="2" fill="currentColor"></rect>
                                            <rect x="24" y="20" width="4" height="4" rx="2" fill="currentColor"></rect>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* The parent div */}
                        <div className="debug row mb-24">
                            {/* Largest Side Category Card  */}
                            <div className="debug col-12 d-lg-none">
                                <div className="row">
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-2 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Category</div>
                                            <ul className="d-none list-unstyled text-start mt-6 mb-0">
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">New in</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Activewear</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Hoodies &amp; Sweatshirts</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Jackets</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Multipacks</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Bags</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Sports</div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none">Gifts</div>
                                                </li>
                                                <li>
                                                    <div className="link-dark text-decoration-none">Notes</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-2 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Colors</div>
                                            <div className="d-none mt-6 d-flex flex-wrap">
                                                <button className="btn me-4 mb-2 rounded-circle border border-info p-1">
                                                    <div className="rounded-circle bg-info p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border p-1">
                                                    <div className="rounded-circle bg-primary p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border p-1">
                                                    <div className="rounded-circle bg-secondary p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border p-1">
                                                    <div className="rounded-circle bg-danger p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                                    <div className="rounded-circle bg-success p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                                    <div className="rounded-circle bg-danger-light p-3"></div>
                                                </button>
                                                <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                                    <div className="rounded-circle bg-warning p-3"></div>
                                                </button>
                                                <button className="btn mb-2 rounded-circle border border-transparent p-1">
                                                    <div className="rounded-circle bg-light p-3"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-4 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Price</div>
                                            <div className="d-none mt-6">
                                                <input className="form-range mb-4" type="range" min="1" max="100" value="50" style={{ height: "4px" }}></input>
                                                <div className="d-flex justify-content-between">
                                                    <span className="d-inline-block h6 text-info">$0</span>
                                                    <span className="d-inline-block h6 text-info">$289</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-4 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Size</div>
                                            <div className="d-none mt-6 row justify-content-center mb-n2">
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">36</button>
                                                <button className="position-relative mb-2 mx-1 btn col-4 py-1 border fw-normal">
                                                    37
                                                    <span className="position-absolute bottom-0 start-0 w-100 pt-1 bg-info"></span>
                                                </button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">38</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">39</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">40</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">41</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">42</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">43</button>
                                                <button className="mb-2 btn col-4 py-1 mx-1 border fw-normal">44</button>
                                                <div className="col-12 mt-4 text-end">
                                                    <div className="link-info text-decoration-none">
                                                        <span className="me-2">Show all</span>
                                                        <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                                                                fill="#3C60D9"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-4 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Location</div>
                                            <div className="d-none mt-6">
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox"></input>
                                                    <label className="fomr-check-label">Standard</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"></input>
                                                    <label className="fomr-check-label">Next day (yes!)</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-4 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold">Location</div>
                                            <input className="d-none form-control mt-6 px-8 py-4 bg-white border" type="serach" placeholder="City"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Smallest Top Category Card */}
                            <div className="debug d-none d-lg-block col-3 px-3">
                                <div className="mb-6 py-10 px-12 bg-light-light">
                                    <h3 className="mb-8 h5">Category</h3>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">New in</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Activewear</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Hoodies &amp; Sweatshirts</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Jackets</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Multipacks</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Bags</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Sports</div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none">Gifts</div>
                                        </li>
                                        <li>
                                            <div className="link-dark h6 fw-normal text-decoration-none">Notes</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-6 py-10 px-12 bg-light-light">
                                    <h3 className="mb-8 h5">Colors</h3>
                                    <div className="d-flex flex-wrap">
                                        <button className="btn me-4 mb-2 rounded-circle border border-info p-1">
                                            <div className="rounded-circle bg-info p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border p-1">
                                            <div className="rounded-circle bg-primary p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border p-1">
                                            <div className="rounded-circle bg-secondary p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border p-1">
                                            <div className="rounded-circle bg-danger p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                            <div className="rounded-circle bg-success p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                            <div className="rounded-circle bg-danger-light p-3"></div>
                                        </button>
                                        <button className="btn me-4 mb-2 rounded-circle border border-transparent p-1">
                                            <div className="rounded-circle bg-warning p-3"></div>
                                        </button>
                                        <button className="btn mb-2 rounded-circle border border-transparent p-1">
                                            <div className="rounded-circle bg-light p-3"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-6 py-10 px-12 bg-light-light">
                                    <h3 className="mb-8 h5">Price</h3>
                                    <div>
                                        <input className="form-range mb-4" type="range" min="1" max="100" value="50" style={{ height: "4px" }}></input>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-inline-block h6 text-info">$0</span>
                                            <span className="d-inline-block h6 text-info">$289</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 py-10 py-12 ps-12 pe-6 bg-light-light">
                                    <h3 className="mb-8 h5">Size</h3>
                                    <div className="flex flex-wrap mb-n2">
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            36
                                        </button>
                                        <button className="position-relative mb-2 me-1 btn py-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            37
                                            <span className="position-absolute bottom-0 start-0 w-100 pt-1 bg-info"></span>
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            38
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            39
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            40
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            41
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            42
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            43
                                        </button>
                                        <button className="mb-2 btn py-1 me-1 px-0 border fw-normal" style={{ width: "64px" }}>
                                            44
                                        </button>
                                    </div>
                                    <div className="mt-4 text-end">
                                        <div className="link-dark text-decoration-none text-info">
                                            <span className="me-2">Show all</span>
                                            <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z" fill="#3C60D9"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 py-10 px-12 bg-light-light">
                                    <h3 className="mb-6 h5">Location</h3>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox"></input>
                                        <label className="fomr-check-label">Standard</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"></input>
                                        <label className="fomr-check-label">Next day (yes!)</label>
                                    </div>
                                </div>
                                <div className="mb-6 py-10 px-12 bg-light-light">
                                    <h3 className="mb-6 h5">Location</h3>
                                    <input className="form-control mt-6 px-8 py-4 bg-white border" type="serach" placeholder="City"></input>
                                </div>
                            </div>
                            {/* Amazon Styled Cards */}
                            <div className={"debug col-12 col-lg-9 px-3 " + formatState.formatAmazon}>
                                <div>
                                    {artState.art ? (
                                        artState.art.map((p) => (
                                            <div className="position-relative mb-6 bg-light-light">
                                                <div className="row align-items-center px-8 px-md-20 py-12">
                                                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                        <div>
                                                            <img className="mx-auto mx-md-0 img-fluid" style={{ width: "160px", height: "208px", objectFit: "contain" }} src={p.image_url} alt=""></img>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-9">
                                                        <div className="link-dark text-decoration-none d-block mb-8">
                                                            <h3 className="mb-2 lead fw-bold">
                                                                {p.name}, {p.year}
                                                            </h3>
                                                            <p className="mb-6 lead fw-bold text-info">
                                                                <span>{p.artist.first_name + " " + p.artist.last_name}</span>
                                                            </p>
                                                            <p className="mw-md text-secondary">{p.description}</p>
                                                        </div>
                                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                            <div className="mb-4 mb-md-0 me-md-4 btn btn-primary">View Details</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            {/* Opensea Styled Cards */}
                            <div className={"debug col-12 col-lg-9 px-3 " + formatState.formatOpensea}>
                                <div className="row">
                                    {artState.art ? (
                                        artState.art.map((p) => (
                                            <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                                <div className="p-6 bg-light-light">
                                                    {/* <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span> */}
                                                    <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2">
                                                        <img className="mb-5 mx-auto img-fluid w-100" style={{ height: "224px", objectFit: "contain" }} src={p.image_url} alt=""></img>
                                                        <h3 className="mb-2 lead fw-bold">
                                                            {p.name}, {p.year}
                                                        </h3>
                                                        <p className="h6 text-info">
                                                            <span>{p.artist.first_name + " " + p.artist.last_name}</span>
                                                        </p>
                                                    </div>
                                                    <div className="btn-primary ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3">Details</div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
