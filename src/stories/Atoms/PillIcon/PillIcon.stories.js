// PillIcon.stories.jsx
import { PillIcon } from "../../../components/Atoms/PillIcon/PillIcon";

export default {
  title: "Atoms/PillIcon",
  component: PillIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["correct", "warning", "alert"],
    },
    shape: { control: "select", options: ["circle", "square"] },
    showIcon: { control: "boolean" },
  },
};

export const CircleCorrect = {
  args: {
    status: "correct",
    shape: "circle",
    showIcon: true,
    backgroundColor: "#15be77",
    fontColor: "#fff",
  },
};

export const SquareWarning = {
  args: {
    status: "warning",
    shape: "square",
    showIcon: true,
    backgroundColor: "#ffa100",
    fontColor: "#fff",
  },
};

export const SquareAlert = {
  args: {
    status: "alert",
    shape: "square",
    showIcon: true,
    backgroundColor: "#ff005c",
    fontColor: "#fff",
  },
};
