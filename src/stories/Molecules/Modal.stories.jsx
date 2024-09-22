// Modal.stories.js
import React, { useState } from "react";
import { action } from "@storybook/addon-actions"; // Importar action para capturar/registrar eventos
import { Modal } from "../../components/Molecules/Modal/Modal";
import { Button } from "../../components/Atoms/Button/Button";

export default {
  title: "Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClose: action("closed"), // Captura la acción del cierre en Storybook
  },
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(false); // Inicializa el modal como cerrado

  const handleClose = () => {
    setShowModal(false);
    args.onClose(); // Registra la acción de cierre en Storybook
  };

  return (
    <div className="fs--p14">
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <Modal {...args} show={showModal} onClose={handleClose}>
        <h4 className="fs-h4">Modal Title</h4>
        <p className="fs--p2 fs--body">This is the content inside the modal.</p>
      </Modal>
    </div>
  );
};

// Historias de ejemplo
export const Default = Template.bind({});
Default.args = {
  show: false,
};
