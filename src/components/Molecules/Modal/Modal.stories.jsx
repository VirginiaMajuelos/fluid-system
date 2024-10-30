import React from "react";
import { action } from "@storybook/addon-actions";
import { Modal } from "@molecules/Modal/Modal";

export default {
  title: "Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    onClose: action("closed"),
    triggerId: "modal-1", 
    buttonText: "Open Modal", 
    variant: "secondary",
  },
};

const Template = (args) => {
  return (
    <div className="fs-p24">
      <Modal {...args}>
        <h4 className="fs-h4">Modal Title</h4>
        <p className="fs-p2 fs-body">This is the content inside the modal.</p>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  show: false,
};
