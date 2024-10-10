import { fn } from "@storybook/test";
import { Card } from "@atoms/Card/Card.jsx";

export default {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
