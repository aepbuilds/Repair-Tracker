import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = ({ post }) => {
    const converter = new QuillDeltaToHtmlConverter(
        post.content.ops,
        {}
    );

    const contentHTML = converter.convert();

    return (
        <article className="container">
            <h1>{post.title}</h1>
            <p>Vehicle: {post.vehicle}</p>
            <p>Miles: {post.miles}</p>
            <p>Date of Repair: {post.date.substring(0, 15)}</p>
            Notes:
            <div className="content" id="notes" dangerouslySetInnerHTML={{__html: contentHTML}}></div>
        </article>
    );
};

export default Post;