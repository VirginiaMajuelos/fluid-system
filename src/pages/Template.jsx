import React from "react";
import { useParams } from "react-router-dom";
import components from "../Mocks/componentsData.json";
import componentMap from "../utils/componentMap";
import { Card } from "../components/Atoms/Card/Card";
import SideBar from "../components/Molecules/SideBar/SideBar";
import "./Template.css";

const Template = () => {
  const { id } = useParams();
  const component = components.find((item) => item.id === id);

  if (!component) {
    return <p>Component not found.</p>;
  }

  // Renderización dinámica del componente usando el mapeo importado
  const DynamicComponent = componentMap[component.componentName];

  if (!DynamicComponent) {
    return <p>Component not available.</p>;
  }

  const storybookURL = `http://localhost:6006/?path=/docs/atoms-${id}--docs`;

  return (
    <>
      <SideBar />
      <section className="fs-template fs-txt-light">
        <h2 className="fs-h2">{component.title}</h2>
        <p className="fs--body">{component.description}</p>
        <DynamicComponent {...component.props} />
        <hr className="fs--divider" />
        <div className="">
          <p className="fs-template__title">Código</p>
        </div>
        <Card size="small">
          <pre>
            <code>{component.code}</code>
          </pre>
        </Card>
        <a
          href={storybookURL}
          className="fs--link fs-txt-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Storybook
        </a>
        <hr className="fs--divider" />
        {component.variableOne && (
          <div className="">
            <p className="fs-template__title">{component.variableOne}</p>
          </div>
        )}
        {component.items && component.items.length > 0 ? (
          <ul>
            {component.items.map((item, index) => (
              <li key={index}>
                <p>
                  <code>{item.variant}</code>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No variants available for this component.</p> // Mensaje alternativo
        )}
      </section>
    </>
  );
};

export default Template;
