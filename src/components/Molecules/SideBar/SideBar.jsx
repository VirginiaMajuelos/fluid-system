import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="fs-sidebar">
      <nav className="fs-sidebar__menu">
        <p>Componentes</p>
        <ul>
          <li>Button</li>
          <li>Card</li>
          <li>Componente 1</li>
          <li>Componente 2</li>
          <li>Componente 3</li>
          <li>Componente 4</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
