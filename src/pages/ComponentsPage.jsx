import React, { useEffect, useState } from "react";
import SideBar from "../components/Molecules/SideBar/SideBar";
import components from "../Mocks/componentsData.json";
import { Card } from "../components/Atoms/Card/Card";
import { Link } from "react-router-dom";
import { InputSearch } from "../components/Atoms/InputSearch/InputSearch";
import "./ComponentsPage.css";

const ComponentsPage = () => {
  const [images, setImages] = useState({});
  const [searchText, setSearchText] = useState("");
  //          image: await import(`../assets/${item.image.split("/").pop()}`),

  useEffect(() => {
    const importImages = async () => {
      const imageModules = await Promise.all(
        components.map(async (item) => ({
          id: item.id,
          image: await import(`../assets/${item.image.split("/").pop()}`),
        }))
      );
      const imagesObject = imageModules.reduce((acc, curr) => {
        acc[curr.id] = curr.image.default;
        return acc;
      }, {});
      setImages(imagesObject);
    };
    importImages();
  }, []);

  const filteredComponents = components.filter((item) =>
    item.componentName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <SideBar />
      <section className="fs--section">
        <h1 className="fs-txt-light">Componentes</h1>
        <InputSearch onSearchChange={handleSearchChange} />
        <div className="fs--content-grid">
          {filteredComponents.map((item) => (
            <div key={item.id}>
              <p className="fs-txt-light fs--m2">{item.componentName}</p>
              <Link to={`/components/${item.id}`} className="fs--cursor">
                <Card key={item.id}>
                  <img
                    src={images[item.id]}
                    alt={item.componentName}
                    className="fs--cursor fs--img-components"
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

export default ComponentsPage;
