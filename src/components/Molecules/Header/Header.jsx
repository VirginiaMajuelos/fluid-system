import React from "react";
import { useSidebar } from "@context/SideBarContext";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "@assets/logo.svg";
import "./header.css";

export const Header = ({ title = "" }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header>
      <div className="fs-header">
        <div className="fs-flex">
          <Link to="/">
            <img className="fs-logo" src={logo} alt="Fluid System Logo" />
          </Link>
          <Link to="/components" className="fs-body fs-link">
            Components
          </Link>
          {title && <h1>{title}</h1>}
        </div>
        {!isHomePage && (
          <button className="fs-menu" onClick={toggleSidebar}>
            {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        )}
      </div>
    </header>
  );
};

Header.PropTypes = {
  title: PropTypes.string,
};
