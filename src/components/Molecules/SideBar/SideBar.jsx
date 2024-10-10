import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import componentsData from "@mocks/componentsData.json";
import utilsClassData from "@mocks/utilsClassData.json";
import "./SideBar.css";

export const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <aside
      className={`fs-sidebar ${isOpen ? "fs-sidebar--open" : ""}`}
      aria-label="Sidebar de navegación de componentes"
    >
      <nav className="fs-sidebar__menu" role="navigation">
        <Link to={"/components"} onClick={closeSidebar}>
          <p className="fs-txt--light fs-body">Componentes</p>
        </Link>
        <ul>
          {componentsData.map((componentItem) => (
            <li key={componentItem.id}>
              <Link
                to={`/components/${componentItem.id}`}
                className="fs-link fs-txt--primary"
                onClick={closeSidebar}
              >
                {componentItem.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="fs-txt--light fs-body">Clases útiles</p>
        <ul>
          {utilsClassData.map((utilClass) => (
            <li key={utilClass.id}>
              <Link
                to={`/utils-class/${utilClass.id}`}
                className="fs-link fs-txt--primary"
                onClick={closeSidebar}
              >
                {utilClass.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};
