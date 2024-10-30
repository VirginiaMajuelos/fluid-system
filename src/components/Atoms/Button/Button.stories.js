import { fn } from "@storybook/test";
import { Button } from "./Button.jsx";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    children: "Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};
export const Success = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Danger = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Warning = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};

export const Mosaic = {
  args: {
    children: "Mosaic Button",
    variant: "mosaic",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Button",
  },
};
