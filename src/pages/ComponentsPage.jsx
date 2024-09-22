import React, { useEffect, useState, useCallback } from "react";
import SideBar from "../components/Molecules/SideBar/SideBar";
import components from "../Mocks/componentsData.json";
import { Card } from "../components/Atoms/Card/Card";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import "./ComponentsPage.css";

const ComponentsPage = () => {
  const [images, setImages] = useState({});
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

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

  const handleSearchChange = useCallback(
    debounce((value) => {
      console.log("render");
      setSearchText(value);
    }, 300),
    [] // 300ms de delay
  );

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    handleSearchChange(newSearch); // Llama a la función de debounce
  };

  const filteredComponents = components.filter((item) =>
    item.componentName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <SideBar />
      <section className="fs--section">
        <h1 className="fs-txt-light">Componentes</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
          />
        </form>
        <div className="fs--content-grid">
          {filteredComponents.map((item) => (
            <div key={item.id}>
              <p className="fs-txt-light fs--m2">{item.componentName}</p>
              <Link to={`/components/${item.id}`} className="fs--cursor">
                <Card key={item.id}>
                  <img
                    src={images[item.id]}
                    alt={item.componentName}
                    className="fs--cursor"
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
