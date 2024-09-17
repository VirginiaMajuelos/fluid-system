import { fn } from "@storybook/test";

import { Button } from "../../../components/Atoms/Button/Button.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
