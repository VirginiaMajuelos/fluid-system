import { fn } from "@storybook/test";
import { Card } from "../../../components/Atoms/Card/Card.jsx";

export default {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" }, // Elimina esto si no lo usas
  },
  args: { onClick: fn() },
};

export const Small = {
  args: {
    size: "small",
    children: "Card Lorem ipsum dolor.",
  },
};

export const Medium = {
  args: {
    size: "medium",
    children: "Card Lorem ipsum dolor.",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Card Lorem ipsum dolor.",
  },
};
