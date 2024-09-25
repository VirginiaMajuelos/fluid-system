import React from "react";
import { Spinner } from "../../../components/Atoms/Spinner/Spinner.jsx";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered", // Centra el componente en la vista de Storybook
  },
  // Controladores para cambiar valores en el panel de Storybook
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

// Story para mostrar el spinner en su variante 'dots'
export const Dots = {
  args: {
    variant: "dots",
    size: "medium",
    color: "primary",
  },
};

// Story para mostrar el spinner en su variante 'circle'
export const Circle = {
  args: {
    variant: "circle",
    size: "medium",
    color: "secondary",
  },
};

// Puedes agregar más stories para mostrar diferentes combinaciones
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
