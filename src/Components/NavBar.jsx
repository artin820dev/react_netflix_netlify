import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="navbar-container ">
        <Link to="/">
          <h1 className="netflix-logo">NETFLIX</h1>
        </Link>
        {user ? (
          <div>
            <button onClick={handleLogOut} className="button">
              LogOut
            </button>

            <Link to="account">
              <button className="button button--red">Account</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="SignIn">
              <button className="button">Sign In</button>
            </Link>

            <Link to="signup">
              <button className="button button--red">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
