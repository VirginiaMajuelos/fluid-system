import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "../../Atoms/Button/Button";
import logo from "../../../assets/logo.svg";
import "./header.css";

export const Header = ({
  user = null,
  onLogin,
  onLogout,
  onCreateAccount,
  title = "",
}) => (
  <header>
    <div className="fs-header">
      <div className="fs--flex">
        <Link to="/">
          <img className="fs--logo" src={logo} alt="Fluid System Logo" />
        </Link>
        <Link to="/components" className="fs--body fs--link">
          Components
        </Link>
        {title && <h1>{title}</h1>}{" "}
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} children="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} children="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              children="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  title: PropTypes.string,
};
