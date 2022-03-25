import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../context/UserContext";

const Posts = ({ posts, deletePost }) => {
  const { user } = useContext(UserContext);
  return (
    <main className="posts container">
      <h1>Repairs</h1>
      <ol className="repair-list">
        {posts.length < 1 && <li key="empty">No Posts yet!</li>}
        {posts.map((post) => (
          <li className="repair-post" key={post.key}>
            <h2>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            {user.isAuthenticated && (
              <p>
                <Link to={`/edit/${post.slug}`}>Edit</Link>
                {" | "}
                <button className="linkLike" onClick={() => deletePost(post)}>
                  Delete
                </button>
              </p>
            )}
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Posts;
