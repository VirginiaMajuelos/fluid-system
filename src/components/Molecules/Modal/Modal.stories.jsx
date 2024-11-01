import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Modal } from "./Modal";
import { Button } from "@atoms/Button/Button";

export default {
  title: "Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClose: action("closed"),
  },
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    args.onClose();
  };

  return (
    <div className="fs-p24">
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <Modal {...args} show={showModal} onClose={handleClose}>
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
