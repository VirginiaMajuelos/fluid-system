import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/Molecules/SideBar/SideBar";
import utilsClassData from "../Mocks/utilsClassData.json"; // Asegúrate de que la ruta sea correcta
import CodeSnippet from "../components/Molecules/CodeSnippet/CodeSnippet";

const TemplateUtilsClass = () => {
  const { id } = useParams();
  const utilsClass = utilsClassData.find((item) => item.id === id); // Encuentra el objeto correspondiente al id

  if (!utilsClass) {
    return <div>No se encontró la clase.</div>;
  }

  return (
    <>
      <SideBar />
      <section className="fs-template fs-txt-light">
        <h2 className="fs-h2">{utilsClass.title}</h2>
        <p className="fs-txt--body">{utilsClass.description}</p>
        <hr className="fs--divider" />
        {utilsClass.variableOne && (
          <h4 className="fs-h4 ">{utilsClass.variableOne}</h4>
        )}
        <ul>
          {Array.isArray(utilsClass.items)
            ? utilsClass.items.map((item, index) => (
                <li key={index}>
                  {item.variant}
                  <CodeSnippet code={item.variant} />
                </li>
              ))
            : Object.entries(utilsClass.items).map(([key, variants]) => (
                <div key={key}>
                  <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <ul>
                    {variants.map((variant, index) => (
                      <li key={index}>
                        {variant.variant}
                        <CodeSnippet code={variant.variant} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </ul>
      </section>
    </>
  );
};

export default TemplateUtilsClass;
