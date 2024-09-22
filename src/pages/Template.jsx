import React, { useState } from "react";
import { useParams } from "react-router-dom";
import components from "../Mocks/componentsData.json";
import componentMap from "../utils/componentMap";
import { Button } from "../components/Atoms/Button/Button";
import SideBar from "../components/Molecules/SideBar/SideBar";
import CodeSnippet from "../components/Molecules/CodeSnippet/CodeSnippet";
import { Modal } from "../components/Molecules/Modal/Modal"; // Asegúrate de importar el Modal
import "./Template.css";

const Template = () => {
  const { id } = useParams();
  const component = components.find((item) => item.id === id);

  // Estado para controlar la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleShowModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  if (!component) {
    return <p>Component not found.</p>;
  }

  const DynamicComponent = componentMap[component.componentName];

  if (!DynamicComponent) {
    return <p>Component not available.</p>;
  }

  const typeStory = component.typeStory.toLowerCase();
  const storybookURL = `http://localhost:6006/?path=/docs/${typeStory}-${component.id}--docs`;

  return (
    <>
      <SideBar />
      <section className="fs-template fs-txt-light">
        <h2 className="fs-h2">{component.title}</h2>
        <p className="fs--body">{component.description}</p>
        <DynamicComponent {...component.props} />

        {/* Lógica específica para el modal */}
        {component.componentName === "Modal" && (
          <>
            <Button variant="mosaic" onClick={handleShowModal}>
              Open Modal
            </Button>
            <Modal show={isModalVisible} onClose={handleCloseModal}>
              <h4 className="fs-h4">Modal Title</h4>
              <p className="fs--body">This is the content inside the modal.</p>
            </Modal>
          </>
        )}

        <hr className="fs--divider" />
        <div className="">
          <p className="fs-template__title">Código</p>
        </div>
        <CodeSnippet code={component.code}></CodeSnippet>
        {/* <pre className="fs--code">
          <code>{component.code}</code>
        </pre> */}
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
          <p>No variants available for this component.</p>
        )}
      </section>
    </>
  );
};

export default Template;
