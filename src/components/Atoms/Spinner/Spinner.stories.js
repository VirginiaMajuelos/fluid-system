import { Spinner } from "./Spinner";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["dots", "circle"],
      description: "Tipo de spinner a mostrar: dots o circle.",
    },
    size: {
      control: { type: "select" },
      options: ["medium", "large"],
      description: "Tamaño del spinner: medium o large.",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Color del spinner: primary, secondary o tertiary.",
    },
  },
  tags: ["autodocs"],
};

export const Dots = {
  args: {
    variant: "dots",
    size: "medium",
    color: "primary",
  },
};

export const Circle = {
  args: {
    variant: "circle",
    size: "medium",
    color: "secondary",
  },
};

export const LargeDots = {
  args: {
    variant: "dots",
    size: "large",
    color: "tertiary",
  },
};

export const LargeCircle = {
  args: {
    variant: "circle",
    size: "large",
    color: "primary",
  },
};
