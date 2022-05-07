import React, { useState } from "react";

export default function Home() {
    const [formatState, setFormatState] = useState({
        formatAmazon: "",
        formatOpensea: "d-none",
        buttonAmazon: "bg-white",
        buttonOpensea: "bg-transparent",
    });

    const updateFormatTrigger = (e) => {
        if (formatState.formatAmazon) {
            setFormatState({
                formatAmazon: "",
                formatOpensea: "d-none",
                buttonAmazon: "bg-transparent",
                buttonOpensea: "bg-white",
            });
        } else {
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
                                    <span>Found 125 results for</span>
                                    <div className="position-relative text-info text-underline" href="#">
                                        Sports
                                    </div>
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
                                    <div className={"debug btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonAmazon} onClick={updateFormatTrigger} href="#">
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
                                    <div className={"debug btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonOpensea} onClick={updateFormatTrigger} href="#">
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
                                            <div className="btn p-0 fw-bold" href="#">
                                                Category
                                            </div>
                                            <ul className="d-none list-unstyled text-start mt-6 mb-0">
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        New in
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Activewear
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Hoodies &amp; Sweatshirts
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Jackets
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Multipacks
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Bags
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Sports
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Gifts
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="link-dark text-decoration-none" href="#">
                                                        Notes
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 px-2 mb-4">
                                        <div className="py-6 px-2 text-center bg-light-light">
                                            <div className="btn p-0 fw-bold" href="#">
                                                Colors
                                            </div>
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
                                            <div className="btn p-0 fw-bold" href="#">
                                                Price
                                            </div>
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
                                            <div className="btn p-0 fw-bold" href="#">
                                                Size
                                            </div>
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
                                                    <div className="link-info text-decoration-none" href="#">
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
                                            <div className="btn p-0 fw-bold" href="#">
                                                Location
                                            </div>
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
                                            <div className="btn p-0 fw-bold" href="#">
                                                Location
                                            </div>
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
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                New in
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Activewear
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Hoodies &amp; Sweatshirts
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Jackets
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Multipacks
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Bags
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Sports
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Gifts
                                            </div>
                                        </li>
                                        <li>
                                            <div className="link-dark h6 fw-normal text-decoration-none" href="#">
                                                Notes
                                            </div>
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
                                        <div className="link-dark text-decoration-none text-info" href="#">
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
                                    <div className="debug position-relative mb-6 bg-light-light">
                                        <span className="position-absolute top-0 start-0 ms-6 mt-6 px-2 py-1 small fw-bold bg-white border border-2 border-danger rounded-pill text-danger">-15%</span>
                                        <div className="row align-items-center px-8 px-md-20 py-12">
                                            <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                <div href="#">{/* <img className="mx-auto mx-md-0 img-fluid" style={{width: "160px", height: "208px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}</div>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="link-dark text-decoration-none d-block mb-8" href="#">
                                                    <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                    <p className="mb-6 lead fw-bold text-info">
                                                        <span>$29.89</span>
                                                        <span className="small text-secondary fw-bold text-decoration-line-through">$33.69</span>
                                                    </p>
                                                    <p className="mw-md text-secondary">Maecenas commodo libero ut molestie dictum sit lorem ipsum. Morbi placerat eros id porttitor sagittis sagna lorem ipsum.</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="mb-4 mb-md-0 me-md-4 btn btn-primary" href="#">
                                                        Add to cart
                                                    </div>
                                                    <div>
                                                        <div className="flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg className="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                                                    fill="black"
                                                                    stroke="black"
                                                                    strokeWidth="0.35"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debug position-relative mb-6 bg-light-light">
                                        <span className="position-absolute top-0 start-0 ms-6 mt-6 px-2 py-1 small fw-bold bg-white border border-2 border-danger rounded-pill text-danger">-15%</span>
                                        <div className="row align-items-center px-8 px-md-20 py-12">
                                            <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                <div href="#">{/* <img className="mx-auto mx-md-0 img-fluid" style={{width: "160px", height: "208px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}</div>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="link-dark text-decoration-none d-block mb-8" href="#">
                                                    <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                    <p className="mb-6 lead fw-bold text-info">
                                                        <span>$14.30</span>
                                                        <span className="small text-secondary fw-bold text-decoration-line-through">$16.90</span>
                                                    </p>
                                                    <p className="mw-md text-secondary">Maecenas commodo libero ut molestie dictum sit lorem ipsum. Morbi placerat eros id porttitor sagittis sagna lorem ipsum.</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="mb-4 mb-md-0 me-md-4 btn btn-primary" href="#">
                                                        Add to cart
                                                    </div>
                                                    <div>
                                                        <div className="flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg className="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                                                    fill="black"
                                                                    stroke="black"
                                                                    strokeWidth="0.35"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debug position-relative mb-6 bg-light-light">
                                        <span className="position-absolute top-0 start-0 ms-6 mt-6 px-2 py-1 small fw-bold bg-white border border-2 border-danger rounded-pill text-danger">-15%</span>
                                        <div className="row align-items-center px-8 px-md-20 py-12">
                                            <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                <div href="#">{/* <img className="mx-auto mx-md-0 img-fluid" style={{width: "160px", height: "208px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}</div>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="link-dark text-decoration-none d-block mb-8" href="#">
                                                    <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                    <p className="mb-6 lead fw-bold text-info">
                                                        <span>$29.89</span>
                                                        <span className="small text-secondary fw-bold text-decoration-line-through">$33.69</span>
                                                    </p>
                                                    <p className="mw-md text-secondary">Maecenas commodo libero ut molestie dictum sit lorem ipsum. Morbi placerat eros id porttitor sagittis sagna lorem ipsum.</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="mb-4 mb-md-0 me-md-4 btn btn-primary" href="#">
                                                        Add to cart
                                                    </div>
                                                    <div>
                                                        <div className="flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg className="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                                                    fill="black"
                                                                    stroke="black"
                                                                    strokeWidth="0.35"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debug position-relative mb-6 bg-light-light">
                                        <span className="position-absolute top-0 start-0 ms-6 mt-6 px-2 py-1 small fw-bold bg-white border border-2 border-danger rounded-pill text-danger">-15%</span>
                                        <div className="row align-items-center px-8 px-md-20 py-12">
                                            <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                <div href="#">{/* <img className="mx-auto mx-md-0 img-fluid" style={{width: "160px", height: "208px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}</div>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="link-dark text-decoration-none d-block mb-8" href="#">
                                                    <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                    <p className="mb-6 lead fw-bold text-info">
                                                        <span>$14.30</span>
                                                        <span className="small text-secondary fw-bold text-decoration-line-through">$16.90</span>
                                                    </p>
                                                    <p className="mw-md text-secondary">Maecenas commodo libero ut molestie dictum sit lorem ipsum. Morbi placerat eros id porttitor sagittis sagna lorem ipsum.</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="mb-4 mb-md-0 me-md-4 btn btn-primary" href="#">
                                                        Add to cart
                                                    </div>
                                                    <div>
                                                        <div className="flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg className="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                                                    fill="black"
                                                                    stroke="black"
                                                                    strokeWidth="0.35"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-6 bg-light-light">
                                        <span className="position-absolute top-0 start-0 ms-6 mt-6 px-2 py-1 small fw-bold bg-white border border-2 border-info rounded-pill text-info">NEW</span>
                                        <div className="row align-items-center px-8 px-md-20 py-12">
                                            <div className="col-12 col-md-3 mb-4 mb-md-0">
                                                <div href="#">{/* <img className="mx-auto mx-md-0 img-fluid" style={{width: "160px", height: "208px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}</div>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="link-dark text-decoration-none d-block mb-8" href="#">
                                                    <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                    <p className="mb-6 lead fw-bold text-info">$29.89</p>
                                                    <p className="mw-md text-secondary">Maecenas commodo libero ut molestie dictum sit lorem ipsum. Morbi placerat eros id porttitor sagittis sagna lorem ipsum.</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="mb-4 mb-md-0 me-md-4 btn btn-primary" href="#">
                                                        Add to cart
                                                    </div>
                                                    <div>
                                                        <div className="flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-2 border" href="#" style={{ width: "56px", height: "56px" }}>
                                                            <svg className="w-6 h-6" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                                                    fill="black"
                                                                    stroke="black"
                                                                    strokeWidth="0.35"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Opensea Styled Cards */}
                            <div className={"debug col-12 col-lg-9 px-3 " + formatState.formatOpensea}>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                <p className="h6 text-info">
                                                    <span>$29.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                <p className="h6 text-info">
                                                    <span>$14.30</span>
                                                    <span className="small text-secondary text-decoration-line-through">$15.90</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/basketball.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Nike basketball ball</h3>
                                                <p className="h6 text-info">
                                                    <span>$24.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/skateboard.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Kiteboard WH-004</h3>
                                                <p className="h6 text-info">
                                                    <span>$199.90</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-10%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/backpack.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Backpack Travel</h3>
                                                <p className="h6 text-info">
                                                    <span>$21.99</span>
                                                    <span className="small text-secondary text-decoration-line-through">$24.00</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                <p className="h6 text-info">
                                                    <span>$14.30</span>
                                                    <span className="small text-secondary text-decoration-line-through">$15.90</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                <p className="h6 text-info">
                                                    <span>$29.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                <p className="h6 text-info">$14.30</p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/basketball.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Nike basketball ball</h3>
                                                <p className="h6 text-info">
                                                    <span>$34.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/skateboard.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Kiteboard WH-004</h3>
                                                <p className="h6 text-info">$199.90</p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/backpack.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Backpack Travel</h3>
                                                <p className="h6 text-info">
                                                    <span>$21.99</span>
                                                    <span className="small text-secondary text-decoration-line-through">$24.00</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                <p className="h6 text-info">
                                                    <span>$14.30</span>
                                                    <span className="small text-secondary text-decoration-line-through">$15.90</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/waterbottle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">BRILE water filter</h3>
                                                <p className="h6 text-info">
                                                    <span>$29.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/cycle.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Bicycle S20</h3>
                                                <p className="h6 text-info">
                                                    <span>$14.30</span>
                                                    <span className="small text-secondary text-decoration-line-through">$15.90</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 px-3 mb-8">
                                        <div className="p-6 bg-light-light">
                                            <span className="badge bg-white border border-2 border-danger rounded-pill fw-bold text-danger">-15%</span>
                                            <div className="link-dark text-decoration-none d-block px-6 mt-6 mb-2" href="#">
                                                {/* <img className="mb-5 mx-auto img-fluid w-100" style={{height: 224px; object-fit: contain;" src="yofte-assets/images/basketball.png" alt=""> */}
                                                <h3 className="mb-2 lead fw-bold">Nike basketball ball</h3>
                                                <p className="h6 text-info">
                                                    <span>$34.89</span>
                                                    <span className="small text-secondary text-decoration-line-through">$33.69</span>
                                                </p>
                                            </div>
                                            <div className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="#" style={{ width: "48px", height: "48px" }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                                                    <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
