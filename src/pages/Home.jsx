import React, { useState } from "react";
import { Button } from "../components/Atoms/Button/Button";
import imgHome from "../assets/img-home.webp";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Función para copiar el texto al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install fluid-system");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Mensaje de éxito por 2 segundos
  };

  return (
    <>
      <section className="fs-home-content">
        <div>
          <h2 className="fs-h4 fs-txt-primary fs-txt-center">Fluid system</h2>
          <h1 className="fs-h1--lt fs-h2 fs-txt-light fs-txt-center">
            Build fast components and utils class for your websites
          </h1>
          <p className="fs--body fs-txt-secondary fs--m4">
            Fluid System is an open-source React component library created to
            build fast and awesome websites from scratch with easy to use
            Components.
          </p>
          <h3 className="fs-h4 fs-txt-light fs--m2 fs-txt-center">
            ¿Are you ready?
          </h3>
          <img src={imgHome} alt="image home" width="350px" />
          <article className="fs--m2 fs--p2">
            <p className="fs--body fs-txt-light fs--m4">
              Fluid System is a cutting-edge, lightweight, and highly flexible
              CSS framework tailored for the development of responsive and
              visually captivating web applications. Designed with modern web
              standards in mind, Fluid System empowers developers to create
              stunning user interfaces with ease. Our framework offers a
              comprehensive collection of robust components and utility classes
              that streamline the development process, enabling you to build
              applications faster and with greater efficiency. Whether you’re
              crafting a sleek landing page or a complex web application, Fluid
              System provides the essential tools you need to enhance your
              workflow and elevate the quality of your projects. With an
              emphasis on flexibility, Fluid System allows for seamless
              customization, ensuring that your designs stand out while
              maintaining optimal performance across various devices and screen
              sizes.
            </p>
            <div className="fs-txt-center">
              <Button variant="mosaic">
                <Link to="/components">Get Started</Link>
              </Button>
            </div>

            <p className="fs--body fs-txt-secondary fs--m4">
              To start using Fluid System, simply include our CSS file in your
              project, or install it via npm:
            </p>
            <div className="fs--code">
              <code className="fs--footnote">npm install fluid-system</code>
              <button className="copy-button" onClick={handleCopy}>
                Copy
              </button>
            </div>
            {copySuccess && <p className="copy-success">Copied!</p>}
            <p className="fs--body fs-txt-light fs--m4">
              Once installed, you can start using our utility classes and
              components to build your layouts.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
