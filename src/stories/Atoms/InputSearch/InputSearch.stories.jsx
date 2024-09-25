import React, { useState } from "react";
import { InputSearch } from "../../../components/Atoms/InputSearch/InputSearch";

export default {
  title: "Atoms/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSearchChange: { action: "onSearchChange" },
    labelColor: {
      control: { type: "select", options: ["fs-txt-light", "fs-txt-dark"] },
    },
  },
};

const Template = (args) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (value) => {
    setSearchText(value);
    args.onSearchChange(value);
  };

  return <InputSearch {...args} onSearchChange={handleSearchChange} />;
};

// Historia principal
export const Default = Template.bind({});
Default.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  labelColor: "fs-txt-dark", // Color por defecto
};

// Historia con label oscuro
export const LightLabel = Template.bind({});
LightLabel.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  labelColor: "fs-txt-light",
};

// Historia con placeholder personalizado
export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  placeholder: "Buscar componente...",
  labelColor: "fs-txt-dark", // Usamos label oscuro aquí
};
