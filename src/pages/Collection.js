import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
let API_URL = "https://tgc16-project3-express.herokuapp.com/api/";

export default function Collection() {
    // Artwork list
    const [artState, setArtState] = useState({
        art: "",
    });

    const [searchName, setSearchNameState] = useState({
        name: "",
    });

    const [searchYear, setSearchYearState] = useState({
        min_year: "",
        max_year: "",
    });

    useEffect(() => {
        const helperFunction = async () => {
            let response = await axios.get(API_URL + "arts");
            setArtState({ art: response.data });
        };

        helperFunction();
    }, []);

    const updateArts = () => {
        const helperFunction = async () => {
            console.log("Axios call with", searchYear.min_year);
            let response = await axios.get(API_URL + "arts", { params: { name: searchName.name, min_year: searchYear.min_year, max_year: searchYear.max_year } });
            setArtState({ art: response.data });
        };

        helperFunction();
    };

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
                        <div className="row mb-20 align-items-center justify-content-between">
                            <div className="col-12 col-lg-auto mb-12 mb-xl-0">
                                <h2 className="font-heading">
                                    <span>Found {artState.art.length} results</span>
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
                                    <div className={"btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonAmazon} onClick={updateFormatTrigger}>
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
                                    <div className={"btn me-3 h-100 p-4 rounded-2 border " + formatState.buttonOpensea} onClick={updateFormatTrigger}>
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
                        <div className="row mb-24">
                            {/* Smallest Top Category Card */}
                            <div className="d-flex d-lg-block col-12 col-lg-3">
                                <div className="d-lg-block col-6 col-lg-12 px-3">
                                    <div className="mb-6 py-10 px-12 bg-light-light">
                                        <h3 className="mb-6 h5">Search Title</h3>
                                        <input
                                            className="form-control mt-6 px-8 py-4 bg-white border"
                                            value={searchName.name}
                                            onChange={(e) => {
                                                setSearchNameState({ name: e.target.value });
                                                updateArts();
                                            }}
                                            placeholder="Search Title"
                                        ></input>
                                    </div>
                                </div>
                                {/* <div className="d-lg-block col-6 col-lg-12 px-3">
                                    <div className="mb-6 py-10 px-12 bg-light-light">
                                        <h3 className="mb-6 h5">Search Artist</h3>
                                        <input
                                            className="form-control mt-6 px-8 py-4 bg-white border"
                                            value={search.search}
                                            onChange={(e) => {
                                                setSearchState({ search: e.target.value });
                                            }}
                                            placeholder="Search Artist"
                                        ></input>
                                    </div>
                                </div> */}
                                <div className="d-lg-block col-6 col-lg-12 px-3">
                                    <div className="mb-6 py-10 px-12 bg-light-light">
                                        <h3 className="mb-6 h5">Year</h3>
                                        <input
                                            className="form-control mt-6 px-8 py-4 bg-white border"
                                            value={searchYear.min_year}
                                            type="number"
                                            onChange={(e) => {
                                                setSearchYearState({ ...searchYear, min_year: e.target.value });
                                                updateArts();
                                            }}
                                            placeholder=">="
                                        ></input>
                                        <input
                                            className="form-control mt-6 px-8 py-4 bg-white border"
                                            value={searchYear.max_year}
                                            type="number"
                                            onChange={(e) => {
                                                setSearchYearState({ ...searchYear, max_year: e.target.value });
                                                updateArts();
                                            }}
                                            placeholder="<="
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            {/* Amazon Styled Cards */}
                            <div className={"col-12 col-lg-9 px-3 " + formatState.formatAmazon}>
                                <div>
                                    {artState.art ? (
                                        artState.art.map((p) => (
                                            <React.Fragment key={p.id}>
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
                                                                <Link to={"/art/" + p.id + "/listing"} className="mb-4 mb-md-0 me-md-4 btn btn-primary">
                                                                    View Details
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            {/* Opensea Styled Cards */}
                            <div className={"col-12 col-lg-9 px-3 " + formatState.formatOpensea}>
                                <div className="row">
                                    {artState.art ? (
                                        artState.art.map((p) => (
                                            <React.Fragment key={p.id}>
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
                                                        <Link to={"/art/" + p.id + "/listing"} className="btn-primary ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3">
                                                            View Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </React.Fragment>
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
