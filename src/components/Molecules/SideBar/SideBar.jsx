import React from "react";
import { Link } from "react-router-dom";
import componentsData from "../../../Mocks/componentsData.json";
import utilsClassData from "../../../Mocks/utilsClassData.json";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside
      className="fs-sidebar"
      aria-label="Sidebar de navegación de componentes"
    >
      <nav className="fs-sidebar__menu" role="navigation">
        <Link to={"/components"}>
          <p className="fs-txt-light fs--body">Componentes</p>
        </Link>
        <ul>
          {componentsData.map((componentItem) => (
            <li key={componentItem.id}>
              <Link
                to={`/components/${componentItem.id}`}
                className="fs--link fs-txt-primary"
              >
                {componentItem.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="fs-txt-light fs--body">Clases útiles</p>
        <ul>
          {utilsClassData.map((utilClass) => (
            <li key={utilClass.id}>
              <Link
                to={`/utils-class/${utilClass.id}`}
                className="fs--link fs-txt-primary"
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

export default SideBar;
