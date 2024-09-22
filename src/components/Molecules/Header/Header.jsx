import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "../../Atoms/Button/Button";
import logo from "../../../assets/logo.svg"; // Importa la imagen
import "./header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount, title }) => (
  <header>
    <div className="fs-header">
      <div>
        <Link to="/">
          <img
            className="fs--logo"
            src={logo} // Usa la variable importada
            alt="Fluid System Logo"
          />
        </Link>
        {title && <h1>{title}</h1>}{" "}
        {/* Muestra el h1 solo si title está presente */}
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
  title: PropTypes.string, // Prop opcional para el título
};

Header.defaultProps = {
  user: null,
  title: "", // Valor por defecto para el título
};
