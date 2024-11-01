import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "@context/SideBarContext";
import { SideBar } from "@molecules/SideBar/SideBar";
import components from "@mocks/componentsData.json";
import { Card } from "@atoms/Card/Card";
import { InputSearch } from "@atoms/InputSearch/InputSearch";
import { imageMap } from "@utils/componentMap";
import "./ComponentsPage.css";

export const ComponentsPage = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const [searchText, setSearchText] = useState("");

  const filteredComponents = components.filter((item) =>
    item.componentName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <section className="fs-section">
        <h1 className="fs-txt--light">Components</h1>
        <InputSearch onSearchChange={handleSearchChange} />
        <div className="fs-content-grid--movies">
          {filteredComponents.map((item) => (
            <div className="fs-content-grid__movie" key={item.id}>
              <p className="fs-txt--light fs-m2">{item.componentName}</p>
              <Link
                to={`/components/${item.id}`}
                className="fs-cursor"
                onClick={closeSidebar}
              >
                <Card>
                  <img
                    src={imageMap[item.componentName]}
                    alt={item.componentName}
                    className="fs-cursor fs-img-components"
                  />
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
