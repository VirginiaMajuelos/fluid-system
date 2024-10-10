import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "@atoms/Card/Card";

const cardVariants = [
  {
    size: "small",
    children: "Card tamaño small",
  },
  {
    size: "medium",
    children: "Card tamaño medium",
  },
  {
    size: "large",
    children: "Card tamaño large",
  },
];

describe("Card Component Variants", () => {
  cardVariants.forEach(({ size, children }) => {
    it(`should render a ${size} card`, () => {
      render(<Card size={size}>{children}</Card>);

      const card = screen.getByText(children);
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass(`fs-card--${size}`);
    });
  });
});
