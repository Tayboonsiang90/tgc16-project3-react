import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
let API_URL = "http://localhost:4000/api/";

export default function Ownership(props) {
    const [owners, setOwnersState] = useState("");

    useEffect(() => {
        console.log("Ownership Use Effect Triggered");
        const fetchOwners = async () => {
            console.log(props.id);
            if (props.id) {
                let response = await axios.get(API_URL + "arts/" + props.id + "/ownership");
                setOwnersState(response.data);
            }
        };
        fetchOwners();
    }, [props.id]);

    return (
        <React.Fragment>
            <h1>Ownership List</h1>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Total Shares Owned</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    {owners
                        ? owners.map((p) => (
                              <tr key={p.id}>
                                  <td>{p.id}</td>
                                  <td className="fw-bold">
                                      <p className="mb-0 fw-bold me-2">{p.username}</p>
                                  </td>
                                  <td>
                                      <p className="mb-0 fw-bold me-2">{p._pivot_total_share}</p>
                                  </td>
                                  <td>
                                      <div className="d-flex align-items-center">
                                          <p className="mb-0 fw-bold me-2">{((p._pivot_total_share / props.ttlShares) * 100).toFixed(1)}%</p>
                                          <div className="progress w-50" style={{ height: "6px" }}>
                                              <div className="progress-bar" role="progressbar" style={{ width: `${(p._pivot_total_share / props.ttlShares) * 100}%` }}></div>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                          ))
                        : ""}
                </tbody>
            </table>
        </React.Fragment>
    );
}
