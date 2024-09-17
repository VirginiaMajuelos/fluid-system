import React from "react";
import { Button } from "../components/Atoms/Button/Button";
import { Card } from "../components/Atoms/Card/Card";

const Home = () => {
  return (
    <section className="fs-home-content">
      <div>
        <h1 className="fs-h1 fs-txt-primary">Fluid system</h1>
        <p className="fs--body fs-txt-secondary fs--m4">
          Fluid System is an open-source React component library created to
          build fast and awesome websites from scratch with easy to use
          Components.
        </p>
        <h3 className="fs-h3 fs-txt-light fs--m3">¿Are you ready?</h3>
        <Button variant="mosaic">Get started</Button>
        <Card size="large">
          <h4 className="">Title card</h4>
          <p className="fs--basic-dark">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Home;
