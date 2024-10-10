import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Modal } from "@molecules/Modal/Modal";

describe("Modal Component", () => {
  it("Should render a modal when show is true", () => {
    const children = "This is the contente inside the modal";
    render(<Modal show={true}>{children}</Modal>);

    const modalContent = screen.getByText(children);

    expect(modalContent).toBeInTheDocument();
    console.log(modalContent);
  });
});
