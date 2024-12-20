import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSidebar } from "@context/SideBarContext";
import { Button } from "@atoms/Button/Button";
import { SideBar } from "@molecules/SideBar/SideBar";
import { CodeSnippet } from "@molecules/CodeSnippet/CodeSnippet";
import { Modal } from "@molecules/Modal/Modal";
import components from "@mocks/componentsData.json";
import componentMap from "@utils/componentMap";
import "./Template.css";

export const Template = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { id } = useParams();
  const component = components.find((item) => item.id === id);


  if (!component) {
    return <p>Component not found.</p>;
  }

  const DynamicComponent = componentMap[component.componentName];

  if (!DynamicComponent) {
    return <p>Component not available.</p>;
  }

  const typeStory = component.typeStory.toLowerCase();
  const storybookURL = `https://fluid-system-components.netlify.app/?path=/docs/${typeStory}-${component.id}--docs`;

  return (
    <>
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />{" "}
      <section className="fs-section--component fs-txt--light">
        <h2 className="fs-h2">{component.title}</h2>
        <p className="fs-template__description">{component.description}</p>
        <DynamicComponent {...component.props} />

        <hr className="fs-divider" />
        <div className="">
          <p className="fs-template__title">Code</p>
        </div>
        <CodeSnippet code={component.code}></CodeSnippet>
        <a
          href={storybookURL}
          className="fs-link fs-txt--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Storybook
        </a>
        <hr className="fs-divider" />
        {component.variableOne && (
          <div className="">
            <p className="fs-template__title">{component.variableOne}</p>
          </div>
        )}
        {component.items && component.items.length > 0 ? (
          <ul>
            {component.items.map((item, index) => (
              <li key={index}>
                <CodeSnippet code={item.variant}></CodeSnippet>
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
