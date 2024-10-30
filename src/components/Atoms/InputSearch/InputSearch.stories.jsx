import React, { useState } from "react";
import { InputSearch } from "./InputSearch";

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
      control: { type: "select", options: ["fs-txt--light", "fs-txt--dark"] },
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

export const Default = Template.bind({});
Default.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  labelColor: "fs-txt--dark",
};

export const LightLabel = Template.bind({});
LightLabel.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  labelColor: "fs-txt--light",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  onSearchChange: (value) => console.log("Search text:", value),
  placeholder: "Buscar componente...",
  labelColor: "fs-txt--dark",
};
