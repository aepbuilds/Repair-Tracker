import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  return (
    <header className="App-header">
      <ul className="container">
        <li key="home" className="link-home">
          <Link to="/">Repair Tracker</Link>
        </li>
        {user.isAuthenticated ? (
          <>
            <li>
              <Link to="/new">Add New Repair</Link>
            </li>
            <li>
              <button
                className="linkLike"
                onClick={(event) => {
                  event.preventDefault();
                  onLogout();
                }}
              >
                Logout
              </button>
            </li>
            <div className="user-email">
              <p>Logged in as: {user.email}</p>
            </div>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
