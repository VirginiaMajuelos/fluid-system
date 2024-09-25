import React, { useState } from "react"; // Asegúrate de importar React
import { Accordion } from "../../components/Molecules/Accordion/Accordion";

export default {
  title: "Molecules/Accordion",
  component: Accordion,
  decorators: [
    (Accordion) => (
      <div style={{ margin: "3rem" }}>
        <Accordion />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

const Template = (args) => {
  const [show, setShow] = useState(false); // Inicializa el estado del acordeón

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <Accordion {...args} show={show} onShow={handleShow}>
      {args.children}
    </Accordion>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "light", // O "inverse" según lo que necesites
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", // Texto por defecto
};
