import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostPage(props) {
    //default value
    const [activePost, setActivePost] = useState({});
    const [activePostId, setActivePostId] = useState(0);

    useEffect(() => {
        const fetchPost = async (postId) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
            setActivePost(response.data);
        };

        fetchPost(activePostId);
    }, [activePostId]);

    return (
        <React.Fragment>
            <h1>Posts</h1>

            <h2> Active Post </h2>
            <input
                type="text"
                value={activePostId}
                name="activePostId"
                onChange={(evt) => {
                    setActivePostId(evt.target.value);
                }}
            />
            <div className="card">
                <div className="card-title">{activePost.title}</div>
                <p>{activePost.body}</p>
            </div>
            <hr />
        </React.Fragment>
    );
}
