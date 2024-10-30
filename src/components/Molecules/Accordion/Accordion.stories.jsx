import React, { useState } from "react";
import { Accordion } from "./Accordion";

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
  const [show, setShow] = useState(false);

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
  variant: "inverse",
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};
