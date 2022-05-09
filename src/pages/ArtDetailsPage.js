import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import axios from "axios";
// Routes
import Description from "./artdetails/Description.js";
import Listing from "./artdetails/Listing.js";
import Ownership from "./artdetails/Ownership.js";
import Vault from "./artdetails/Vault.js";

let API_URL = "http://localhost:4000/api/";

export default function ArtDetailsPage(props) {
    const { artID } = useParams();
    const [details, setDetailsState] = useState({ art: "", artist: "", vault: "", tags: "", medias: "" });

    useEffect(() => {
        const fetchProduct = async () => {
            let response = await axios.get(API_URL + "arts/" + artID);
            setDetailsState({ art: response.data, artist: response.data.artist, medias: response.data.medias, vault: response.data.vault, tags: response.data.tags });
        };
        fetchProduct();
    }, [artID]);

    return (
        <React.Fragment>
            <section className="py-20 overflow-hidden">
                <div className="container">
                    <div className="row mb-24">
                        {/* Images  */}
                        <div className="col-12 col-md-6 mb-8 mb-md-0">
                            <div className="position-relative mb-10">
                                <img className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} src={details.art.image_url} alt=""></img>
                                <h5 className="mt-5">Medias</h5>
                                {details.medias ? details.medias.map((p) => <span className="badge rounded-pill bg-success mt-5">{p.name}</span>) : ""}
                                <h5 className="mt-5">Tags</h5>
                                {details.tags ? details.tags.map((p) => <span className="badge rounded-pill bg-danger mt-5">{p.name}</span>) : ""}
                            </div>
                        </div>
                        {/* Right Side Details  */}
                        <div className="col-12 col-md-6">
                            <div className="ps-lg-20">
                                <div className="mb-10 pb-10 border-bottom">
                                    <span className="h5 text-secondary">{details.art.year}</span>
                                    <h1 className="mt-2 mb-6 mw-xl">{details.art.name}</h1>
                                    <p className="d-inline-block mb-8 h5 text-info">
                                        <span>{details.artist["first_name"] + " " + details.artist["last_name"]}</span>
                                    </p>
                                    <p className="mw-md text-secondary">{details.art.description}</p>
                                </div>
                                <div className="d-flex mb-12">
                                    <div>
                                        <span className="d-block mb-4 fw-bold text-secondary text-uppercase">TOTAL SHARES</span>
                                        <div className="border ps-6 pe-10 py-4 fw-bold text-secondary">{details.art.total_share}</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="me-8 mb-0 text-secondary fw-bold text-uppercase">SHARE IT</p>
                                    <div className="me-1" href="#" style={{ width: "32px", height: "32px" }}>
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="25" cy="25" r="25" fill="#5475E5" />
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M33.0064 17H16.9928C16.4444 17.0003 15.9999 17.4451 16 17.9936V34.0072C16.0003 34.5556 16.4451 35.0001 16.9936 35H33.0064C33.5551 35.0001 33.9999 34.5555 34 34.0068C34 34.0067 34 34.0066 34 34.0064V17.9928C33.9997 17.4444 33.5549 16.9999 33.0064 17Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M28.4277 35.0003V28.0394H30.7744L31.126 25.3148H28.4277V23.5795C28.4277 22.7924 28.6462 22.2562 29.7748 22.2562H31.2051V19.8259C30.9562 19.7928 30.1025 19.7188 29.109 19.7188C27.0348 19.7188 25.6152 20.9844 25.6152 23.3096V25.3148H23.2773V28.0394H25.6152V35.0003H28.4277Z"
                                                    fill="#5475E5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="18" height="18" fill="white" transform="translate(16 17)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="me-1" href="#" style={{ width: "32px", height: "32px" }}>
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="25" cy="25" r="25" fill="#A692FF" />
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M33.982 21.292C33.9398 20.3356 33.7852 19.6781 33.5636 19.1084C33.3351 18.5036 32.9834 17.9621 32.5227 17.512C32.0726 17.0549 31.5276 16.6997 30.9298 16.4747C30.3568 16.2531 29.7027 16.0985 28.7463 16.0563C27.7827 16.0106 27.4768 16 25.033 16C22.5892 16 22.2833 16.0106 21.3233 16.0527C20.3669 16.0949 19.7094 16.2497 19.1398 16.4711C18.5348 16.6997 17.9934 17.0513 17.5433 17.512C17.0861 17.9621 16.7311 18.5072 16.506 19.1049C16.2844 19.6781 16.1297 20.3321 16.0876 21.2885C16.0418 22.252 16.0312 22.5579 16.0312 25.0018C16.0312 27.4456 16.0418 27.7515 16.084 28.7115C16.1262 29.6679 16.281 30.3254 16.5025 30.8952C16.7311 31.4999 17.0861 32.0414 17.5433 32.4915C17.9934 32.9486 18.5384 33.3038 19.1362 33.5288C19.7094 33.7504 20.3633 33.905 21.3199 33.9472C22.2797 33.9895 22.5857 33.9999 25.0296 33.9999C27.4734 33.9999 27.7793 33.9895 28.7393 33.9472C29.6957 33.905 30.3532 33.7504 30.9228 33.5288C32.1325 33.0611 33.0889 32.1047 33.5566 30.8952C33.778 30.322 33.9328 29.6679 33.975 28.7115C34.0172 27.7515 34.0278 27.4456 34.0278 25.0018C34.0278 22.5579 34.0242 22.252 33.982 21.292ZM32.3611 28.6411C32.3223 29.5202 32.1747 29.9949 32.0516 30.3114C31.7492 31.0956 31.1268 31.7179 30.3426 32.0204C30.0262 32.1434 29.548 32.2911 28.6724 32.3297C27.723 32.372 27.4382 32.3824 25.0366 32.3824C22.6349 32.3824 22.3466 32.372 21.4006 32.3297C20.5216 32.2911 20.0468 32.1434 19.7304 32.0204C19.3402 31.8761 18.985 31.6476 18.6966 31.3487C18.3978 31.0568 18.1692 30.7052 18.025 30.315C17.9019 29.9985 17.7542 29.5202 17.7156 28.6447C17.6733 27.6953 17.6629 27.4104 17.6629 25.0088C17.6629 22.6071 17.6733 22.3188 17.7156 21.373C17.7542 20.4939 17.9019 20.0192 18.025 19.7027C18.1692 19.3123 18.3978 18.9573 18.7002 18.6688C18.992 18.3699 19.3436 18.1414 19.734 17.9973C20.0504 17.8742 20.5287 17.7266 21.4042 17.6878C22.3536 17.6457 22.6385 17.6351 25.04 17.6351C27.4453 17.6351 27.73 17.6457 28.676 17.6878C29.555 17.7266 30.0297 17.8742 30.3462 17.9973C30.7364 18.1414 31.0916 18.3699 31.3799 18.6688C31.6788 18.9607 31.9074 19.3123 32.0516 19.7027C32.1747 20.0192 32.3223 20.4973 32.3611 21.373C32.4032 22.3224 32.4138 22.6071 32.4138 25.0088C32.4138 27.4104 32.4032 27.6917 32.3611 28.6411Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M25.0341 20.3779C22.4813 20.3779 20.4102 22.449 20.4102 25.0019C20.4102 27.5548 22.4813 29.6258 25.0341 29.6258C27.587 29.6258 29.6581 27.5548 29.6581 25.0019C29.6581 22.449 27.587 20.3779 25.0341 20.3779ZM25.0341 28.0013C23.378 28.0013 22.0347 26.6581 22.0347 25.0019C22.0347 23.3456 23.378 22.0024 25.0341 22.0024C26.6903 22.0024 28.0335 23.3456 28.0335 25.0019C28.0335 26.6581 26.6903 28.0013 25.0341 28.0013Z"
                                                    fill="white"
                                                />
                                                <path d="M30.9189 20.1952C30.9189 20.7913 30.4355 21.2747 29.8392 21.2747C29.2431 21.2747 28.7598 20.7913 28.7598 20.1952C28.7598 19.5989 29.2431 19.1157 29.8392 19.1157C30.4355 19.1157 30.9189 19.5989 30.9189 20.1952Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="18" height="18" fill="white" transform="translate(16 16)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div href="#" style={{ width: "32px", height: "32px" }}>
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="25" cy="25" r="25" fill="#69B6FF" />
                                            <path
                                                d="M35 19.4189C34.3306 19.7125 33.6174 19.9071 32.8737 20.0016C33.6388 19.5449 34.2226 18.8271 34.4971 17.962C33.7839 18.3872 32.9964 18.6876 32.1571 18.8553C31.4799 18.1341 30.5146 17.6875 29.4616 17.6875C27.4186 17.6875 25.7739 19.3458 25.7739 21.3786C25.7739 21.6711 25.7986 21.9524 25.8594 22.2201C22.7915 22.0705 20.0769 20.6001 18.2533 18.3603C17.9349 18.9126 17.7481 19.5449 17.7481 20.2255C17.7481 21.5035 18.4062 22.6364 19.3872 23.2922C18.7944 23.281 18.2127 23.1089 17.72 22.8377C17.72 22.849 17.72 22.8636 17.72 22.8782C17.72 24.6715 18.9991 26.161 20.6765 26.5041C20.3761 26.5863 20.0487 26.6256 19.709 26.6256C19.4727 26.6256 19.2342 26.6121 19.0104 26.5626C19.4885 28.024 20.8453 29.0984 22.4585 29.1332C21.203 30.1154 19.6089 30.7071 17.8831 30.7071C17.5805 30.7071 17.2902 30.6936 17 30.6565C18.6346 31.7106 20.5719 32.3125 22.661 32.3125C29.4515 32.3125 33.164 26.6875 33.164 21.8117C33.164 21.6486 33.1584 21.4911 33.1505 21.3348C33.8829 20.815 34.4982 20.1659 35 19.4189Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Details  */}
                    <div>
                        <div className="row mb-8 border-bottom border-2">
                            <div className="col-6 col-md-auto">
                                <Link to={"/art/" + details.art.id + "/"} className="btn text-secondary">
                                    Listings
                                </Link>
                            </div>
                            <div className="col-6 col-md-auto">
                                <Link to={"/art/" + details.art.id + "/description"} className="btn text-secondary">
                                    Description
                                </Link>
                            </div>

                            <div className="col-6 col-md-auto">
                                <Link to={"/art/" + details.art.id + "/ownership"} className="btn text-secondary">
                                    Ownership List
                                </Link>
                            </div>
                            <div className="col-6 col-md-auto">
                                <Link to={"/art/" + details.art.id + "/vault"} className="btn text-secondary">
                                    Vault Details
                                </Link>
                            </div>
                        </div>
                        <Routes>
                            {/* Listing route */}
                            <Route path="/" element={<Listing />} />
                            {/* Description Route */}
                            <Route path="/description" element={<Description artist={details.artist} description={details.art.description} />} />
                            {/* Ownership route */}
                            <Route path="/ownership" element={<Ownership />} />
                            {/* Vault route */}
                            <Route path="/vault" element={<Vault vault={details.vault}/>} />
                        </Routes>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
