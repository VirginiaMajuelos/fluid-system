import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@atoms/Button/Button";

const buttonVariants = [
  {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
    backgroundColor: "#007bff",
  },
  {
    children: "Secondary Button",
    variant: "secondary",
    size: "small",
    backgroundColor: "#6c757d",
  },
  {
    children: "Success Button",
    variant: "success",
    size: "large",
    backgroundColor: "#28a745",
  },
  {
    children: "Danger Button",
    variant: "danger",
    size: "small",
    backgroundColor: "#dc3545",
  },
  {
    children: "Warning Button",
    variant: "warning",
    size: "large",
    backgroundColor: "#ffc107",
  },
];

describe("Button Component Variants", () => {
  buttonVariants.forEach(({ children, variant, size, backgroundColor }) => {
    it(`should render a ${variant} button with size ${size}`, () => {
      render(
        <Button size={size} variant={variant} backgroundColor={backgroundColor}>
          {children}
        </Button>
      );

      const button = screen.getByText(children);
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(`fs-button--${size}`);
      expect(button).toHaveClass(`fs-button--${variant}`);
      expect(button).toHaveStyle({ backgroundColor });
    });
  });
});
