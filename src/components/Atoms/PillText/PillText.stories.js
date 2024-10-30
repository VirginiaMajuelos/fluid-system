import { PillText } from "./PillText";

export default {
  title: "Atoms/PillText",
  component: PillText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

export const PrimaryText = {
  args: {
    status: "primary",
    children: "Primary Text",
  },
};

export const SecondaryText = {
  args: {
    status: "secondary",
    children: "Secondary Text",
  },
};

export const TertiaryText = {
  args: {
    status: "tertiary",
    children: "Tertiary Text",
  },
};
